fetch('http://localhost:6001/chart-api')
.then(response => response.json())
.then(data => {
    const labels = data.map(item => item.Status);
    const counts = data.map(item => item.Count);

    const ctx = document.getElementById('responseChart').getContext('2d')
    const responseChrt = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Status Counts',
                data: counts,
                background: [
                    '#FF6384', // College Graduate
                    '#36A2EB', // Senior Highschool Graduate
                    '#FFCE56', // Junior Highschool Graduate
                    '#4BC0C0', // Undergraduate
                    '#9966FF', // Solo Parent
                    '#FF9F40', // Person with Disability
                    '#FF6384', // LGBT
                    '#36A2EB', // Indigenous
                    '#FFCE56'  // Employed
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Demographics Info'
                }
            }
        }
    })
    
})
.catch(error=>{
    console.log("Error:", error)
})