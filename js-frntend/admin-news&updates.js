// Function to open a specific tab and hide the others
function openTab(evt, tabName) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => (content.style.display = "none")); // Hide all tab contents

  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active")); // Remove active class from all buttons

  // Find the content of the tab that needs to be displayed
  const tabContent = document.getElementById(tabName);
  if (tabContent) {
    tabContent.style.display = "block"; // Display the selected tab content if it exists
  } else {
    console.error(`No content found for tab: ${tabName}`);
  }

  evt.currentTarget.classList.add("active"); // Add active class to the clicked button
}

document.addEventListener("DOMContentLoaded", function () {
  const loadMoreButtons = document.querySelectorAll(".nu-button"); // Select all "Load More" buttons

  loadMoreButtons.forEach((button, index) => {
    const moreContent = document.getElementById(`moreContent${index + 1}`); // Select corresponding "more content" for each card

    if (moreContent) {
      // Check if the element exists
      button.addEventListener("click", function () {
        if (moreContent.style.display === "none") {
          moreContent.style.display = "block";
          button.textContent = "See Less";
        } else {
          moreContent.style.display = "none";
          button.textContent = "See More...";
        }
      });
    } else {
      console.error(`Element #moreContent${index + 1} not found`);
    }
  });
});

function openModal() {
  const modalBackdrop = document.getElementById("modalbackdrop");
  modalBackdrop.classList.add("visible");
}

function closeModal() {
  const modalBackdrop = document.getElementById("modalbackdrop");
  modalBackdrop.classList.remove("visible");
}

document.querySelectorAll(".fa-ellipsis-v").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    // Close other open menus first
    document.querySelectorAll(".ellipsis-setting.visible").forEach((menu) => {
      menu.classList.remove("visible");
    });

    // Toggle visibility for the current one
    const ellipsisMenu = e.target
      .closest(".job-op")
      .querySelector(".ellipsis-setting");
    ellipsisMenu.classList.toggle("visible");

    // Close menu if user clicks outside
    document.addEventListener(
      "click",
      (event) => {
        if (
          !ellipsisMenu.contains(event.target) &&
          !icon.contains(event.target)
        ) {
          ellipsisMenu.classList.remove("visible");
        }
      },
      { once: true }
    );
  });
});

window.onclick = function (event) {
  if (!event.target.matches(".fa-ellipsis-v")) {
    document.querySelectorAll(".ellipsis-setting.visible").forEach((menu) => {
      menu.classList.remove("visible");
    });
  }
};
