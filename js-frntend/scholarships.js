function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const scholarshipsButton = document.querySelector(".tab-button[onclick=\"openTab(event, 'Scholarships')\"]");
    openTab({ currentTarget: scholarshipsButton }, 'Scholarships');
    scholarshipsButton.classList.add("active");

    
});


