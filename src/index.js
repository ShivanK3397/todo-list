import "./styles.css";
import {createForm} from "./interface.js";
import { createProjectForm,createProject } from "./projectInterface.js";


createProject("Inbox");
const taskButton = document.querySelector(".add-task");
taskButton.addEventListener("click",()=>{
    createForm();
})

const projectButton = document.querySelector(".add-project");
projectButton.addEventListener("click",()=>{
    createProjectForm();
})



