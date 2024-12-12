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

  // Select modal and buttons
  const modal = document.getElementById("myModal");
  const registerButtons = document.querySelectorAll("#applyNow");
  const closeModalBtn = document.querySelector(".closeModalBtn");

  // Function to show modal with animation
  function showModal() {
      modal.style.display = "block"; // Ensure it's visible
      setTimeout(() => {
          modal.classList.add("show");
      }, 10); // Small timeout to allow display to take effect before adding class
  }

  // Function to hide modal with animation
  function hideModal() {
      modal.classList.remove("show");
      setTimeout(() => {
          modal.style.display = "none"; // Wait for animation to finish before hiding
      }, 500); // Match the CSS transition duration (0.5s)
  }

  // Show modal on register button click
  registerButtons.forEach((button) => {
      button.addEventListener("click", showModal);
  });

  // Hide modal on cancel button click
  if (closeModalBtn) {
      closeModalBtn.addEventListener("click", hideModal);
  }

  // Hide modal on clicking outside
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          hideModal();
      }
  });
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