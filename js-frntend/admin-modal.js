const modal = document.getElementById("myModal");

const openModalBtn = document.getElementById("openModalBtn");

const cancelBtn = document.getElementsByClassName("cancel-btn")[0]; // Access the first element

openModalBtn.onclick = function() {
  modal.style.display = "block";
}

cancelBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}