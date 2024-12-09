document.addEventListener("DOMContentLoaded", () => {
    const tabs = {
      "admin-homepage.html": "home",
      "admin-event.html": "events",
      "admin-news&updates.html": "news",
      "admin-scholarships.html": "scholarships",
      "admin-jobfairs.html": "jobfairs",
      "dashboardAdm.html": "dashboard",
    };
  
    const currentPage = window.location.pathname.split("scholarships.html").pop();
    const activeTabId = tabs[currentPage];
  
    if (activeTabId) {
      document.getElementById(activeTabId).classList.add("active");
    }
  });

function toggleMoreContent() {
    const moreContent = document.querySelector('.more-content');
    const scholarshipHeader = document.querySelector('.scholarship');
    const buttons = document.querySelector('.buttons');
    const button = document.querySelector('.buttons button:first-child');

    if (!moreContent.classList.contains('show')) {
        moreContent.classList.add('show');
        scholarshipHeader.classList.add('expand'); 
        button.textContent = 'See Less...';
        buttons.classList.add('moved'); 
    } else {
        moreContent.classList.remove('show');
        scholarshipHeader.classList.remove('expand'); 
        button.textContent = 'See More...';
        buttons.classList.remove('moved'); 
    }
}


