// Select modal and buttons
const modal = document.getElementById("myModal");
const registerButtons = document.querySelectorAll("#registerButton");
const closeModalBtn = document.querySelector(".closeModalBtn");

// Show modal on register button click
registerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Hide modal on cancel button click
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Hide modal on clicking outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
