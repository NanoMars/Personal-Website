import {projects} from "./Projects.js"

document.addEventListener("DOMContentLoaded", loadProjects)

function loadProjects() {
    const projectsGallery = document.getElementById("projects-gallery")

    for (const project of projects) {

        let projectImage = ""
        let projectTitle = ""
        let projectLink = ""

        for (const key in project) {
            if (key === "image") {
                projectImage = project[key]
            } else if (key === "title" ) {
                projectTitle = project[key]
            } else if (key === "link") {
                projectLink = project[key]
            }
        }

        const projectLinkElement = document.createElement("a");
        projectLinkElement.href = projectLink;
        projectLinkElement.classList.add("project")
        projectLinkElement.style.textDecoration = "none";
        projectsGallery.appendChild(projectLinkElement);
        
        const projectDiv = document.createElement("div")
        projectDiv.classList.add("project")
        projectLinkElement.appendChild(projectDiv)
        
        projectDiv.innerHTML += `<div class="project-image" style="background: url(${projectImage}); background-size: cover">` 

        const projectTitleDiv = document.createElement("div")
        projectTitleDiv.classList.add("project-title")
        projectDiv.appendChild(projectTitleDiv)
        projectTitleDiv.innerHTML += `<h2>${projectTitle}</h2>`
    }
}