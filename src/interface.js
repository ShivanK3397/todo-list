import { Task } from "./task.js";
import "./styles.css";
import { format } from "date-fns";
import { Project } from "./project.js";
import { da, ta } from "date-fns/locale";
import {current}  from "./index.js";


function addTask(title,date,description){
    const taskTitle = title.value;
    let taskDate;
    if(typeof date==="string"){
      
         taskDate=date;
    }
    else{
       
         taskDate = date.value;
    }
    const taskDescription = description.value;
    const project = current.getProject();
    const task = new Task(taskTitle,taskDate,taskDescription);
    const card = createTaskCard(task);
    project.addTasktoArray(task);
    const tasks= document.querySelector(".tasks");
    tasks.appendChild(card);

}

function createForm(){
    const button = document.querySelector(".add-task");
    button.remove();
    const mainHeader = document.querySelector(".main-header")
    const content = document.querySelector(".form");
    const form = document.createElement("form");

    const titleContainer = document.createElement("div");
    const title = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title);
    titleLabel.textContent="Title";
    title.setAttribute("id","title");
    title.setAttribute("name","title");
    titleLabel.setAttribute("for","title");

    const dateContainer = document.createElement("div");
    const dueDate = document.createElement("input");
    const dueDateLabel = document.createElement("label");
    dateContainer.appendChild(dueDateLabel);
    dateContainer.appendChild(dueDate);
    
    dueDateLabel.textContent="Due Date";
    dueDate.setAttribute("id","due-date");
    dueDate.setAttribute("type","date");
    dueDate.setAttribute("name","dueDate")
    dueDateLabel.setAttribute("for","due-date");

    const descriptionContainer = document.createElement("div");
    const description = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(description);
    descriptionLabel.textContent="Description";
    description.setAttribute("id","description");
    description.setAttribute("name","description");
    descriptionLabel.setAttribute("for","description");

    const submitButton = document.createElement("button");
    submitButton.classList.add("submit");
    submitButton.textContent="Submit";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.textContent="Cancel";

    cancelButton.addEventListener("click",()=>{
        mainHeader.append(button);
        hideForm();
    })
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);

    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(dateContainer);
    form.appendChild(buttonContainer);
    form.classList.add("task-form");
    content.appendChild(form);
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault();
        if(title.value===""){
        
            alert("Please Fill in Title Page");
        }
        else{
       
        addTask(title,dueDate,description);
        hideForm();
        const newButton = document.createElement("button");
        newButton.classList.add(".add-task");
        mainHeader.append(button);
        
        }
        
    });
}

function createTaskCard(task){
    const cardContainer = document.createElement("div");
    const card = document.createElement("div");
    cardContainer.addEventListener("click",()=>{
        if(task.getDescriptionShown()===true){
            removeDescription();
            task.setDescriptionShown(false);
        }
        else{
        const description = showDescription(task);
        cardContainer.appendChild(description);
        task.setDescriptionShown(true);
        }
    })
    cardContainer.classList.add("card-container");
    card.classList.add("task");
    const title = document.createElement("p");
    title.textContent=task.getTitle();
    const date = document.createElement("p");
    
    if (task.getDueDate()===""){
      date.textContent="No Due Date"
    }
    else{
    date.textContent=format(new Date(task.getDueDate()), "yyyy-MM-dd");
    }
   
    const deleteButton = document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.classList.add("cancel");
    deleteButton.addEventListener("click",()=>{
        const array = current.getProject().test();
        const index = array.indexOf(task);
        current.getProject().removeTask(index);
        cardContainer.remove();
        
    })

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.addEventListener("click",(event)=>{
        event.stopPropagation();
    })

    const left = document.createElement("div");
    const right = document.createElement("div");
    

    left.appendChild(checkbox);
    left.appendChild(title);
    
    right.appendChild(date);
    right.appendChild(deleteButton);
    card.appendChild(left);
    card.appendChild(right);
    cardContainer.appendChild(card);
    

    return cardContainer;


}

function hideForm(){
    const form = document.querySelector(".task-form");
    form.remove();
}
function showDescription(task){
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent="Description: "+task.getDescription();
    return description;


}

function removeDescription(){
    const description = document.querySelector(".description");
    if(description!==null){
        description.remove();
    }
}




export {createForm,addTask,hideForm,createTaskCard};