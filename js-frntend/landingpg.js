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
    let btn = document.getElementById('regPass')
    if (btn.type === "password") {
        btn.type = "text"
    } else {
        btn.type = "password";
    }
    btn = document.getElementById('LogInpass')
    if (btn.type === "password") {
        btn.type = "text"
    } else {
        btn.type = "password";
    }
}


function toLogin() {
    const logInFrame = document.querySelector("#logInModal")
    const regFrame = document.querySelector("#regModal")

    const regInput = regFrame.querySelectorAll("input")
    regInput.forEach(input => input.value = '');

    logInFrame.classList.remove("inactive")
    regFrame.classList.add("inactive")
}

function toReg() {
    const logInFrame = document.querySelector("#logInModal")
    const regFrame = document.querySelector("#regModal")

    const logInInput = logInFrame.querySelectorAll("input")
    logInInput.forEach(input => input.value = '');

    logInFrame.classList.add("inactive")
    regFrame.classList.remove("inactive")
}