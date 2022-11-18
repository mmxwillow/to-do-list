import { resetForm } from "./control-todo-popup";

class ToDoItem{
    constructor(title,description,dueDate,priority,project,isDone="false"){
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

const allItems = [];

export default function addToDoItem() {
    document.querySelector('#submit-task').addEventListener('click', (ev) => {
        ev.preventDefault();
        const taskName = document.querySelector('input[type="text"]').value;
        const taskDescription = document.querySelector('textarea').innerHTML;
        const taskDueDate = getDate();
        const taskPriority = document.querySelector('#priority').className;
        const taskProject = document.querySelector('#current-project').innerHTML;

        const newTask = new ToDoItem(taskName, taskDescription, taskDueDate, taskPriority, taskProject);
        allItems.push(newTask);
        console.log(newTask)

        resetForm();
    })
}

function getDate() {
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;

    return date+time;
}