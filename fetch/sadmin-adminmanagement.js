document.getElementById('createAdmin').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:6001/admin-reg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.message === 'The SK Admin is Registered') {
            document.getElementById('myModal').style.display = 'none';
            // Refresh admin list
            fetch('http://localhost:6001/admins')
                .then(response => response.json())
                .then(admins => {
                    const tableBody = document.querySelector('#tableContainer table tbody');
                    tableBody.innerHTML = ''; // Clear existing rows
                    admins.forEach(admin => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${admin.id}</td>
                            <td>${admin.name}</td>
                            <td>${admin.emailAddress}</td>
                            <td>
                                <i class="fas fa-edit" onclick="editAdmin(${admin.id})"></i>
                                <i class="fas fa-trash" onclick="deleteAdmin(${admin.id})"></i>
                            </td>
                        `;
                        tableBody.appendChild(row);
                    });
                });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#tableContainer table tbody');

    // Fetch admin data
    fetch('http://localhost:6001/admins')
        .then(response => response.json())
        .then(admins => {
            // Clear existing rows
            tableBody.innerHTML = '';

            // Populate table with admin data
            admins.forEach(admin => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${admin.kk_adminID}</td>
                    <td>${admin.name}</td>
                    <td>${admin.emailAddress}</td>
                    <td>
                        <i class="fas fa-edit" onclick="editAdmin(${admin.id})"></i>
                        <i class="fas fa-trash" onclick="deleteAdmin(${admin.id})"></i>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching admin data:', error);
        });
});

