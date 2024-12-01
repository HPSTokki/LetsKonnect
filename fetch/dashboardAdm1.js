function fetchSurveys() {
    fetch('http://localhost:6001/api/surveys')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#respondentTables tbody');
            tableBody.innerHTML = ''; // Clear existing rows
            data.forEach(survey => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${survey.surveyID}</td>
                    <td>${survey.category}</td>
                    <td>${survey.total_question1_responses}</td>
                    <td>${survey.total_question2_responses}</td>
                    <td><button class="delete-button" onclick="deleteSurvey(${survey.surveyID})">Delete</button></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to delete a survey (if needed)
function deleteSurvey(surveyId) {
    fetch(`http://localhost:6001/api/surveys/${surveyId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
        fetchSurveys(); // Refresh the table after deletion
    })
    .catch(error => console.error('Error deleting survey:', error));
}

// Initial fetch of surveys when the page loads
fetchSurveys();