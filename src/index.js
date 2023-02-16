import "./style.css";
import * as data from "./data.js";
import * as ui from "./ui.js";

const popAddTodo = (() => {
    document.querySelector(".open-button").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });
      
    document.querySelector(".btn.cancel").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    });

})();


const todoNav = (() => {
    const h2 = document.querySelectorAll("h2");
    h2.forEach(e => {
    e.addEventListener("click", () => {
        let navBar = document.querySelector(`nav[class~=${e.id}]`);
        navBar.classList.toggle("active");
        })
    });
})();

export const popTodoData = (() => {
    const a = document.querySelectorAll(`a[class~=task]`);
    let popUpBg = document.querySelector(".popupBg");
    let popUpContainer = document.querySelector(".popupContainer");
    
    a.forEach(e => { e.onclick = () => { popSwitch() }});
    
    popUpBg.addEventListener("click", (e) => {
        if ( e.target == popUpBg ){ exitTodo() }
    });

    window.addEventListener("keydown", (e) => {
        if(popUpBg.className.includes("active") && e.keyCode == 27){
            exitTodo();
        }
    });

    function popSwitch() {
        popUpContainer.classList.toggle("active");
        popUpBg.classList.toggle("active");
    }

    function exitTodo() {
        setTimeout(() => {
            popSwitch();
            popUpContainer.style.animation = "";
        }, 300)
        popUpContainer.style.animation = "pop-in 400ms";
    }
    
})();

