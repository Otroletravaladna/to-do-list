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

    
})();

console.table(archive);

// for (let item of data.archive) {
//     console.log(Object.values(indexOf(item)));
//     // Object.values(item).forEach((e) => {
//     //     console.log(e);
//     // })
// }

// data.archive.forEach(item => {
//     //crear contenedor de projectos
//     //identificar el contenedor asignandole el item.project como clase.
//     console.log(item.project)
//     Object.values(item).forEach(e => {
//         //crear y distribuir propiedades en ui.
//         // console.log(e);
//     });
// });

export function ProjectRow() {

    let projects = [];

    archive.forEach(e => {
        if (project.includes(e.project) === false){
            projects.push(e.project);
        }
    });

    console.log(projects);
}