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


