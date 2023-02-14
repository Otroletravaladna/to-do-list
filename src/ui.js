import * as data from "./data.js"

export const projectRow = () =>  {
    let projects = [];

    data.archive.forEach(e => {
        if (projects.includes(e.project) == false){ projects.push(e.project) };
    });

    projects.forEach(e => {
        let container = document.querySelector(".container");
        let newRow = document.createElement("div");
        let rowTitle = document.createElement("h2");
        let nav = document.createElement("nav");
        let ul = document.createElement("ul");

        newRow.classList.add("project", e);
        rowTitle.id = e;
        rowTitle.textContent = e;
        nav.classList.add("todo-list", e);
        ul.classList.add(e);
  
        container.appendChild(newRow);
        newRow.append(rowTitle, nav);
        nav.appendChild(ul);

    })

    return {projects};
    
};

export const todoList = () => {
    const {projects} = projectRow();
    
    projects.forEach(e => {
        for(const item of data.archive){
            if(item.project == e){
                let ul = document.querySelector(`ul[class=${e}]`)
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.textContent = item.title;

                ul.appendChild(li);
                li.appendChild(a);
            }
        }
    });
};

todoList();

    
