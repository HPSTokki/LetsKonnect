// Register for Acc Endpoint

document.getElementById("regForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('regEmail').value;
    const age = document.getElementById('regAge').value;
    const password = document.getElementById('regPass').value;

    fetch(`http://localhost:6001/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, age, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.userAcc_ID) {
            sessionStorage.setItem('userAcc_ID', data.userAcc_ID); // Store userAcc_ID
            alert(data.message); // Show success message
            window.location.href = "/pages/user-kkprofile.html"; // Redirect to the profile page
        } else {
            alert(data.message); // Handle errors (e.g., missing fields or server issues)
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Login Account Endpoint
let userAcc_ID;

document.getElementById('logInForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('logInEmail').value;
    const password = document.getElementById('LogInpass').value;

    fetch('http://localhost:6001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.userAcc_ID) {
            sessionStorage.setItem('userAcc_ID', data.userAcc_ID); // Store userAcc_ID
            alert(data.message); // Show success message
            window.location.href = "/pages/uac-profileinfo.html"; // Redirect to home page
        } else {
            alert(data.message); // Handle invalid credentials or server issues
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

