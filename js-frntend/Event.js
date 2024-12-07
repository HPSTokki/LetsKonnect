// Select all slideshow images and their corresponding hover-text elements
const slideshowImages = document.querySelectorAll('.event-images');
const hoverTexts = document.querySelectorAll('.hover-text');

// Function to open a specific tab and hide the others
function openTab(evt, tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');  // Hide all tab contents

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));  // Remove active class from all buttons

  // Find the content of the tab that needs to be displayed
  const tabContent = document.getElementById(tabName);
  if (tabContent) {
    tabContent.style.display = 'block'; // Display the selected tab content if it exists
  } else {
    console.error(`No content found for tab: ${tabName}`);
  }

  evt.currentTarget.classList.add('active');  // Add active class to the clicked button
}


document.addEventListener("DOMContentLoaded", function () {
  const loadMoreButtons = document.querySelectorAll(".event-button"); // Select all "Load More" buttons

  loadMoreButtons.forEach((button, index) => {
    const moreContent = document.getElementById(`moreContent${index + 1}`); // Select corresponding "more content" for each card

    if (moreContent) { // Check if the element exists
      button.addEventListener("click", function () {
        if (moreContent.style.display === "none") {
          moreContent.style.display = "block";
          button.textContent = "Show Less";
        } else {
          moreContent.style.display = "none";
          button.textContent = "Load More";
        }
      });
    } else {
      console.error(`Element #moreContent${index + 1} not found`);
    }
  });
});


