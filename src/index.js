import "./style.css";
import { Todo } from "./data.js";

const form = document.querySelector("form");
const popUpNote = (() => {
    document.querySelector(".open-button").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });
      
    document.querySelector(".btn.cancel").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    });

})();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTodo = new Todo();
    archive.push(newTodo);
    
    localStorage.setItem("todoList", JSON.stringify(archive));
});

let archive = JSON.parse(localStorage.getItem("todoList")) || [];

console.table(archive);