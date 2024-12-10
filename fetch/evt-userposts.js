let postID = sessionStorage.getItem('postID')

function loadEvents() {
    fetch('http://localhost:6001/get-events')  // Make a request to fetch event data from the server
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById('events-container');
            eventsContainer.innerHTML = '';  // Clear the existing content

            // Loop through each event and create an event card
            events.forEach(event => {
                const eventCard = `
                    <div class="Event">
                        <div class="Event-content">
                            <div class="Event-details">
                                <img src="../uploads/${event.imgName}" alt="${event.description.slice(0, 20)}" class="event1"> 
                            </div>
                            <div class="Event-description">
                                <div class="menu">
                                    <button class="menu-button" onclick="toggleMenu()">&#x22EE;</button>
                                    <div class="options" id="optionsMenu">
                                        <a href="#" onclick="alert('Option 1 selected')">Archive</a>
                                        <a href="#" onclick="alert('Option 2 selected')">Edit</a>
                                    </div>
                                </div>

                                <br>
                                <span>
                                <p class="description-title-eo">${event.sponsor}</p>
                                </span>
                                <br>
                                <p class="description-title-dnt">${event.date} | ${event.time}</p>
                                <br>
                                <hr>
                                <br>
                                <p class="description-title">Category</p>
                                <h1>${event.title}</h1>
                                <p class="description-title">Headline</p>
                                <hr>
                                <br>
                                <p class="description-title">Brief Description</p>
                                <br>
                                <p class="main-description">
                                    ${event.description.slice(0, 150)}...
                                </p>
                                <div class="description-buttons">
                                    <button class="registerButton">Send Feedback Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                eventsContainer.innerHTML += eventCard;
                sessionStorage.setItem('postID', event.eventPost_ID)
                
                console.log(postID)
            });

            // After rendering the events, attach the event listeners to register buttons
            const registerButtons = document.querySelectorAll(".registerButton");
            registerButtons.forEach((button) => {
                button.addEventListener("click", showModal);
            });
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
}


loadEvents()

document.getElementById('registrantForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const contact = document.getElementById('contact').value
    const address = document.getElementById('address').value


    fetch('http://localhost:6001/event/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postID, name, email, contact, address
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert('Succesfully Registered!')
        }
    })
    .catch(error =>{
        alert('Error at: ', error)
    })

})