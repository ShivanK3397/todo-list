import { Task } from "./task.js";

function addTask(title,date){
    const taskTitle = title.value;
    const taskDate = date.value;
    const task = new Task(taskTitle,taskDate);
    const card = createTaskCard(task);
    const tasks= document.querySelector(".tasks");
    tasks.appendChild(card);

}

function createForm(){
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

    const submitButton = document.createElement("button");
    submitButton.textContent="Submit"
  

    form.appendChild(titleContainer);
    form.appendChild(dateContainer);
    form.appendChild(submitButton);
    content.appendChild(form);
    submitButton.addEventListener("click",(event)=>{
        
        event.preventDefault();
        addTask(title,dueDate);
        hideForm();
        
        
    });
}

function createTaskCard(task){
    const card = document.createElement("div");
    const title = document.createElement("p");
    title.textContent=task.getTitle();
    const date = document.createElement("p");
    date.textContent=task.getDueDate();
    card.appendChild(title);
    card.appendChild(date);

    return card;


}

function hideForm(){
    const form = document.querySelector("form");
    form.remove();
}
export {createForm,addTask};