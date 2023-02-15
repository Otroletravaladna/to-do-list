import { ar } from "date-fns/locale";

export const Todo = function() {
    this.title = document.querySelector("#title").value;
    this.desc = document.querySelector("#desc").value;
    this.dueDate = document.querySelector("#date").value;
    this.priority = document.querySelector("#priority").value;
    this.project = document.querySelector("#project").value;
    this.check = false;
}

export let archive = JSON.parse(localStorage.getItem("todoList")) || [];

export const addTodo = (() => {
    const form = document.querySelector(".form-container");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newTodo = new Todo();
        archive.push(newTodo);
        
        localStorage.setItem("todoList", JSON.stringify(archive));
    });

    
})();

export function editTodo(){
    const taskForm = document.querySelector(".task-info");
    
    taskForm.addEventListener("submit", (e) => {
        let changes = [];
        e.preventDefault();
        const data = new FormData(taskForm);
        for (const [property, value] of data){
            const input = [value];
            changes.push(input);
        }
        makeChanges(changes);
    })

    function makeChanges(changes) {
        console.log(changes);
        let index = changes[4];
        archive[index].dueDate = changes[1].pop();
        archive[index].priority = changes[2].toString();
        archive[index].project = changes[3].toString();
        archive[index].check = !!changes[5];
        
        localStorage.setItem("todoList", JSON.stringify(archive));
        
    }
    
}

editTodo();

console.table(archive);


