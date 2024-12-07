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
      const totalreg = document.getElementById("group-total-reg");
      totalreg.textContent = data.total
        
      const monthlyCounts = data.monthly
        .map((registrant) => `${registrant.count}`)
        .join(", ");
      document.getElementById("curr-reg").textContent = monthlyCounts;
      document.getElementById("curr-month").textContent =
        "Registrants as of: " + getMonth();
    })
    .catch(error => {
      console.error("Error Fetching Data: ", error);
      document.getElementById("group-total-reg").textContent =
        "Error loading data";
      document.getElementById("current-reg").textContent = "Error loading data";
      document.getElementById("curr-month").textContent = "Error loading data";
    });
});

function getMonth() {
  const date = new Date();
  const option = { month: "long" };
  return date.toLocaleString("default", option);
}
