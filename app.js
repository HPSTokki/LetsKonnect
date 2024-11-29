if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mysql = require('mysql')
const { use } = require('browser-sync')





const app = express()
app.use(express.json())
app.use(cors())
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
})

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


// Endpoints goes here

app.post('/register', (req, res)=>{
    const {email, age, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({message: 'Email, Password and Age Required'})
    }

    const query = 'INSERT INTO tbl_usersacc (emailAddress, password, age) VALUES (?, ?, ?)'
    db.query(query, [email, password, age], (err, results)=>{
        if (err) {
            console.log('Error Inserting Data:', err)
            return res.status(500).json({message: 'Error Registering User'})
        } else {
            res.status(201).json({message: "Registered Succesfully"})
        }
    })

})

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

app.post('/reg-1', (req, res)=>{
    const {userAcc_ID, givenName, middleName, lastName, suffix, age, dateOfBirth, sex, blk_street, sitio, email, contacts} = req.body

    const insertQuery1 = "INSERT INTO kk_personalinfo (userAcc_ID, givenName, middleName, lastName, suffix, age, dateOfBirth, sex) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    const insertQuery2 = "INSERT INTO kk_personalinfo2(userAcc_ID, blk_street, sitio, emailAddress, contacts) VALUES (?, ?, ? ,? ,?)"

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

app.listen(process.env.SERVER_PORT || 3000, ()=> {
    try {
        console.log(`Listening to Port ${process.env.SERVER_PORT || 3000}`)
    } catch (error) {
        console.log(`Error Couldn't Connect to Port: ${process.env.SERVER_PORT || 3000}`)
    }
})
