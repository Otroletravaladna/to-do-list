import "./style.css";
import * as data from "./data.js";

const popUpNote = (() => {
    document.querySelector(".open-button").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });
      
    document.querySelector(".btn.cancel").addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    });

})();


export const ProjectRow = (() =>  {

    let projects = [];

    data.archive.forEach(e => {
        if (projects.includes(e.project) == false){ projects.push(e.project) };
    });

    console.log(projects);
})();

