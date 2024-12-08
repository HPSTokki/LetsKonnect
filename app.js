if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv').config('/')
const cors = require('cors')
const mysql = require('mysql')
const { use, reset } = require('browser-sync')
const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const mailer = require('nodemailer')
const crypto = require('crypto')
const { error } = require('console')







const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
})

console.log(process.env.DB_HOST,
            process.env.DB_USER,
            process.env.DB_PASS,
            process.env.DB_PORT,
            process.env.DB_NAME,)

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}))

db.connect((err)=>{
    if (err) {
        console.log("Database Connection Failed: ", err);
        return;
    }
    console.log("Connected to Database")
})

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage}).single('image')

app.post('/upload', (req, res)=>{
    upload(req, res, (err) => {
        if (err) {
            console.log("Error: ", err)
            return res.status(400).send(err)
        }
        if (!req.file) {
            return res.status(400).send('No file upload')
        }

        const complete_name = req.body.complete_name
        const userAcc_ID = req.body.userAcc_ID

        const data = {
            name: req.file.filename,
            path: req.file.path,
            complete_name: complete_name,
            userAcc_ID: userAcc_ID
        }

        const query = 'INSERT INTO kk_personalinfo7 (userAcc_ID, name, path, complete_name) VALUES (?, ?, ?, ?)'
        db.query(query,[data.userAcc_ID, data.name, data.path, data.complete_name], (err, results)=>{
            if (err) throw err;
            res.send("Image and Data Uploaded into Database")
        })

    })
})

// Endpoints goes here

// Register Endpoint

app.post('/register', (req, res)=>{
    const {email, age, password} = req.body;
    const date = new Date()

    if (!email || !password) {
        return res.status(400).json({message: 'Email, Password and Age Required'})
    }

    const query = 'INSERT INTO tbl_usersacc (emailAddress, password, age, dateOfReg) VALUES (?, ?, ?, ?)'
    db.query(query, [email, password, age, date], (err, results)=>{
        if (err) {
            console.log('Error Inserting Data:', err)
            return res.status(500).json({message: 'Error Registering User'})
        } else {
            res.status(201).json({message: "Registered Succesfully"})
        }
    })

})

// Login Endpoint

app.post('/login', (req, res)=>{
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and Password are required'})
    }

    const query = 'SELECT userAcc_ID, password FROM tbl_usersacc WHERE emailAddress = ?'
    db.query(query, [email], (err, results)=>{
        if (err) {
            console.log('Error Querying Database:',err)
            return res.status(500).json({ message: 'Error Logging In'})
        }

        if (results.length === 0) {
            return res.status(401).json({message: 'User Doesn\'t Exists'})
        }

        const user = results[0];

        if (user.password != password) {
            return res.status(401).json({ message:'Invalid Email or password'})
        }
        req.session.userAcc_ID = user.userAcc_ID;
        
        res.status(200).json({ message: 'Login Succesfully', userAcc_ID: user.userAcc_ID})

    })

})

// Reset Password for User

app.post('/send-reset-code', (req, res)=>{
    const email = req.body.email
    const query = "SELECT * FROM tbl_usersacc WHERE emailAddress = ?"
    db.query(query, [email], (err, result)=>{
        if (err) {
            console.error("Error: ", err)
            return res.status(500).json({message: "DATABASE ERROR"})
        }
        if (result.length === 0) {
            return res.status(400).json({message: "No Account Found"})
        }

        const resetCode = crypto.randomInt(100000, 999999).toString()

        const expirationTime = new Date(Date.now() + 60 * 1000)

        const query2 = "UPDATE tbl_usersacc SET reset_code = ?, reset_code_expiration = ? WHERE emailAddress = ?"
        db.query(query2, [resetCode, expirationTime, email], (err)=>{
            if (err) {
                console.log("Error: ", err)
                return res.status(500).json({message: "Database Connection Error"})
            }

            const transporter = mailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'alexanderaguirresotto@gmail.com',
                    pass: 'lafn ifpt mpgo gabj'
                }
            })

            const mailOptions = {
                from: 'alexanderaguirresotto@gmail.com',
                to: email,
                subject: 'Password Reset Code',
                text: `Hiiii, here reset pass, if no send, ignore ${resetCode}`
            }

            transporter.sendMail(mailOptions, (error)=>{
                if (error) {
                    console.log("Error: ", error)
                    return res.status(500).json({success: false, message: "Error Sending"})
                }
                res.json({success: true, message: "SENT!"})
            })

        })

    })

})

app.post('/verify-reset-code', (req, res)=>{
    const {code, newPassword} = req.body
    const query = "SELECT * FROM tbl_usersacc WHERE reset_code = ? AND reset_code_expiration > NOW()"

    console.log({code, newPassword})

    db.query(query, [code], (error, result)=>{
        if (error) {
            console.error("Error:", error)
            return res.status(500).json({success: false, message:"Error Accessing Database"})
        }
        if (result.length === 0) {
            return res.status(400).json({success: false, message: "Invalid or Expired Code"})
        }
        bcrypt.hash(newPassword, 10, (err, hashedPassword)=>{
            if (err) {
                console.error("Error:", err)
                return res.status(500).json({success: false, message: "Error Hashing Password"})
            }

            const query2 = "UPDATE tbl_usersacc SET password = ?, reset_code = NULL, reset_code_expiration = NULL WHERE reset_code = ?"
            db.query(query2, [hashedPassword, code], (err)=>{
                if (err) {
                    console.log("Error:", err)
                    return res.status(500).json({success: false, message: 'Database Error'})
                }
                res.json({success: true, message: 'Password Changed Succesfully'})
            })

        })
    })
})

app.post('/resend-reset-code', (req, res) => {
    const email = req.body.email;

    // Check if the email is registered
    db.query('SELECT * FROM tbl_usersacc WHERE emailAddress = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'Database error' });
        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'Account not registered' });
        }

        // Generate a new 6-digit code
        const resetCode = crypto.randomInt(100000, 999999).toString();

        // Set new expiration time (e.g., 10 minutes from now)
        const expirationTime = new Date(Date.now() + 60 * 1000);

        // Update the reset code and expiration time in the database
        db.query('UPDATE tbl_usersacc SET reset_code = ?, reset_code_expiration = ? WHERE emailAddress = ?', [resetCode, expirationTime, email], (err) => {
            if (err) return res.status(500).json({ success: false, message: 'Database error' });

            // Send the new reset code via email
            const transporter = mailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'alexanderaguirresotto@gmail.com',
                    pass: 'lafn ifpt mpgo gabj'
                }
            });

            const mailOptions = {
                from: 'alexanderaguirresotto@gmail.com',
                to: email,
                subject: 'Password Reset Code',
                text: `Hiiii, here reset pass, if no send, ignore ${resetCode}`
            };

            transporter.sendMail(mailOptions, (error) => {
                if (error) return res.status(500).json({ success: false, message: 'Error sending email' });
                res.json({ success: true, message: 'New reset code sent to your email' });
            });
        });
    });
});

// Admin Login

app.post('/admin-login', (req, res) => {
    const { emailAddress, password } = req.body;

    if (!emailAddress || !password) {
        return res.status(400).json({ message: 'Email and Password are required' });
    }

    const query = 'SELECT kk_adminID, password FROM tbl_kkadmin WHERE emailAddress = ?';
    db.query(query, [emailAddress], (err, results) => {
        if (err) {
            console.log('Error Querying Database:', err);
            return res.status(500).json({ message: 'Error Logging In' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'User  Doesn\'t Exist' });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid Email or Password' });
        }
        req.session.kk_adminID = user.kk_adminID;

        res.status(200).json({ message: 'Login Successfully', kk_adminID: user.kk_adminID });
    });
});

// Registration KK Profile Endpoint

app.post('/reg-1', (req, res)=>{
    const {userAcc_ID, givenName, middleName, lastName, suffix, age, dateOfBirth, sex, blk_street, sitio, email, contacts} = req.body

    const insertQuery1 = "INSERT INTO kk_personalinfo (userAcc_ID, givenName, middleName, lastName, suffix, age, dateOfBirth, sex) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    const insertQuery2 = "INSERT INTO kk_personalinfo2(userAcc_ID, blk_street, sitio, emailAddress, contacts) VALUES (?, ?, ? ,? ,?)"

    console.log("Data: ", {userAcc_ID, givenName, middleName, lastName, suffix, age, dateOfBirth, sex, blk_street, sitio, email, contacts})

    if (!givenName || !middleName || !lastName || !suffix || !age || !dateOfBirth || !sex) {
        return res.status(400).json({message: "Please input all the necessary details"})
    }

    if (!blk_street || !sitio || !email || !contacts) {
        return res.status(400).json({message: "Please input all the necessary details"})
    }

    console.log('Inserting into kk_personalinfo:', { userAcc_ID, givenName, middleName, lastName, suffix, age, dateOfBirth, sex });
    console.log('Inserting into kk_personalinfo2:', { userAcc_ID, blk_street, sitio, email, contacts });


    db.query(insertQuery1, [userAcc_ID, givenName, middleName, lastName, suffix, age, dateOfBirth, sex], (err, res1)=>{
        if(err) {
            console.log("Error Querying into Database")
            console.log("Error inserting into kk_personalinfo:", err);
            return res.status(500).json({message: "Error Registering..."})
        } 

        db.query(insertQuery2, [userAcc_ID, blk_street, sitio, email, contacts], (err, result2) => {
            if (err) {
                console.log("Error inserting into kk_personalinfo2:", err);
                return res.status(500).json({ message: "Error Registering" });
            }
    
            return res.status(200).json({ message: "Registered Successfully" });
        });
    
        console.log('Received data:', req.body);
        
    })

})

// KK Registration Endpoint 2

app.post('/reg-2', (req, res)=>{
    const {userAcc_ID, civilStatus, youthAge, educationalBackground, youthClass, workStatus, regVoter, regNatVoter, soloParent, kid_count, isLGBT, attendedKK, attendedTime, personWDisability, partIndigenous} = req.body
    const query1 = "INSERT INTO kk_personalinfo3 (userAcc_ID, civilStatus, youthAge, educationalBackground, youthClass, workStatus, regVoter, regNatVoter) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    const query2 = "INSERT INTO kk_personalinfo4 (userAcc_ID, soloParent, kid_count, isLGBT, attendedKK, attendedTime, personWDisability, partIndigenous) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    
    if (!userAcc_ID || !civilStatus || !youthAge || !educationalBackground || !youthClass || !workStatus || !regVoter || !regNatVoter || !soloParent || !kid_count || !isLGBT || !attendedKK || !attendedTime || !personWDisability || !partIndigenous) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    console.log("First Insert: ", {userAcc_ID, civilStatus, youthAge, educationalBackground, youthClass, workStatus, regVoter, regNatVoter})
    console.log("First Insert: ", {userAcc_ID, soloParent, kid_count, isLGBT, attendedKK, attendedTime, personWDisability, partIndigenous})

    db.query(query1, [userAcc_ID, civilStatus, youthAge, educationalBackground, youthClass, workStatus, regVoter, regNatVoter], (err, result) => {
        if (err) {
            res.status(500).json({message: "Error querying into database..."})
            console.log("Error: ", err)
        }

        db.query(query2, [userAcc_ID, soloParent, kid_count, isLGBT, attendedKK, attendedTime, personWDisability, partIndigenous], (err, result1) => {
            if (err) {
                res.status(500).json({message: "Error querying into database...."})
                console.log("Error: ", err)
            }

            return res.status(200).json({message: "Registered succesfully"})

        })

        console.log("Received Data: ", req.body)

    })

})

// KK Registration Endpoint 3

app.post('/reg-3', (req, res)=>{
    const {userAcc_ID ,licensedProd, company, position} = req.body
    const query = "INSERT INTO kk_personalinfo5 (userAcc_ID, licensedProd, company, position) VALUES (?, ?, ?, ?)"

    console.log("Data Query: ", {userAcc_ID ,licensedProd, company, position})

    db.query(query, [userAcc_ID, licensedProd, company, position], (err, result)=>{
        if(err) {
            console.log("Errors: ", err)
            return res.status(500).json({message: "Error Querying into222 Database..."})
            
        } 

        return res.status(200).json({message: "Data inserted into database...."})

    })

    console.log("Received Data: ", req.body)

})

// KK Registration Endpoint 4

app.post('/reg-4', (req, res)=>{
    const {userAcc_ID, lvl, school, ydo_recipient, other_recipient, other_detes} = req.body
    const query = "INSERT INTO kk_personalinfo6 (userAcc_ID, lvl, school, ydo_recipient, other_recipient, other_detes) VALUES (?, ?, ?, ?, ?, ?)"

    console.log('Body:', {userAcc_ID, lvl, school, ydo_recipient, other_detes, other_detes})

    db.query(query, [userAcc_ID, lvl, school, ydo_recipient, other_recipient, other_detes], (err, results)=>{
        if (err) {
            console.log(err)
            return res.status(500).json({message: "Error Querying into database...."})
        } 
        return res.status(200).json("Data Submitted Into Database Succesfully")
    })

    console.log('Received Data: ', req.body)

})

// Table Survey Remarks

app.get('/api/surveys', (req, res) => {
    const query = `
        SELECT 
            s.surveyID, 
            s.category, 
            COUNT(CASE WHEN sr.ques1 IS NOT NULL THEN 1 END) AS total_question1_responses,
            COUNT(CASE WHEN sr.ques2 IS NOT NULL THEN 1 END) AS total_question2_responses
        FROM 
            tbl_survey s
        LEFT JOIN 
            tbl_surveyres sr ON s.surveyID = sr.surveyID
        GROUP BY 
            s.surveyID, s.category;
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            console.log("error: ", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.delete('/api/surveys/:id', (req, res) => {
    const surveyId = req.params.id;
    db.query('DELETE FROM tbl_surveylist WHERE id = ?', [surveyId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Survey deleted successfully' });
    });
});


// Chart APIs

app.get('/chart-api', (req, res)=>{
    const query = `SELECT 
            'College Graduate' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo3
        WHERE educationalBackground = 'College Graduate'

        UNION ALL

        SELECT 
            'Senior Highschool Graduate' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo3
        WHERE educationalBackground = 'Senior Highschool Graduate'

        UNION ALL

        SELECT 
            'Junior Highschool Graduate' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo3
        WHERE educationalBackground = 'Junior Highschool Graduate'

        UNION ALL

        SELECT 
            'Undergraduate' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo3
        WHERE educationalBackground = 'Undergraduate'

        UNION ALL

        SELECT 
            'Solo Parent' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo4
        WHERE soloParent = 'Yes'

        UNION ALL

        SELECT 
            'Person with Disability' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo4
        WHERE personWDisability = 'Yes'

        UNION ALL

        SELECT 
            'LGBT' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo4
        WHERE isLGBT = 'Yes'

        UNION ALL

        SELECT 
            'Indigenous' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo4
        WHERE partIndigenous = 'Yes'

        UNION ALL

        SELECT 
            'Employed' AS Status,
            COUNT(*) AS Count
        FROM kk_personalinfo3
        WHERE workStatus = 'Employed';`
    db.query(query, (err, result)=>{
        if (err) {
            return res.status(500).json({error: err.message})
        }
        res.json(result)
    })
})

// Number of Registrants Endpoint

app.get('/get-participants', (req, res)=>{

    const query = "SELECT COUNT(*) AS total FROM tbl_usersacc";
    const query2 = "SELECT DATE_FORMAT(dateOfReg, '%Y-%m') AS month, COUNT(*) AS count FROM tbl_usersacc GROUP BY month ORDER BY month DESC"

    db.query(query, (err, result)=>{
        if (err) {
            console.log("Error: ", error)
            return res.status(500).json({message: 'Error Connecting To Database'})
        } 
        db.query(query2, (err, results1)=>{
            if (err) {
                console.log("Error: ", error)
                return res.status(500).json({message: 'Error Connecting To Database'})
            } 

            res.json({
                total: result[0].total,
                monthly: results1
            })
            console.log({
                total: result[0].total,
                monthly: results1
            })
        })
    })


})

// Event Posts Endpoints Here

app.post('/evt-post', (req, res)=> {
    const {date, time, location, requirements, employer, description, full_details} = req.body

    const query = "INSERT INTO tbl_eventposts (date, time, location, requirements, employer, description, full_details) VALUES (?, ?, ?, ?, ?, ?, ?)"
    if (!date || !time || !location) {
        res.status(400).json({message: "Please Fill in the details"})
    }

    console.log("Inserting into tbl_eventposts: ", {date, time, location, requirements, employer, description, full_details})

    db.query(query, [date, time, location, requirements, employer, description, full_details], (err, results)=>{
        if (err) {
            console.log("Error at: ", err)
           return res.status(500).json({message: "Error inserting into database"})
        } else {
            res.status(200).json({message: "Post created succesfully!"})
        }
    })


})

app.get('/evt-posts', (req, res)=>{
    const query = "SELECT * FROM tbl_eventposts"

    db.query(query, (err, results) =>{
        if(err) {
            console.log("Error:", err)
            return res.status(500).json({message: "Error getting data from Database"})
        }
        return res.status(200).json(results)
    })

})












// Server Port 

app.listen(process.env.SERVER_PORT || 3000, ()=> {
    try {
        console.log(`Listening to Port ${process.env.SERVER_PORT || 3000}`)
    } catch (error) {
        console.log(`Error Couldn't Connect to Port: ${process.env.SERVER_PORT || 3000}`)
    }
})
