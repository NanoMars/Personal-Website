import {projects} from "./Projects.js"

document.addEventListener("DOMContentLoaded", loadProjects)

function openProject(e) {
    const projectID = e.target.id;
    console.log(e.target);
    window.location.href = `Project.html?${projectID} `;
}

function loadProjects() {
    const projectsGallery = document.getElementById("projects-gallery")

    for (const project of projects) {
    
        let projectImage = ""
        let projectTitle = ""
        let projectID = ""
    
        for (const key in project) {
            if (key === "image") {
                projectImage = project[key]
            } else if (key === "title" ) {
                projectTitle = project[key]
            } else if (key === "ID") {
                projectID = project[key]
            }
        }
    
        const projectButton = document.createElement("button");
        projectButton.id = projectID;
        projectButton.classList.add("project")
        projectButton.style.textDecoration = "none";
        projectButton.addEventListener('click', openProject)
        projectsGallery.appendChild(projectButton);
        
        const projectDiv = document.createElement("div")
        projectDiv.classList.add("project")
        projectDiv.id = projectID;
        projectButton.appendChild(projectDiv)
        
        projectDiv.innerHTML += `<div class="project-image" style="background: url(${projectImage}); background-size: cover; background-position: 50% 50%;" id="${projectID}">` 
        
        const projectTitleDiv = document.createElement("div")
        projectTitleDiv.classList.add("project-title")
        projectTitleDiv.id = projectID;
        projectDiv.appendChild(projectTitleDiv)
        projectTitleDiv.innerHTML += `<h2 id="${projectID}">${projectTitle}</h2>`
    }
}