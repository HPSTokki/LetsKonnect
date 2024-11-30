// KK First Fetch

document.getElementById('some-form').addEventListener('submit', function(e){
    e.preventDefault();

    const userAcc_ID = sessionStorage.getItem('userAcc_ID')
    // First KK Personal Info
    const givenName = document.getElementById('givenName').value
    const middleName = document.getElementById('middleName').value
    const lastName = document.getElementById('lastName').value
    const suffix = document.getElementById('suffix').value
    const dateOfBirth = new Date(document.getElementById('dateOfBirth').value)
    const sex = document.getElementById('Sex').value

    // Second KK Personal Info

    const blk_street = document.getElementById('blk-street').value
    const sitio = document.getElementById('Sitio').value
    const email = document.getElementById('emailAddress').value
    const contacts = document.getElementById('contactNumber').value

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
            dateOfBirth,
            sex,
            blk_street,
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

})

function goNext() {
    window.location.href = '../pages/user-kkprofile1.html'
}