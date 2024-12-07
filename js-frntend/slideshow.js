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
    if (n > slides.length) { slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length}
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function changeImage(event) {
    // Get the clicked slide
    var slide = event.currentTarget;
    var img = slide.querySelector("img");

    // Create a file input element
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*"; // Accept only images

    // Listen for the file selection
    fileInput.onchange = function() {
        var file = fileInput.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result; // Change the image source
            }
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    // Trigger the file input
    fileInput.click();
}

