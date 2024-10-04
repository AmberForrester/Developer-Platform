let loginBtn = document.getElementById('login-btn')
let logoutBtn = document.getElementById('logout-btn')

let token = localStorage.getItem('token')

if (token) {

    loginBtn.remove()
}

else {

    logoutBtn.remove()
}

logoutBtn.addEventListener('click', (e) => {

    e.preventDefault()
    localStorage.removeItem('token')
    window.location = 'file:///C:/code/Developer-Platform/frontend/login.html'
})




let projectsUrl = 'http://127.0.0.1:8000/api/projects/' // Set the endpoint to getting the projects

let getProjects = () => {   // Make a request

    fetch(projectsUrl)
        .then(response => response.json())   // Convert the request into JSON data.
        .then(data => {

            console.log(data)
            buildProjects(data)   // Trigger this function
        })
}



let buildProjects = (projects) => {

    let projectsWrapper = document.getElementById('projects--wrapper')
    //console.log('projectsWrapper:', projectsWrapper)

    projectsWrapper.innerHTML = ''

    for (let i =0; projects.length > i; i++){

        let project = projects[i]
        //console.log(project)

        let projectCard = `
                <div class='project--card'>
                    <img src="http://127.0.0.1:8000${project.featured_image}"/>

                    <div>
                        <div class='card--header'>
                            <h3>${project.title}</h3>
                            <strong class='vote--option' data-vote='up' data-project='${project.id}' >&#43;</strong>
                            <strong class='vote--option' data-vote='down' data-project='${project.id}' >&#8722;</strong>
                        </div>

                        <i>${project.vote_ratio}% Positive Feedback </i>
                        <p>${project.description.substring(0,150)}</p>

                    </div>

                </div>    
        `
        projectsWrapper.innerHTML += projectCard
    }

    addVoteEvents()   // Trigger the function to add the event listeners

}



// Add an eventListener for the vote and trigger a POST request.
let addVoteEvents = () => {
    let voteBtns = document.getElementsByClassName('vote--option')
    //console.log('VOTE BUTTONS:', voteBtns)

    for (let i=0; voteBtns.length > i; i++){

        voteBtns[i].addEventListener('click', (e) => {
            let token = localStorage.getItem('token')
            //console.log('Vote was clicked:', i)
            
            let vote = e.target.dataset.vote
            let project = e.target.dataset.project
            //console.log('PROJECT:', project, 'VOTE:', vote)

            fetch(`http://127.0.0.1:8000/api/projects/${project}/vote/`, {

                method: 'POST', 
                headers: {

                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },

                body: JSON.stringify({'value': vote})
            })

            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
                getProjects()   // Trigger the function to retrieve the data.
            })
        })
    }
}



getProjects()   // Trigger the function to retrieve the data.