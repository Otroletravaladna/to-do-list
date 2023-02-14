import "./style.css";
import * as data from "./data.js";
import * as ui from "./ui.js";

const popUpNote = (() => {
    document.querySelector(".open-button").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });
      
    document.querySelector(".btn.cancel").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    });

})();


//fix this 

const def = document.querySelector("h2");
def.addEventListener("click", () => {
    let navBar = document.querySelector(".todo-list")
    navBar.classList.toggle("active")
})

