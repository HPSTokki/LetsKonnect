

document.getElementById('evt-post').addEventListener('submit', function(e) {
    e.preventDefault()

    const isodate = new Date(document.getElementById('date').value)

    const year = isodate.getFullYear()
    const month = String(isodate.getMonth() + 1).padStart(2, '0')
    const day = String(isodate.getDay()).padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`
    const time = document.getElementById('time').value
    const location = document.getElementById('location').value
    const requirements = document.getElementById('requirements').value
    const employer = document.getElementById('employer').value
    const description = document.getElementById('description').value
    const full_details = document.getElementById('full_details').value
    
    fetch('http://localhost:6001/evt-post', {
        method: 'POST',
        'headers' : {
            'Content-Type' : 'application/json'
        },
        'body' : JSON.stringify({date: formattedDate, time, location, requirements, employer, description, full_details})
    })
    .then(response => response.json() )
    .then(data => {
        if (data.message) {
            alert('Post Submitted')
        }
    })
    .catch(error => {
        console.log("error:", error)
    }) 

})

document.addEventListener('DOMContentLoaded', ()=> {
    fetchPosts()
})

function fetchPosts() {
    fetch('http://localhost:6001/evt-posts')
    .then(response => response.json())
    .then(data => {
        displayPosts(data)
    })
    .catch(error => {
        console.log("Error:", error)
    })
}

function displayPosts(posts) {
    const maincontent = document.querySelector('.main-content')

    posts.forEach(post => {
        const jobOp = document.createElement('div')
        jobOp.classList.add('job-op')

        jobOp.innerHTML = `
        <h1>${post.title || 'Job Fair Title'}</h1>
        <i class="fa-solid fa-ellipsis-v"></i>
        <hr>
        <div class="job-op-content">
            <div class="job-op-details">
                <p><span class="label">Date:</span> ${post.date}</p>
                <hr>
                <p><span class="label">Time:</span> ${post.time}</p>
                <hr>
                <p><span class="label">Location/Venue:</span> ${post.location}</p>
            </div>
            <div class="job-op-description">
                <p class="description-title">Description</p>
                <p class="main-description">${post.description}</p>
                <div class="description-buttons">
                    <button>Send Feedback Form</button>
                </div>
            </div>
        </div>
        <div class="more-content">
            <h4>Full Details</h4>
            <p>Requirements</p>
            <ul>
                <li>${post.requirements}</li>
            </ul>
        </div>
        <div class="ellipsis-setting">
            <button class="archive">Archive</button>
            <button class="edit">Edit</button>
        </div>
    `;

    maincontent.appendChild(jobOp);

    })

}