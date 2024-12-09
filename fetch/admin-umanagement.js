const searchBox = document.getElementById('searchBox');
const tableContainer = document.getElementById('tableContainer');
const deleteSelected = document.getElementById('deleteSelected');
let selectedUserEmail = null; // Corrected variable name (no spaces)

// Function to fetch users based on search input
function fetchUsers(searchQuery = '') {
    fetch(`http://localhost:6001/end/users?search=${encodeURIComponent(searchQuery)}`)
        .then(response => response.json())
        .then(data => {
            // Clear the existing table body
            const tableBody = tableContainer.querySelector('tbody');
            if (tableBody) {
                tableBody.remove();
            }

            const newTableBody = document.createElement('tbody');

            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash" style="cursor: pointer;" data-email="${user.email}"></i>
                    </td>
                `;
                newTableBody.appendChild(row);
            });

            tableContainer.querySelector('table').appendChild(newTableBody);

            // Highlight matching rows
            highlightSearchResults(searchQuery, newTableBody);

            // Add event listeners for trash icons in the rows
            newTableBody.querySelectorAll('.fa-trash').forEach(icon => {
                icon.addEventListener('click', (event) => {
                    const email = event.target.getAttribute('data-email');
                    deleteUser(email);
                });
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
}

// Function to highlight search results
function highlightSearchResults(searchQuery, tableBody) {
    if (!searchQuery) return; // No search query, no highlighting

    const regex = new RegExp(searchQuery, 'gi'); // Case-insensitive regex

    // Loop through each row and highlight if any cell matches
    tableBody.querySelectorAll('tr').forEach(row => {
        let rowContainsMatch = false; // Flag to check if the row contains a match

        row.querySelectorAll('td').forEach(cell => {
            // Check if the cell text matches the search query
            if (cell.textContent.match(regex)) {
                rowContainsMatch = true; // Set flag to true if a match is found
            }
        });

        // If the row contains a match, add the highlight class
        if (rowContainsMatch) {
            row.classList.add('highlight');
        } else {
            row.classList.remove('highlight'); // Remove highlight if no match
        }
    });
}

// Function to delete a user by email
function deleteUser(email) {
    fetch(`http://localhost:6001/end/users?email=${encodeURIComponent(email)}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            fetchUsers(searchBox.value); // Refresh the user list
        } else {
            console.error('Error deleting user:', response.statusText);
        }
    })
    .catch(error => console.error('Error deleting user:', error));
}

// Event listener for search input
searchBox.addEventListener('input', () => {
    const searchQuery = searchBox.value;
    fetchUsers(searchQuery);
});

// Event listener for the delete icon near the search box
deleteSelected.addEventListener('click', () => {
    if (selectedUserEmail) {
        deleteUser(selectedUserEmail);
        selectedUserEmail = null; // Reset the selected user email after deletion
    } else {
        alert('Please select a user to delete by clicking on their row.');
    }
});

// Initial fetch to load all users
fetchUsers();

// Event listener to select a user row
tableContainer.addEventListener('click', (event) => {
    const row = event.target.closest('tr');
    if (row) {
        const emailCell = row.querySelector('td:nth-child(3)'); // Assuming email is in the third column
        if (emailCell) {
            selectedUserEmail = emailCell.textContent; // Store the selected user's email
            // Optionally, you can highlight the selected row
            tableContainer.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
            row.classList.add('selected');
        }
    }
});
