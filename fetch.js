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
            alert(data.message); // Show success or error message
            if (data.userAcc_ID) {
                console.log('User  ID:', data.userAcc_ID); // Handle user ID as needed
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
})