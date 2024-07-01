import { Project } from "./project.js";


function createProjectForm(){

    const button = document.querySelector(".add-project");
    const sideBarHeader = document.querySelector(".sidebar-header")
    button.remove();

    const content = document.querySelector(".project-form");
    const form = document.createElement("form");

    const titleContainer = document.createElement("div");
    const title = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title);
    titleLabel.textContent="Title";
    title.setAttribute("id","project-title");
    title.setAttribute("name","projectTitle");
    titleLabel.setAttribute("for","project-title");


    const submitButton = document.createElement("button");
    submitButton.textContent="Submit";

    form.appendChild(titleContainer);
    form.appendChild(submitButton);
    form.classList.add("project-title");
    content.appendChild(form);
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault();
        if(title.value===""){
        
            alert("Please Fill in Title Page");
        }
        else{
            const newButton = document.createElement("button");
            newButton.textContent="Add Project";
            newButton.classList.add("add-project");
            sideBarHeader.append(button);
            hideForm();

        }
        
    });
    
}

function createProject(title){
    const project = new Project(title.value);
}


function hideForm(){
    const form = document.querySelector(".project-title");
    form.remove();
}
export{createProjectForm};

