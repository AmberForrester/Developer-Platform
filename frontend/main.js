
let projectsUrl = 'http://127.0.0.1:8000/api/projects/' // Set the endpoint to getting the projects

let getProjects = () => {   // Make a request

    fetch(projectsUrl)
        .then(response => response.json())   // Convert the request into JSON data.
        .then(data => {

            //console.log(data)
            buildProjects(data)
        })
}



let buildProjects = (projects) => {

    let projectsWrapper = document.getElementById('projects--wrapper')
    //console.log('projectsWrapper:', projectsWrapper)

    for (let i =0; projects.length > i; i++){
        let project = projects[i]
        //console.log(project)

        let projectCard = `
                <div class='project--card'>
                    <img src="http://127.0.0.1:8000${project.featured_image}"/>

                    <div>
                        <div class='card--header'>
                            <h3>${project.title}</h3>
                            <strong class='vote--option' >&#43;</strong>
                            <strong class='vote--option' >&#8722;</strong>
                        </div>

                        <i>${project.vote_ratio}% Positive Feedback </i>
                        <p>${project.description.substring(0,150)}</p>

                    </div>

                </div>    
        `
        projectsWrapper.innerHTML += projectCard
    }

}

getProjects()   // Trigger the function to retrieve the data.