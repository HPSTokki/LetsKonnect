// Select modal and buttons
const modal = document.getElementById("myModal");
const registerButtons = document.querySelectorAll("#registerButton");
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