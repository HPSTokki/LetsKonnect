
// KK Second Fetch

document.getElementById('some-form4').addEventListener('submit', function(e){
    e.preventDefault();

    // KK Info 1

    let userAcc_ID = sessionStorage.getItem('userAcc_ID')
    const lvl = document.getElementById('lvl').value
    const school = document.getElementById('school').value
    const ydo_recipient = document.getElementById('ydo-recipient').value
    const other_recipient = document.getElementById('other-recipient').value
    const other_detes = document.getElementById('other-detes').value

    fetch('http://localhost:6001/reg-4', {
        'method': 'POST',
        'headers': {
            'Content-Type' : 'application/json'
        },
        'body': JSON.stringify({
            userAcc_ID: userAcc_ID = 15,
            lvl,
            school,
            ydo_recipient,
            other_recipient,
            other_detes
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.message) {
            alert(data.message);

        }
    })
    .catch(error => {
        console.log('Error: ', error)
    })

})

function goBack() {
    window.location.href = '../pages/user-kkprofile2.html'
}

function goNext() {
    window.location.href = '../pages/user-kkprofile3.html'
}