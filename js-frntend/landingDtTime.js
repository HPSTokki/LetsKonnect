function dateAndTime() {
    const now = new Date()
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }
    document.getElementById('dateTime').innerText = now.toLocaleString('en-US', options)
}

dateAndTime()

setInterval(dateAndTime, 1000)

function showPass() {
    const btn = document.getElementById('pass') 
    if (btn.type === "password") {
        btn.type = "text";
    } else {
        btn.type = "password";
    }
}