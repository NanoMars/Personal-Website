function getQueryString() {
    const queryString = window.location.search;
    return queryString.substring(1);
}



import {projects} from "./Projects.js"

document.addEventListener("DOMContentLoaded", loadProjects)

function loadProjects() {
    for (const project of projects) {
        if (key === "ID") {
            projectID = getQueryString()

            let projectImage = ""
            let projectTitle = ""
        
            for (const key in project) {
                if (key === "image") {
                    projectImage = project[key]
                } else if (key === "inpage-title" ) {
                    projectTitle = project[key]
                }
            }

            document.getElementById("text-header").innerHTML = projectTitle;
        }
    }
}