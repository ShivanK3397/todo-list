import { Project } from "./project.js";
import { addTask,createTaskCard } from "./interface.js";
import { Task } from "./task.js";
import { add } from "date-fns";
import  {current,projects,inbox } from "./index.js";



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
    submitButton.classList.add("submit");
    submitButton.textContent="Submit";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.textContent="Cancel";
    cancelButton.addEventListener("click",()=>{
        sideBarHeader.append(button);
        hideForm();
    })
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);

    

    form.appendChild(titleContainer);
    form.appendChild(buttonContainer);
    form.classList.add("project-title");
    content.appendChild(form);
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault();
        let nameUsed = false;
        for (let i =0;i<projects.length;i++){
            if (projects[i].getName()===title.value){
                nameUsed=true;
            }
        }
        if(title.value===""){
        
            alert("Please Fill in Title Page");
        }
        else if(nameUsed){
            alert("Project names must be unique");
        }
        else{
            const newButton = document.createElement("button");
            newButton.textContent="Add Project";
            newButton.classList.add("add-project");
            sideBarHeader.append(button);
            createProject(new Project(title.value));
            hideForm();

        }
        
    });
    
}

function createProject(project){
    projects.push(project);
    const projectContainer = document.querySelector(".projects");
    
    const div = document.createElement("div");
    div.classList.add("project");
    const newProject = document.createElement("h3");
    newProject.textContent=project.getName();
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("cancel");
    deleteButton.textContent="Delete";
    
    if(project.getName()==="Inbox"){
        div.appendChild(newProject);
    }
    else{
        div.appendChild(newProject);
        div.appendChild(deleteButton);
    }
    projectContainer.appendChild(div);
    current.setProject(project);
    newProjectTest(current.getProject());

    deleteButton.addEventListener("click",()=>{
        
        current.setProject(inbox);
        newProjectTest(current.getProject());
        const index = projects.indexOf(project);
        projects.splice(index,1);
        div.remove();
    })

    newProject.addEventListener("click",()=>{
        
        if(current.getProject().getName()===newProject.textContent){
            
        }
        else{
    
        current.setProject(project);
        newProjectTest(current.getProject());
        }
       
      
        
    })
    
}

function newProjectTest(project){
    const button = document.querySelector(".add-task");
    const main = document.querySelector(".main");
    const mainHeader = document.createElement("div");
    main.remove();
    const section = document.querySelector("section");
    const newMain = document.createElement("div");
    newMain.classList.add("main");
    mainHeader.classList.add("main-header");
    const h2 = document.createElement("h2");
    h2.textContent=project.getName();
    const newButton = document.createElement("button");
    newButton.textContent="Add Task";
    newButton.classList.add("add-task");
    mainHeader.appendChild(h2);
    mainHeader.appendChild(button);
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    const form = document.createElement("div");
    form.classList.add("form");
    const array = project.test();
    for (let i =0;i<array.length;i++){
        const div = createTaskCard(array[i]);
        tasks.appendChild(div);
    }
    newMain.appendChild(mainHeader);
    newMain.appendChild(tasks);
    newMain.appendChild(form);
    section.appendChild(newMain);




}


function hideForm(){
    const form = document.querySelector(".project-title");
    form.remove();
}

export{createProjectForm,createProject};




