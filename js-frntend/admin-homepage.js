//For hovering the image//

const image = document.querySelector('.no-image');
const hoverText = document.querySelector('.hover-text');


function applyEffects() {
    image.style.filter = 'blur(5px) brightness(50%)';
    hoverText.style.opacity = '1';  
}

function removeEffects() {
    image.style.filter = 'none';  
    hoverText.style.opacity = '0';  
}


image.addEventListener('mouseenter', applyEffects);
hoverText.addEventListener('mouseenter', applyEffects);


image.addEventListener('mouseleave', removeEffects);
hoverText.addEventListener('mouseleave', removeEffects);

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

const headerText = document.getElementById('headerText');
const editIcon = document.getElementById('editIcon');
const resetButton = document.getElementById('resetButton');
const aboutParagraph = document.getElementById('aboutParagraph');
const editParagraphIcon = document.getElementById('editParagraphIcon');

const originalHeaderText = "SANTA LUCIA SK COUNCIL";
const originalParagraphText = `
    Brgy. Sta. Lucia SK Council: Your Youth, Your Voice, Your Future<br>
    The Sangguniang Kabataan (SK) Council of Barangay Sta. Lucia is dedicated to empowering the youth and serving the community. We are committed to addressing the concerns and aspirations of the youth, and to working towards a brighter future for our barangay.<br>
    <br>
    <span>Our Mission:</span><br>
    To uplift the lives of the youth of Brgy. Sta. Lucia through meaningful programs and initiatives.<br>
    <br>
    <span>Our Vision:</span><br>
    A thriving and empowered youth, actively contributing to the development of our community.<br>
`;

if (localStorage.getItem('headerText')) {
    headerText.textContent = localStorage.getItem('headerText');
}

if (localStorage.getItem('aboutParagraph')) {
    aboutParagraph.innerHTML = localStorage.getItem('aboutParagraph');
}

editIcon.addEventListener('click', () => {
    if (headerText.contentEditable === 'false') {
        headerText.contentEditable = 'true';
        headerText.classList.add('editing');
        headerText.focus();
        editIcon.classList.add('editing-icon');
    } else {
        headerText.contentEditable = 'false';
        headerText.classList.remove('editing');
        const newText = headerText.textContent.trim();
        localStorage.setItem('headerText', newText);
    }
});

headerText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        headerText.contentEditable = 'false';
        headerText.classList.remove('editing');
        const newText = headerText.textContent.trim();
        localStorage.setItem('headerText', newText);
    }
});

editParagraphIcon.addEventListener('click', () => {
    if (aboutParagraph.contentEditable === 'false') {
        aboutParagraph.contentEditable = 'true';
        aboutParagraph.classList.add('editing');
        aboutParagraph.focus();
    } else {
        aboutParagraph.contentEditable = 'false';
        aboutParagraph.classList.remove('editing');
        const newText = aboutParagraph.innerHTML.trim();
        localStorage.setItem('aboutParagraph', newText);
    }
});

aboutParagraph.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        aboutParagraph.contentEditable = 'false';
        aboutParagraph.classList.remove('editing');
        const newText = aboutParagraph.innerHTML.trim();
        localStorage.setItem('aboutParagraph', newText);
    }
});

resetButton.addEventListener('click', () => {
    headerText.textContent = originalHeaderText;
    aboutParagraph.innerHTML = originalParagraphText;
    localStorage.removeItem('headerText');
    localStorage.removeItem('aboutParagraph');
    headerText.contentEditable = 'false';
    headerText.classList.remove('editing');
    editIcon.classList.remove('editing-icon');
    aboutParagraph.contentEditable = 'false';
    aboutParagraph.classList.remove('editing');
});






