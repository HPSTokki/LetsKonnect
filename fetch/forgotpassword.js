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
        }
    })
    .catch(error =>{
        console.error("error", error)
    })
})