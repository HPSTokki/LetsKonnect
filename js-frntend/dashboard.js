function openTab(evt, tabName) {
const contents = document.querySelectorAll('.tab-content');
contents.forEach(content => content.style.display = 'none');

const buttons = document.querySelectorAll('.tab-button');
buttons.forEach(button => button.classList.remove('active'));

document.getElementById(tabName).style.display = 'block';
evt.currentTarget.classList.add('active');
}
// Function to handle tab switching
function openTab(event, tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let content of tabContents) {
        content.style.display = "none";
    }

    // Remove "active" class from all tab buttons
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let button of tabButtons) {
        button.classList.remove('active');
    }

    // Show the selected tab content and add "active" class to the clicked button
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add('active');
}

// Adding event listeners to all tab buttons
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let button of tabButtons) {
        button.addEventListener('click', function (event) {
            openTab(event, button.getAttribute('onclick').match(/'([^']+)'/)[1]);
        });
    }

    // Open the default tab
    document.getElementsByClassName('tab-button')[0].click();
});
