import { Task } from "./task.js";
import "./styles.css";
import { format } from "date-fns";
import { ta } from "date-fns/locale";


function addTask(title,date,description){
    const taskTitle = title.value;
    const taskDate = date.value;
    const taskDescription = description.value;
    const task = new Task(taskTitle,taskDate,taskDescription);
    const card = createTaskCard(task);

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
    submitButton.textContent="Submit";


  

    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(dateContainer);
    form.appendChild(submitButton);
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
      
    }
    else{
    date.textContent=format(new Date(task.getDueDate()), "yyyy-MM-dd");
    }
   
    const deleteButton = document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.addEventListener("click",()=>{
        cardContainer.remove()
    })

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.addEventListener("click",(event)=>{
        event.stopPropagation();
    })

    
    card.appendChild(checkbox);
    card.appendChild(title);
    
    card.appendChild(date);
    card.appendChild(deleteButton);
    cardContainer.appendChild(card);
    

    return cardContainer;


}

function hideForm(){
    const form = document.querySelector("form");
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
    description.remove();
}
export {createForm,addTask};