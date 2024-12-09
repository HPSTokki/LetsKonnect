document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    "admin-homepage.html": "home",
    "admin-event.html": "events",
    "admin-news&updates.html": "news",
    "admin-scholarships.html": "scholarships",
    "admin-jobfairs.html": "jobfairs",
    "dashboardAdm.html": "dashboard",
  };

  const currentPage = window.location.pathname.split("guest-dashboard.html").pop();
  const activeTabId = tabs[currentPage];

  if (activeTabId) {
    document.getElementById(activeTabId).classList.add("active");
  }
});

document.querySelector('.logbutton').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('show');
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('show');
  });
  
  document.querySelector('.signbutton').addEventListener('click', () => {
    document.getElementById('signupPopup').classList.add('show');
  });
  
  document.getElementById('signupCloseBtn').addEventListener('click', () => {
    document.getElementById('signupPopup').classList.remove('show');
  });
  
  