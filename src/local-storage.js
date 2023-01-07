import { allItems } from "./todos";
import { allProjects } from "./projects";
import { projectExamples } from "./projects";
import { taskExamples } from "./todos";
import { importProjects } from "./projects";
import { importTasks } from "./todos";

export let parsedItems = [];
export let parsedProjects = [];

export function setItems() {
    localStorage.setItem("tasks", JSON.stringify(allItems));
    localStorage.setItem("projects", JSON.stringify(allProjects));
}

export function getItems() {
    if (localStorage.getItem("tasks") || localStorage.getItem("projects")) {
        parsedItems = JSON.parse(localStorage.getItem("tasks"));
        parsedProjects = JSON.parse(localStorage.getItem("projects"));

        if(parsedItems){
            parsedItems.forEach((item) => {
                item.changeStatus = function(){
                    this.isDone = !this.isDone;
                }
            })
        }

        importProjects();
        importTasks();
    }
    else{
        projectExamples();
        taskExamples();
        setItems();
    }
}
