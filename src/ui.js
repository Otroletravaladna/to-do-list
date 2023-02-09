import * as data from "./data.js"

export const ProjectRow = (() =>  {

    let projects = [];

    data.archive.forEach(e => {
        if (projects.includes(e.project) == false){ projects.push(e.project) };
    });

    console.log(projects);
})();

