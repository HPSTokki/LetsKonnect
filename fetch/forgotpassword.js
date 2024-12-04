

document.getElementById('sendEmailReset').addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = document.getElementById('emailAddress').value

    fetch('http://localhost:6001/send-reset-code', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert('Reset Code Sent')
            document.getElementById('sendEmailReset').classList.remove('active')
            document.getElementById('passResetField').classList.add('active')
        }
    })
    .catch(error =>{
        console.error("error", error)
    })
})


function togglePass(checkbox, passwordField) {
    checkbox.addEventListener('change', ()=>{
        if (checkbox.checked) {
            passwordField.type = 'text'
        } else {
            passwordField.type = 'password'
        }
    })
}

const passField1 = document.getElementById('newPass')
const passField2 = document.getElementById('confirmPass')
const chkBox1 = document.getElementById('showPass')
const chkBox2 = document.getElementById('showPass1')


togglePass(chkBox1, passField1)
togglePass(chkBox2, passField2)

document.getElementById('resendCode').addEventListener('click', (e)=>{
    e.preventDefault()

    const email = document.getElementById('emailAddress').value

    if (!email) {
        alert("Please put an email")
        return
    }

    fetch('http://localhost:6001/resend-reset-code', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(`New Code Sent to Email: ${email}`)
        } else {
            alert(`Failed to resend Email`)
        }
    })
    .catch(error => {
        console.log("Error: " ,error)
    })
})

document.getElementById('passResetField').addEventListener('submit', (e)=> {
    e.preventDefault()

    const code = document.getElementById('resetCode').value
    const newPassword = document.getElementById('newPass').value
    const confirmPass = document.getElementById('confirmPass').value

    if (newPassword != confirmPass) {
        alert('Password Do Not Match')
        return
    }

    if (!newPassword || !confirmPass) {
        alert('Please input New Password and Confirm Password')
        return
    }

    fetch('http://localhost:6001/verify-reset-code', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            code,
            newPassword
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert('Password Reset Succesfully')
        }
    })
    .catch(error =>{
        console.error("Error: ", error)
    })

})