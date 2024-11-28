// Register for Acc Endpoint

document.getElementById("regForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('regEmail').value;
    const age = document.getElementById('regAge').value;
    const password = document.getElementById('regPass').value;

    fetch(`http://localhost:5010/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({email, age, password})
    })
    .then(response => response.json())
    .then(data => {
        if(data.message) {
            alert(data.message)
        }
    })
    .catch(error => {
        console.log('Error:', error)
    })
})

// Login Account Endpoint

document.getElementById('logInForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('logInEmail').value
    const password = document.getElementById('LogInpass').value

    fetch('http://localhost:6001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
            if (data.userAcc_ID) {
                console.log('User  ID:', data.userAcc_ID);
                window.location.href = "pages/user-kkprofile.html"
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

// KK Registration First Endpoint

document.getElementById('some-form').addEventListener('submit', function(e){
    e.preventDefault();

    // First KK Personal Info
    const userAcc_ID = data.userAcc_ID
    const givenName = document.getElementById('givenName').value
    const middleName = document.getElementById('middleName').value
    const lastName = document.getElementById('lastName').value
    const suffix = document.getElementById('suffix').value
    const dateOfBirth = new Date(document.getElementById('dateOfBirth').value)
    const sex = document.getElementById('sex').value

    // Second KK Personal Info

    const blkstrt = document.getElementById('blk-street')
    const sitio = document.getElementById('Sitio')
    const email = document.getElementById('emailAddress')
    const contacts = document.getElementById('contactNumber')

    const today = new Date()
    let age = today.getFullYear() - dateOfBirth.getFullYear()
    const monthDiff = today.getMonth() - dateOfBirth.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())){
       age--;
    }

    if (age < 15 || age > 30) {
        return alert("Only ages 15 to 30 can register in KK Profiling")
    }


    fetch('http://localhost:6001/reg-1', {
        method: 'POST',
        'headers': {
            'Content-Type' : 'application/json',
        },
        'body': JSON.stringify({userAcc_ID,
            givenName,
            middleName,
            lastName,
            suffix,
            age,
            dateOfBirth: dateOfBirth.toISOString().split('T')[0],
            sex,
            blkstrt,
            sitio,
            email,
            contacts})
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
            if (data.userAcc_ID) {
                console.log('User ID: ', data.userAcc_ID)
            }
        }
    })
    .catch(error => {
        console.log('error:', error)
    })

    console.log('Sending data:', {
        userAcc_ID,
        givenName,
        middleName,
        lastName,
        suffix,
        age,
        dateOfBirth: dateOfBirth.toISOString().split('T')[0],
        sex,
        blkstrt,
        sitio,
        email,
        contacts
    });

    // fetch('http://localhost:6001/reg-1', {
    //     method: 'POST',
    //     'headers': {
    //         'Content-Type' : 'application/json',
    //     },
    //     'body': JSON.stringify({userAcc_ID, blkstrt, sitio, email, contacts})
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.message) {
    //         alert(data.message);
    //         if (data.userAcc_ID) {
    //             console.log('User ID: ', data.userAcc_ID)
    //         }
    //     }
    // })
    // .catch(error => {
    //     console.log('error:', error)
    // })
 

})