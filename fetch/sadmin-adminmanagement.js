document.getElementById('createAdmin').addEventListener('submit', (e)=>{
    e.preventDefault()

    const name = document.getElementById('name').value
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    fetch('http://localhost:6001/admin-reg', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name, username, email, password
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.message) {
            alert(`Admin: ${email} is Registered as SK Admin`)
        }
    })
    .catch(error => {
        console.log("Error: ", error)
    })
})

