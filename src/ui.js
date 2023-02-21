import { set } from "date-fns";
import * as data from "./data.js"
import * as index from "./index.js"

export const projectRows = () =>  {
    let projects = [];

    let form = document.querySelector(".form-container");
    form.addEventListener("submit", () => {
        getProjects();
        location.reload();
    })
    
    function getProjects() {
        data.archive.forEach(e => {
            if (projects.includes(e.project) == false){ 
                projects.push(e.project);
                newRow(e.project);
                todoList(e.project);
            };
        });
    }
 
    getProjects();
};

export const newRow = (e) => {
    let container = document.querySelector(".container");
    let rowTitle = document.createElement("h2");
    let newRow = document.createElement("div");
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
    
}

export const todoList = (e) => {
    
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
    
};

export const taskDisplay = () => {
    const task = document.querySelectorAll(".task");
    task.forEach(e => {
        e.addEventListener("click", (item) => {
            let index = item.target.className.split(" ");
            let archiveObj = data.archive[index[1]];
            displayData(archiveObj, index[1]);
        })
    });
    
    function displayData(archiveObj, index){
        document.querySelector(".task-info > h1").textContent = archiveObj.title;
        document.querySelector(".task-info > #desc").value = archiveObj.desc;
        document.querySelector(".task-info > #date").value = archiveObj.dueDate;
        document.querySelector(".task-info > #priority").value = archiveObj.priority;
        document.querySelector(".task-info > #project").value = archiveObj.project;
        document.querySelector("#check").checked = archiveObj.check;
        document.querySelector(".task-info > #index").value = index;
    }
}

export function deleteBtn() {
    const projectContainer = document.querySelectorAll(".todo-list > ul> li");

    const createBtn = (e) => {
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        e.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            let index = e.children[0].className.split(" ");
            data.removeTask(index);
            removeTask(e)
        })
    }
    
    projectContainer.forEach(e => {
        createBtn(e);
    })
    
}

function removeTask(e) {
    let parent = e.parentElement;
    e.remove();
    
    if (parent.childNodes.length < 1){
        parent.parentElement.classList.remove("active");
        setTimeout(() => {
            document.querySelector(`div[class~=${parent.className}]`).remove();
        }, 380);
    };
}

projectRows();
taskDisplay();
deleteBtn();
