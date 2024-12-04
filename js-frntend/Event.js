// Select all slideshow images and their corresponding hover-text elements
const slideshowImages = document.querySelectorAll('.event-images');
const hoverTexts = document.querySelectorAll('.hover-text');

slideshowImages.forEach((image, index) => {
  const correspondingHoverText = hoverTexts[index]; // Match the hover-text with the image

  // Apply hover effects
  function applyEffects() {
    image.style.filter = 'blur(5px) brightness(50%)';
    correspondingHoverText.style.opacity = '1';
  }

  function removeEffects() {
    image.style.filter = 'none';
    correspondingHoverText.style.opacity = '0';
  }

  // Add hover event listeners
  image.addEventListener('mouseenter', applyEffects);
  image.addEventListener('mouseleave', removeEffects);
});


//File Input//
const photoUpload = document.getElementById('photoUpload');
const noImage = document.getElementById('noImage');
const uploadIcon = document.querySelector('.hover-text img');

if (localStorage.getItem('uploadedImage')) {
    noImage.src = localStorage.getItem('uploadedImage');
}

uploadIcon.addEventListener('click', () => {
    photoUpload.click();
});

photoUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            noImage.src = e.target.result;
            localStorage.setItem('uploadedImage', e.target.result);
        };

        reader.readAsDataURL(file);
    }
});

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


