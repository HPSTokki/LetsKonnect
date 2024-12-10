

fetch("http://localhost:6001/chart-api")
  .then((response) => response.json())
  .then((data) => {
    const labels = data.map((item) => item.Status);
    const counts = data.map((item) => item.Count);

    const ctx = document.getElementById("responseChart").getContext("2d");
    const responseChrt = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Status Counts",
            data: counts,
            background: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Demographics Info",
          },
        },
      },
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  fetch("http://localhost:6001/get-participants")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Response is not ok");
      }
      return response.json();
    })
    .then((data) => {
      const totalReg = document.getElementById("group-total-reg")
      totalReg.textContent = ''
      console.log(totalReg.textContent)
      totalReg.textContent = data.total
      console.log(document.getElementById('group-total-reg').textContent)

      const monthlyCounts = data.monthly
      .map((registrant) => `${registrant.count}`)
      .join(', ')
      console.log(monthlyCounts)
      document.getElementById('curr-reg').textContent = monthlyCounts
      document.getElementById('curr-month').innerHTML = "Registrants as of: " + getMonth()      
    })
    .catch(error => {
      console.error("Error Fetching Data: ", error);
      document.getElementById("group-total-reg").textContent =
        "Error loading data";
      document.getElementById("curr-reg").textContent = "Error loading data";
      document.getElementById("curr-month").textContent = "Error loading data";
    });
});

function getMonth() {
  const date = new Date();
  const option = { month: "long" };
  return date.toLocaleString("default", option);
}

document.addEventListener('DOMContentLoaded', () => {
  // Fetch survey data
  fetch('http://localhost:6001/api/survey-data')
      .then(response => response.json())
      .then(data => {
          // Extract categories and totals
          const categories = data.map(item => item.category);
          const yesTotalsQ1 = data.map(item => item.totalYesQ1);
          const yesTotalsQ2 = data.map(item => item.totalYesQ2);

          // Generate dynamic colors for each category
          const colors = categories.map((_, index) => generateRandomColor());

          // Create Chart.js chart
          const ctx = document.getElementById('anotherResponseChart').getContext('2d');
          new Chart(ctx, {
              type: 'pie',
              data: {
                  labels: categories,
                  datasets: [
                      {
                          label: 'Total Yes (Question 1)',
                          data: yesTotalsQ1,
                          backgroundColor: colors, // Dynamic colors for each category
                          borderColor: colors.map(color => darkenColor(color)), // Darker border colors
                          borderWidth: 1
                      },
                      {
                          label: 'Total Yes (Question 2)',
                          data: yesTotalsQ2,
                          backgroundColor: colors, // Same colors for matching categories
                          borderColor: colors.map(color => darkenColor(color)), // Darker border colors
                          borderWidth: 1
                      }
                  ]
              },
              options: {
                  responsive: true,
                  plugins: {
                      legend: {
                          position: 'top'
                      }
                  },
                  scales: {
                      y: {
                          beginAtZero: true
                      }
                  }
              }
          });
      })
      .catch(error => console.error('Error fetching survey data:', error));

  // Function to generate random colors
  function generateRandomColor() {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgba(${r}, ${g}, ${b}, 0.6)`; // Semi-transparent fill
  }

  // Function to darken a given color
  function darkenColor(color) {
      const rgba = color.match(/\d+/g);
      const r = Math.max(0, rgba[0] - 50);
      const g = Math.max(0, rgba[1] - 50);
      const b = Math.max(0, rgba[2] - 50);
      return `rgba(${r}, ${g}, ${b}, 1)`; // Fully opaque border
  }
});


console.log(document.getElementById('curr-reg'))
console.log(document.getElementById('curr-month'))