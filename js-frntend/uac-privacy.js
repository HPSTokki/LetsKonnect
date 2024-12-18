document.addEventListener("DOMContentLoaded", () => {
    const tabs = {
      "admin-homepage.html": "home",
      "admin-event.html": "events",
      "admin-news&updates.html": "news",
      "admin-scholarships.html": "scholarships",
      "admin-jobfairs.html": "jobfairs",
      "dashboardAdm.html": "dashboard",
    };
  
    const currentPage = window.location.pathname.split("uac-privacy.html").pop();
    const activeTabId = tabs[currentPage];
  
    if (activeTabId) {
      document.getElementById(activeTabId).classList.add("active");
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButtons = document.querySelectorAll('.learn-more');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const flexContainer = document.querySelector('.flex-container');
            const privacyBox = button.closest('.privacy-box');
            const newContent = privacyBox.querySelector('.new-content');

            flexContainer.innerHTML = '';

            const newPrivacyBox = document.createElement('div');
            newPrivacyBox.classList.add('privacy-box');
            newPrivacyBox.appendChild(newContent);
            newContent.style.display = 'block'; 
            flexContainer.appendChild(newPrivacyBox);
        });
    });
});

function toggleProfileBox() {
    const profileBox = document.getElementById('profileBox');
    if (profileBox.style.display === 'none' || profileBox.style.display === '') {
        profileBox.style.display = 'block';
    } else {
        profileBox.style.display = 'none';
    }
}

function showSignOutModal() {
    document.getElementById('signOutModal').style.display = 'block';
}

function closeSignOutModal() {
    document.getElementById('signOutModal').style.display = 'none';
}
