document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    "admin-homepage.html": "home",
    "admin-event.html": "events",
    "admin-news&updates.html": "news",
    "admin-scholarships.html": "scholarships",
    "admin-jobfairs.html": "jobfairs",
    "dashboardAdm.html": "dashboard",
  };

  const currentPage = window.location.pathname.split("admin-scholarships.html").pop();
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

document.addEventListener("DOMContentLoaded", function () {
  const createPostButton = document.getElementById("createPostButton");
  const cancelBtn = document.querySelector("cancelBtn");
  const postBtn = document.querySelector("submitBtn");
  const editContent = document.getElementById("editContent");

  createPostButton.addEventListener("click", openModal);
  editContent.addEventListener("click", openModal);

  cancelBtn.addEventListener("click", closeModal);

  postBtn.addEventListener("click", () => {
    alert("Scholarship details posted!");
    closeModal();
  });
});

const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", (event) => {
  const uploadedFile = event.target.files[0];
  if (uploadedFile) {
    alert(`Image "${uploadedFile.name}" selected successfully.`);
  }
});

document
  .getElementById("fileUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById("imagePreview");

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewContainer.innerHTML = "";
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Image Preview";
        img.style.width = "446px";
        img.style.height = "230px";
        img.style.objectFit = "cover";
        previewContainer.appendChild(img);
      };

      reader.readAsDataURL(file);
    } else {
      previewContainer.innerHTML = "No image selected.";
    }
  });

document
  .querySelector(".modal-post-btn")
  .addEventListener("click", function () {
    const previewContainer = document.getElementById("imagePreview");
    const fileInput = document.getElementById("fileUpload");

    previewContainer.innerHTML = "";

    fileInput.value = "";
  });

document
  .querySelector(".modal-cancel-btn")
  .addEventListener("click", function () {
    const previewContainer = document.getElementById("imagePreview");
    const fileInput = document.getElementById("fileUpload");

    previewContainer.innerHTML = "";

    fileInput.value = "";
  });

// Toggles the visibility of the menu
function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.classList.toggle("hidden");
}

// Archive Content Functionality (Example)
function archiveContent() {
  alert("Content has been archived!");
}

function editContent() {
  // Show the modal when "Edit" is clicked
  const modal = document.getElementById("updateModal");
  modal.classList.remove("hidden");
}

function updateContent() {
  // Hide the updateModal (if you want to close it before showing the continueModal)
  const updateModal = document.getElementById("updateModal");
  updateModal.classList.add("hidden");

  // Show the continueModal
  const continueModal = document.getElementById("continueModal");
  continueModal.classList.remove("hidden");
}

function confirmUpdate() {
  // Hide the updateModal (if you want to close it before showing the continueModal)
  const continueModal = document.getElementById("continueModal");
  continueModal.classList.add("hidden");

  // Show the continueModal
  const doneModal = document.getElementById("doneModal");
  doneModal.classList.remove("hidden");
}

function confirmpostUpdate() {
  // Hide the updateModal (if you want to close it before showing the continueModal)
  const postModal = document.getElementById("postModal");
  postModal.classList.add("hidden");

  // Show the continueModal
  const donepostModal = document.getElementById("donepostModal");
  donepostModal.classList.remove("hidden");
}

function godoneModal() {
  // Hide the updateModal (if you want to close it before showing the continueModal)
  const scholarshipModal = document.getElementById("scholarshipModal");
  scholarshipModal.classList.add("hidden");

  // Show the continueModal
  const postModal = document.getElementById("postModal");
  postModal.classList.remove("hidden");
}

// Function to back to the updatemodal
function backModal() {
  const updateModal = document.getElementById("updateModal");

  updateModal.classList.remove("hidden");
  continueModal.classList.add("hidden");
}

function backpostModal() {
  const scholarshipModal = document.getElementById("scholarshipModal");
  scholarshipModal.classList.remove("hidden");
  postModal.classList.add("hidden");
}

// Function to hide the modal
function hideModal() {
  // Get both modals
  const updateModal = document.getElementById("updateModal");
  const scholarshipModal = document.getElementById("scholarshipModal");
  const continueModal = document.getElementById("continueModal");
  const doneModal = document.getElementById("doneModal");
  const donepostModal = document.getElementById("donepostModal");

  // Add the "hidden" class to both modals to hide them
  updateModal.classList.add("hidden");
  scholarshipModal.classList.add("hidden");
  continueModal.classList.add("hidden");
  doneModal.classList.add("hidden");
  donepostModal.classList.add("hidden");
}

document.querySelectorAll('.fa-ellipsis-v').forEach((icon) => {
  icon.addEventListener('click', (e) => {
      // Close other open menus first
      document.querySelectorAll('.ellipsis-setting.visible').forEach((menu) => {
          menu.classList.remove('visible');
      });

      // Toggle visibility for the current one
      const ellipsisMenu = e.target.closest('.ellipsis-setting');
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
