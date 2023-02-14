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
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newTodo = new Todo();
        archive.push(newTodo);
        
        localStorage.setItem("todoList", JSON.stringify(archive));
    });

    
    console.table(archive);
})();

