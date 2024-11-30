// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('.kk-link');
//     const forms = document.querySelectorAll('.form-wrap');

//     // Function to show the target form and hide others
//     function showForm(targetFormId) {
//         navLinks.forEach(nav => nav.classList.remove('active'));
//         forms.forEach(form => form.classList.add('hidden'));

//         const targetForm = document.getElementById(targetFormId);
//         targetForm.classList.remove('hidden');

//         // Set the active link
//         const activeLink = Array.from(navLinks).find(link => link.getAttribute('data-target') === targetFormId);
//         if (activeLink) {
//             activeLink.classList.add('active');
//         }
//     }

//     // Initial setup: show the first form
//     showForm('form1');

//     // Event listeners for navigation links
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const targetFormId = this.getAttribute('data-target');
//             showForm(targetFormId);
//         });
//     });

//     // Add event listeners for Next and Back buttons
//     forms.forEach(form => {
//         const nextButton = form.querySelector('.next button');
//         const backButton = form.querySelector('.back button');

//         if (nextButton) {
//             nextButton.addEventListener('click', function(event) {
//                 event.preventDefault(); // Prevent form submission
//                 const currentFormId = form.id;
//                 const nextForm = getNextForm(currentFormId);
//                 if (nextForm) {
//                     showForm(nextForm.id);
//                 }
//             });
//         }

//         if (backButton) {
//             backButton.addEventListener('click', function(event) {
//                 const currentFormId = form.id;
//                 const previousForm = getPreviousForm(currentFormId);
//                 if (previousForm) {
//                     showForm(previousForm.id);
//                 }
//             });
//         }
//     });

//     // Helper functions to get the next and previous forms
//     function getNextForm(currentFormId) {
//         const currentIndex = Array.from(forms).findIndex(form => form.id === currentFormId);
//         return forms[currentIndex + 1] || null; // Return the next form or null if it doesn't exist
//     }

//     function getPreviousForm(currentFormId) {
//         const currentIndex = Array.from(forms).findIndex(form => form.id === currentFormId);
//         return forms[currentIndex - 1] || null; // Return the previous form or null if it doesn't exist
//     }
// });