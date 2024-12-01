
// KK Second Fetch

document.getElementById('some-form3').addEventListener('submit', function(e){
    e.preventDefault();

    // KK Info 1

    let userAcc_ID = sessionStorage.getItem('userAcc_ID')
    const licensedProd = document.getElementById('licensedProd').value
    const company = document.getElementById('company').value
    const position = document.getElementById('position').value

    fetch('http://localhost:6001/reg-3', {
        'method': 'POST',
        'headers': {
            'Content-Type' : 'application/json'
        },
        'body': JSON.stringify({
            userAcc_ID,
            licensedProd,
            company,
            position

        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.message) {
            alert(data.message);
        }
        goNext()
    })
    .catch(error => {
        console.log('Error: ', error)
    })

})

function goBack() {
    window.location.href = '../pages/user-kkprofile1.html'
}

function goNext() {
    window.location.href = '../pages/user-kkprofile3.html'
}