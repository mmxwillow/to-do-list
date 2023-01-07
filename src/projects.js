import {resetProjectForm} from './control-project-popup'
import displayProjects from './display-projects'
import { parsedProjects } from './local-storage';
import { setItems } from "./local-storage";


class Project{
    constructor(name,color,icon){
        this.name = name;
        this.color = color
        this.icon = icon;
    }
}

export let allProjects = [];

export function projectExamples() {
    const example1 = new Project("Tutorial!", "color-2", "fiber_manual_record");
    const example2 = new Project("Personal website", "color-5", "fiber_manual_record");
    const example3 = new Project("B-day party", "color-3", "fiber_manual_record");

    allProjects.push(example1);
    allProjects.push(example2);
    allProjects.push(example3);

    setItems();
}

export function importProjects(){
    allProjects = parsedProjects;
}

export default function addProject() {
    document.querySelector('#submit-project').addEventListener('click', (ev) => {
        ev.preventDefault();
        const projectName = document.querySelector('#new-project-name').value;
        const color = document.querySelector('#current-color').className;
        const icon = document.querySelector('#current-color>span').innerHTML;

        const newProject = new Project(projectName, color, icon);
        allProjects.push(newProject);
        resetProjectForm();
        displayProjects();
    })
}