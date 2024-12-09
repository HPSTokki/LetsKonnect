document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    "admin-homepage.html": "home",
    "admin-event.html": "events",
    "admin-news&updates.html": "news",
    "admin-scholarships.html": "scholarships",
    "admin-jobfairs.html": "jobfairs",
    "dashboardAdm.html": "dashboard",
  };

  const currentPage = window.location.pathname.split("admin-event.html").pop();
  const activeTabId = tabs[currentPage];

  if (activeTabId) {
    document.getElementById(activeTabId).classList.add("active");
  }
});

function openModal() {
  const modalBackdrop = document.getElementById("modalbackdrop");
  modalBackdrop.classList.add("visible");
}

function closeModal() {
  const modalBackdrop = document.getElementById("modalbackdrop");
  modalBackdrop.classList.remove("visible");
}

function showCreatePostConfirmModal() {
  const postConfirmModalBackdrop = document.getElementById(
    "postconfirm-modalbackdrop"
  );
  postConfirmModalBackdrop.classList.add("visible");
}

function closeCreatePostConfirmModal() {
  const postConfirmModalBackdrop = document.getElementById(
    "postconfirm-modalbackdrop"
  );
  postConfirmModalBackdrop.classList.remove("visible");
}

document
  .getElementById("imageUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById("imagePreview");

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
      };

      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = "<p>No image uploaded</p>";
    }
  });

function toggleMenu() {
  const menu = document.getElementById("optionsMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close the menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".menu-button")) {
    const menu = document.getElementById("optionsMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    }
  }
};

const dateDisplay = document.getElementById("dateDisplay");
const dateTimePicker = document.getElementById("dateTimePicker");
const saveDate = document.getElementById("saveDate");
const dateInputDate = document.getElementById("dateInputDate");
const timeInput = document.getElementById("timeInput");

// When the user clicks on the MM/DD/YYYY (dateDisplay), show the date picker
dateDisplay.addEventListener("click", () => {
  dateTimePicker.style.display =
    dateTimePicker.style.display === "block" ? "none" : "block";
});

// When the user clicks "Save" in the date picker
saveDate.addEventListener("click", () => {
  const date = dateInputDate.value;
  const time = timeInput.value;

  if (date && time) {
    // Format the date as MM/DD/YY
    const formattedDate = new Date(date);
    const formattedDateString = `${(formattedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${formattedDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${formattedDate.getFullYear().toString().slice(-2)}`;

    // Format the time as HH:MM
    const formattedTime = time ? time : "--:--";

    // Update the display to show the selected date and time
    dateDisplay.textContent = `${formattedDateString} ${formattedTime}`;
  }

  // Hide the date-time picker after saving
  dateTimePicker.style.display = "none";
});
