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

                a.classList.add("task", data.archive.indexOf(item));
                a.textContent = item.title;

                ul.appendChild(li);
                li.appendChild(a);
            }
        }
    });
};

export const taskDisplay = () => {
    
    const task = document.querySelectorAll(".task");
    task.forEach(e => {
        e.addEventListener("click", (item) => {
            let index = item.target.className.slice(-1);
            let archiveObj = data.archive[index];
            displayData(archiveObj, index);
        })
    });
    
    function displayData(archiveObj, index){
        document.querySelector(".task-info > h1").textContent = archiveObj.title;
        document.querySelector(".task-info > #desc").value = archiveObj.desc;
        document.querySelector(".task-info > #date").value = archiveObj.dueDate;
        document.querySelector(".task-info > #priority").value = archiveObj.priority;
        document.querySelector(".task-info > #project").value = archiveObj.project;
        document.querySelector(".task-info > #check").checked = archiveObj.check;
        document.querySelector(".task-info > #index").value = index;
    }
}

todoList();
taskDisplay();
