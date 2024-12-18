document.addEventListener("DOMContentLoaded", () => {
    const tabs = {
      "admin-homepage.html": "home",
      "admin-event.html": "events",
      "admin-news&updates.html": "news",
      "admin-scholarships.html": "scholarships",
      "admin-jobfairs.html": "jobfairs",
      "dashboardAdm.html": "dashboard",
    };
  
    const currentPage = window.location.pathname.split("admin-jobfairs.html").pop();
    const activeTabId = tabs[currentPage];
  
    if (activeTabId) {
      document.getElementById(activeTabId).classList.add("active");
    }
  });

function openModal() {
    const modalBackdrop = document.getElementById('modalbackdrop');
    modalBackdrop.classList.add('visible');
}

function closeModal() {
    const modalBackdrop = document.getElementById('modalbackdrop')
    modalBackdrop.classList.remove('visible');
}

document.querySelectorAll('.fa-ellipsis-v').forEach((icon) => {
    icon.addEventListener('click', (e) => {
        // Close other open menus first
        document.querySelectorAll('.ellipsis-setting.visible').forEach((menu) => {
            menu.classList.remove('visible');
        });

        // Toggle visibility for the current one
        const ellipsisMenu = e.target.closest('.job-op').querySelector('.ellipsis-setting');
        ellipsisMenu.classList.toggle('visible');

        // Close menu if user clicks outside
        document.addEventListener('click', (event) => {
            if (!ellipsisMenu.contains(event.target) && !icon.contains(event.target)) {
                ellipsisMenu.classList.remove('visible');
            }
        }, { once: true });
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.fa-ellipsis-v')) {
        document.querySelectorAll('.ellipsis-setting.visible').forEach((menu) => {
            menu.classList.remove('visible');
        });
    }
}
