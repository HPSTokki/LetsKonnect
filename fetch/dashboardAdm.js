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
                    '#FF6384', 
                    '#36A2EB', 
                    '#FFCE56', 
                    '#4BC0C0', 
                    '#9966FF', 
                    '#FF9F40', 
                    '#FF6384', 
                    '#36A2EB', 
                    '#FFCE56'  
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