function getQueryString() {
    const queryString = window.location.search;
    console.log(queryString.substring(1));
    return queryString.substring(1);
}



import {projects} from "./Projects.js"

document.addEventListener("DOMContentLoaded", loadProjects)

function loadProjects() {
    let github = ""
    for (const project of projects) {
        for (const key in project) {
            if (key === "ID" && project[key] === getQueryString()) {
                for (const key in project) {
                    if (key === "image") {
                        document.getElementById("image-header").style.background = `url(https://nanomars.github.io/Personal-Website/${project[key]})`;
                        document.getElementById("image-header").style.backgroundSize = "cover";
                        document.getElementById("image-header").style.backgroundPosition = "50% 50%";
                    } else if (key === "inpage-title" ) {
                        document.getElementById("text-header").innerHTML = project[key];
                        document.title = project[key];
                    } else if (key === "github") {
                        github = project[key];
                    }
                }

                let iframeLoaded = false
                const contentIframe = document.getElementById("content-iframe");
                contentIframe.src = `https://nanomars.github.io/Personal-Website/Projects/${project[key]}`;
                contentIframe.addEventListener("load", () => {
                    if (iframeLoaded) {
                        return;
                    }
                    iframeLoaded = true;
                    contentIframe.height = (contentIframe.contentWindow.document.body.scrollHeight + 5) + "px";
                    console.log(contentIframe.contentWindow.location.href);
                });

                addEventListener("resize", () => {
                    contentIframe.height = (contentIframe.contentWindow.document.body.scrollHeight + 5) + "px";
                });
            }
        }
    }
    if (github !== "") {
        document.getElementById("github").href = github;
    } else {
        document.getElementById("github").style.display = "none";
    }
}