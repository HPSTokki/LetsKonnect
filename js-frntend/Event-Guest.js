document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    "admin-homepage.html": "home",
    "admin-event.html": "events",
    "admin-news&updates.html": "news",
    "admin-scholarships.html": "scholarships",
    "admin-jobfairs.html": "jobfairs",
    "dashboardAdm.html": "dashboard",
  };

  const currentPage = window.location.pathname.split("Event-Guest.html").pop();
  const activeTabId = tabs[currentPage];

  if (activeTabId) {
    document.getElementById(activeTabId).classList.add("active");
  }
});

// Function to open a specific tab and hide the others
function openTab(evt, tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');  // Hide all tab contents

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));  // Remove active class from all buttons

  // Find the content of the tab that needs to be displayed
  const tabContent = document.getElementById(tabName);
  if (tabContent) {
    tabContent.style.display = 'block'; // Display the selected tab content if it exists
  } else {
    console.error(`No content found for tab: ${tabName}`);
  }

  evt.currentTarget.classList.add('active');  // Add active class to the clicked button
}





