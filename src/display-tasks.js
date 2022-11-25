import { allItems, examples } from "./todos";
import { allProjects } from "./projects";

const groupedTasks = [];
let currentID;
let isHidden = false;

export function groupTasks() {
    if (allItems.length == 0) {
        examples();
    }
    let inbox = allItems.filter(item => item.project == "Inbox");
    let today = [];
    let thisWeek = [];
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

        const item = `
                <input type="checkbox" ${status} id="${id}${i++}">
                <div class="task-name">${task.title}</div>
                <div class="date">${task.dueDate}</div>
                <button class="edit">
                        <span class="material-symbols-outlined">edit</span>
                </button>
                <button class="remove">
                    <span class="material-symbols-outlined">delete</span>
                </button>
        `;
        li.className = task.priority;
        li.innerHTML = item;

        if (!task.isDone) {
            document.querySelector('.todo').appendChild(li);
        }
        else {
            if(!isHidden){
                document.querySelector('section').classList.remove('hidden');
                document.querySelector('.completed').classList.remove('hidden');
            }
            document.querySelector('.completed').appendChild(li);
        }
    })

    document.querySelectorAll('input[type="checkbox"').forEach((input) => {
        input.addEventListener('change', () => {
            let id = input.id.slice(0,1);
            let i = input.id.slice(-1);
            
            groupedTasks[id][i].changeStatus();
            displayTasks();
        })
    })

}


function controlCompleted() {
    const header = document.querySelector('section');
    const completed = document.querySelector('.completed');
    const button = document.querySelector('section button span');
    const menu = document.querySelector('.project-options');
    const menuButton = document.querySelector('header button');
    const toggle = document.querySelector('#completed-toggle');

    header.addEventListener('click', () => {
        completed.classList.toggle('hidden');
        button.innerHTML = (button.innerHTML === 'expand_more') ? 'expand_less' : 'expand_more';
    })

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    })

    toggle.addEventListener('click', ()=> {
        isHidden = !isHidden;
        document.querySelector('section').classList.toggle('hidden');
        document.querySelector('.completed').classList.toggle('hidden');
        toggle.innerHTML = (toggle.innerHTML.includes("Hide")) ? "Show completed" : "Hide completed";
    })

    window.addEventListener('click', (e) => {
        if(e.target != menuButton && e.target != menuButton.firstChild){
            menu.classList.add('hidden');
        }
    })
}

controlCompleted();
