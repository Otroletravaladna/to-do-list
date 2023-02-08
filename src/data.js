export const Todo = function() {
    this.title = document.querySelector("#title").value;
    this.desc = document.querySelector("#desc").value;
    this.dueDate = document.querySelector("#date").value;
    this.priority = document.querySelector("#priority").value;
    this.project = document.querySelector("#project").value;
    this.check = false;
}


