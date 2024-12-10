document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default form submission

    // Get the form data
    const category = document.getElementById('category-options').value;
    const question1 = document.querySelector('input[name="question1"]:checked')?.value;
    const question2 = document.querySelector('input[name="question2"]:checked')?.value;

    // Check if all required fields are filled
    if (!question1 || !question2) {
        alert("Please answer all questions.");
        return;
    }

    // Prepare the data for sending
    const feedbackData = {
        category,
        question1,
        question2
    };

    // Send data to backend using fetch
    fetch('http://localhost:6001/submit-feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show success modal
            document.getElementById('modalBackdrop').style.display = 'block';
        } else {
            alert('There was an error submitting your feedback.');
        }
    })
    .catch(error => {
        console.log('Error submitting feedback:', error);
    });
});


