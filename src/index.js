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

const todoNav = (() => {
    const def = document.querySelectorAll("h2");
    def.forEach(e => {
    e.addEventListener("click", () => {
        let navBar = document.querySelector(`nav[class~=${e.id}]`);
        navBar.classList.toggle("active");
        })
    });
    
})();


