import "./styles.css";
import {createForm,addTask } from "./interface.js";


const button = document.querySelector(".add-task");

button.addEventListener("click",()=>{
    createForm();
})

