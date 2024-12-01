document.getElementById('logInForm').addEventListener('submit', (e)=>{
    e.preventDefault()

    const emailAddress = document.getElementById('logInEmail').value
    const password = document.getElementById('LogInpass').value

    fetch('http://localhost:6001/admin-login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({emailAddress, password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message)
            if (data.kk_adminID) {
                sessionStorage.setItem('kk_adminID', data.kk_adminID)
            }
            open()
        }
    })
    .catch(error =>{
        alert("Error:", error)
        console.log("error:", error)
    })

})

function open() {
    window.location.href = '../pages/dashboardAdm.html'
}