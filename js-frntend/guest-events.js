document.addEventListener("DOMContentLoaded", () => {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("eventSlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    document.querySelector(".prev").addEventListener("click", () => plusSlide(-1));
    document.querySelector(".next").addEventListener("click", () => plusSlide(1));
});

// Modal Script
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const registerButtons = document.querySelectorAll("#registerBtn");
    const closeModalBtn = document.querySelector(".closeModalBtn");

    function showModal() {
        modal.style.display = "flex"; // Ensure it's visible
        setTimeout(() => {
            modal.classList.add("show");
        }, 10); // Small timeout to allow display to take effect before adding class
    }

    function hideModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none"; // Wait for animation to finish before hiding
        }, 500); // Match the CSS transition duration (0.5s)
    }

    registerButtons.forEach((button) => {
        button.addEventListener("click", showModal);
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", hideModal);
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
});

//Profile Box Script
function toggleProfileBox() {
    const profileBox = document.getElementById('profileBox');
    if (profileBox.classList.contains('show')) {
        profileBox.classList.remove('show');
        setTimeout(() => {
            profileBox.style.display = 'none';
        }, 500); 
    } else {
        profileBox.style.display = 'block';
        setTimeout(() => {
            profileBox.classList.add('show');
        }, 10); 
    }
}

//Sign Out Modal Script
function showSignOutModal() {
    const signOutModal = document.getElementById('signOutModal');
    signOutModal.style.display = 'flex'; 
    setTimeout(() => {
        signOutModal.classList.add('show'); 
    }, 10); 
}

function closeSignOutModal() {
    const signOutModal = document.getElementById('signOutModal');
    signOutModal.classList.remove('show'); 
    setTimeout(() => {
        signOutModal.style.display = 'none'; 
    }, 500); 
}

function confirmSignOut() {
    console.log('User confirmed sign-out');
    closeSignOutModal();
}







