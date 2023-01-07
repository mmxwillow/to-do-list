import { resetForm } from "./control-todo-popup";
import displayTasks from './display-tasks'
import format from "date-fns/format";
import { parsedItems } from "./local-storage";

class ToDoItem{
    constructor(title,description,dueDate,priority,project,isDone){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
        this.project = project;
    }

    changeStatus(){
        this.isDone = !this.isDone;
    }
}

export let allItems = [];

export function taskExamples(){
    const e1 = new ToDoItem("This is a task",""," ","","Tutorial!",false);
    const e2 = new ToDoItem("Click on me to see details","Here's a description. You can edit the task name and description by simply clicking on the text. You can change the due date, priority and project by clicking on respective icons. If you'd like, you can even remove the task completely! But wouldn't recommend doing it for now, I haven't implemented the trash system..."," ","","Tutorial!",false);
    const e3 = new ToDoItem("You can hide completed tasks in project settings","Click on the 3 dots on the right. There's an option to fully hide the completed section... But if you want to, you can just hide the tasks by clicking on the sections name."," ","","Tutorial!",false);
    const e4 = new ToDoItem("You can also edit and remove the project!",""," ","","Tutorial!",false);

    const e5 = new ToDoItem("Bake a cake", "","2023-03-13","high","B-day party",false);
    const e6 = new ToDoItem("Send invitations", "","2023-03-07","high","B-day party",true);

    const e7 = new ToDoItem("Research design trends",""," ","low","Personal website",true);
    const e8 = new ToDoItem("About me section",""," ","medium","Personal website",true);
    const e9 = new ToDoItem("Project showcase",""," ","medium","Personal website",false);


    allItems.push(e1);
    allItems.push(e2);
    allItems.push(e3);
    allItems.push(e4);
    allItems.push(e5);
    allItems.push(e6);
    allItems.push(e7);
    allItems.push(e8);
    allItems.push(e9);
}

export function importTasks(){
    allItems = parsedItems;
}


export default function addToDoItem() {
    document.querySelector('#submit-task').addEventListener('click', (ev) => {
        ev.preventDefault();
        const taskName = document.querySelector('#task-name').value;
        const taskDescription = document.querySelector('textarea').value;
        const taskDueDate = getDate();
        const taskPriority = document.querySelector('#priority').className;
        const taskProject = document.querySelector('#current-project').innerHTML;

        const newTask = new ToDoItem(taskName, taskDescription, taskDueDate, taskPriority, taskProject, false);
        allItems.push(newTask);

        resetForm();
        displayTasks();
    })
}

function getDate() {
    let date = document.querySelector('.datetime input[type="date"]').value;
    let time = document.querySelector('.datetime input[type="time"]').value;

    if(time && !date) date = format(new Date(), 'yyyy-MM-dd');

    return `${date} ${time}`;
}