const modalBackdrop = document.getElementById('modalBackdrop');
const submitBtn = document.getElementById('submitBtn');
const okayBtn = document.getElementById('okayBtn');

submitBtn.onclick = function () {
    modalBackdrop.style.display = 'flex'; 
};

okayBtn.onclick = function () {
    modalBackdrop.style.display = 'none'; 
};
