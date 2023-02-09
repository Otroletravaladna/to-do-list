import * as data from "./data.js"

export const ProjectRow = (() =>  {
    let projects = [];

    data.archive.forEach(e => {
        if (projects.includes(e.project) == false){ projects.push(e.project) };
    });

    projects.forEach(e => {
        let container = document.querySelector(".container");
        let newRow = document.createElement("div");
        newRow.classList.add("project", e);
        let rowTitle = document.createElement("h2");
        rowTitle.textContent = e;
        
        container.appendChild(newRow);
        newRow.append(rowTitle);

    })

})();

export const todoList = (() => {

    let newRow = document.querySelectorAll(".project");
    newRow.forEach(e => {
        let nav = document.createElement("nav");
        nav.classList.add("todo-list");
        e.appendChild(nav);
        let ul = document.createElement("ul");
        nav.appendChild(ul);
    });

    data.archive.forEach(e => {
        let a = document.getElementsByClassName(e.project);
        let ul = document.querySelectorAll("ul");
        ul.forEach(element => {
            let li = document.createElement("li"); 
            element.appendChild(li);   
            let a = document.createElement("a");
            a.textContent = e.title;

            li.appendChild(a);
        });
        console.log(a);
    })
    
})();



    
