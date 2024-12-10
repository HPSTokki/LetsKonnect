document.addEventListener('DOMContentLoaded', () => {
    const userAcc_ID = sessionStorage.getItem('userAcc_ID'); // Replace with dynamic user ID as needed

    fetch(`http://localhost:6001/api/user-details/${userAcc_ID}`)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch user details');
            return response.json();
        })
        .then(user => {
            document.getElementById('name').value = `${user.givenName} ${user.middleName} ${user.lastName} ${user.suffix}`;
            document.getElementById('email').value = user.emailAddress;
            document.getElementById('gender').value = user.sex.toLowerCase();
            const birthDate = new Date(user.dateOfBirth);
            document.getElementById('birth-month').value = String(birthDate.getMonth() + 1).padStart(2, '0');
            document.getElementById('birth-day').value = String(birthDate.getDate()).padStart(2, '0');
            document.getElementById('birth-year').value = birthDate.getFullYear();
            document.getElementById('address').value = `${user.blk_street}, ${user.sitio}`;
            document.getElementById('phone').value = user.contacts;
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
            alert('Failed to load user details.');
        });
});
