import { Project } from "./project.js";
import { addTask,createTaskCard } from "./interface.js";
import { Task } from "./task.js";
import { add } from "date-fns";
import  {current } from "./index.js";



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
            createProject(title.value);
            hideForm();

        }
        
    });
    
}

function createProject(title){
    const project = new Project(title);
    const projectContainer = document.querySelector(".projects");
    const newProject = document.createElement("p");
    newProject.textContent=title;
    projectContainer.appendChild(newProject);
    newProject.addEventListener("click",()=>{
        current.setProject(project);
        newProjectTest(current.getProject());
       
      
        
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
    console.log(array);
    for (let i =0;i<array.length;i++){
        console.log("test");
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




