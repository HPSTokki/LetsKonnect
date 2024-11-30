
// KK Second Fetch

document.getElementById('some-form2').addEventListener('submit', function(e){
    e.preventDefault();

    // KK Info 1

    const userAcc_ID = sessionStorage.getItem('userAcc_ID')
    const civilStatus = document.getElementById('civilStatus').value
    const youthAge = document.getElementById('youthAge').value
    const educationalBackground = document.getElementById('educationalBackground').value
    const youthClass = document.getElementById('youthClass').value
    const workStatus = document.getElementById('workStatus').value
    const regVoter = document.getElementById('regVoter').value
    const regNatVoter = document.getElementById('regNatVoter').value

    // KK Info 2

    const soloParent = document.getElementById('soloParent').value
    const kid_count = document.getElementById('kid-count').value
    const isLGBT = document.getElementById('isLGBT').value
    const attendedKK = document.getElementById('attendedKK').value
    const attendedTime = document.getElementById('attendedTime').value
    const personWDisability = document.getElementById('personWDisability').value
    const partIndigenous = document.getElementById('partIndigenous').value

    fetch('http://localhost:6001/reg-2', {
        'method': 'POST',
        'headers': {
            'Content-Type' : 'application/json'
        },
        'body': JSON.stringify({
            userAcc_ID,
            civilStatus,
            youthAge,
            educationalBackground,
            youthClass,
            workStatus,
            regVoter,
            regNatVoter,
            soloParent,
            kid_count,
            isLGBT,
            attendedKK,
            attendedTime,
            personWDisability,
            partIndigenous

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
    window.location.href = '../pages/user-kkprofile.html'
}

function goNext() {
    window.location.href = '../pages/user-kkprofile2.html'
}