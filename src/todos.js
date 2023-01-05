import { resetForm } from "./control-todo-popup";
import displayTasks from './display-tasks'
import format from "date-fns/format";

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

export const allItems = [];

export function examples(){
    const example1 = new ToDoItem("Bake a cake", ""," ","","Inbox",false);
    const example2 = new ToDoItem("Send invitations", ""," ","","Inbox",true);

    allItems.push(example1);
    allItems.push(example2);
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