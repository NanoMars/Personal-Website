
const projects = [
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  { 
    "title": "Building a competition robot",
    "image": "images/FTC.jpg",
  },
  
  
]

document.addEventListener("DOMContentLoaded", loadProjects)

function loadProjects() {
    const projectsGallery = document.getElementById("projects-gallery")

    for (const project of projects) {
        const projectDiv = document.createElement("div")
        projectDiv.classList.add("project")
        projectsGallery.appendChild(projectDiv)

        let projectImage = ""
        let projectTitle = ""

        for (const key in project) {
            if (key === "image") {
                projectImage = project[key]
            } else if (key === "title" ) {
                projectTitle = project[key]
            } 
        }
        
        projectDiv.innerHTML += `<div class="project-image" style="background: url(${projectImage}); background-size: cover">` 

        const projectTitleDiv = document.createElement("div")
        projectTitleDiv.classList.add("project-title")
        projectDiv.appendChild(projectTitleDiv)
        projectTitleDiv.innerHTML += `<h2>${projectTitle}</h2>`
    }
}