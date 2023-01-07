import { allItems, examples } from "./todos";
import { allProjects } from "./projects";
import { displayDetails } from "./display-details";
import { formatProjectView } from "./format-datetime";
import { isOverdue } from "./format-datetime";
import { tasksToday } from "./group-tasks-by-date";
import { tasksThisWeek } from "./group-tasks-by-date";
import { setItems } from "./local-storage";

export const groupedTasks = [];
let currentID;
let isHidden = false;
let isCollapsed = false;

export function groupTasks() {
    let inbox = allItems.filter(item => item.project == "Inbox");
    let today = tasksToday();
    let thisWeek = tasksThisWeek();
    groupedTasks[0] = allItems;
    groupedTasks[1] = inbox;
    groupedTasks[2] = today;
    groupedTasks[3] = thisWeek;
    for (let i = 4; i <= allProjects.length + 3; i++) {
        let temp = allItems.filter(item => item.project == allProjects[i - 4].name);
        groupedTasks[i] = temp;
    }
}

export default function displayTasks(id=currentID) {
    groupTasks();
    currentID = id;
    let i = 0;
    const project = document.getElementById(id);
    const icon = project.firstChild;
    const name = project.lastChild;
    document.querySelector('header').className = project.className;
    document.querySelector('header').setAttribute('data-id', id);
    document.querySelector('header span').innerHTML = icon.innerHTML;
    document.querySelector('header h1').innerHTML = name.innerHTML;
    document.querySelector('section').classList.add('hidden');
    document.querySelector('.completed').classList.add('hidden');

    let todo = document.querySelector('.todo');
    let completed = document.querySelector('.completed');

    todo.innerHTML = "";
    completed.innerHTML = "";

    groupedTasks[id].forEach((task) => {
        const li = document.createElement('li');
        let status = (task.isDone) ? 'checked' : '';
        let btn = `<div class="hidden"></div>`;
        let overdue = (!task.isDone && isOverdue(task.dueDate)) ? 'overdue' : '';

        if(id == 0 && task.project != "Inbox"){
            let icon = allProjects.find(element => element.name == task.project);
            btn = `<div class="tasks-project ${icon.color}"><span class="material-symbols-outlined">${icon.icon}</span><div>${task.project}</div></div>`;
        }

        const item = `
                <input type="checkbox" ${status}>
                <div class="task-name">${task.title}</div>
                ${btn}
                <div class="date ${overdue}">${formatProjectView(task.dueDate)}</div>
        `;
        li.className = task.priority;
        li.innerHTML = item;
        li.id = `${id}${i++}`;

        if (!task.isDone) {
            document.querySelector('.todo').appendChild(li);
        }
        else {
            if(!isHidden){
                document.querySelector('section').classList.remove('hidden');
                document.querySelector('.completed').classList.remove('hidden');
            }
            if(isCollapsed){
                document.querySelector('.completed').classList.add('hidden');
            }
            document.querySelector('.completed').appendChild(li);
        }
    })

    document.querySelectorAll('.tasks input[type="checkbox"]').forEach((input) => {
        input.addEventListener('change', () => {
            let id = input.parentElement.id.slice(0,1);
            let i = input.parentElement.id.slice(-1);
            
            groupedTasks[id][i].changeStatus();
            document.querySelector('.current-task-name input[type="checkbox"]').checked = groupedTasks[id][i].isDone;
            displayTasks();
        })
    })

    hideButtons();
    displayDetails();
    setItems();
}


function controlCompleted() {
    const header = document.querySelector('section');
    const completed = document.querySelector('.completed');
    const button = document.querySelector('section button span');
    const menu = document.querySelector('.project-options');
    const menuButton = document.querySelector('.project-settings');
    const toggle = document.querySelector('#completed-toggle');

    header.addEventListener('click', () => {
        completed.classList.toggle('hidden');
        button.innerHTML = (button.innerHTML === 'expand_more') ? 'expand_less' : 'expand_more';
        isCollapsed = !isCollapsed;
    })

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    })

    toggle.addEventListener('click', ()=> {
        isHidden = !isHidden;
        if(isHidden){
            document.querySelector('section').classList.add('hidden');
            document.querySelector('.completed').classList.add('hidden');
        }
        else{
            document.querySelector('section').classList.remove('hidden');
            document.querySelector('.completed').classList.remove('hidden');
            isCollapsed = false;
            button.innerHTML = 'expand_more';
        }
        toggle.innerHTML = (toggle.innerHTML.includes("Hide")) ? "Show completed" : "Hide completed";
    })

    window.addEventListener('click', (e) => {
        if(e.target != menuButton && e.target != menuButton.firstChild){
            menu.classList.add('hidden');
        }
    })
}

function hideButtons(){
    if(currentID<4){
        document.querySelector('#remove-project').classList.add('hidden');
        document.querySelector('#edit-project').classList.add('hidden');
    }
    else{
        document.querySelector('#remove-project').classList.remove('hidden');
        document.querySelector('#edit-project').classList.remove('hidden');
    }
}

controlCompleted();
