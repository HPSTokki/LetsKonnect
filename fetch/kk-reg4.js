document.getElementById('some-form5').addEventListener('submit', async (e)=>{
    e.preventDefault()

    const userAcc_ID = sessionStorage.getItem('userAcc_ID')
    const complete_name = document.querySelector('input[name="complete-name"]')
    const image = document.querySelector('input[type="file"]')
    const formData = new FormData()

    formData.append('complete_name', complete_name.value)
    formData.append('image', image.files[0])
    formData.append('userAcc_ID', userAcc_ID)

    try {
        const response = await fetch('http://localhost:6001/upload', {
            method: 'POST',
            body: formData
        });
        const result = await response.text();
        alert(result)
        window.location.href = "../pages/news&updates.html"
    } catch (err) {
        console.log("Error uploading data:", err)
    }

})


