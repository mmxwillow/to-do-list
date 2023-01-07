import { allItems } from "./todos";
import { groupedTasks } from "./display-tasks";
import displayTasks from "./display-tasks";
import { formatDetailsView } from "./format-datetime";
import format from "date-fns/format";
import { isOverdue } from "./format-datetime";

const remove = document.querySelector('#remove');
const checkbox = document.querySelector('.current-task-name input[type="checkbox"]');
const taskName = document.querySelector('.current-task-name input[type="text"]');
const description = document.querySelector('#current-description');
const priorityMenu = document.querySelector('.update-priority-menu');
const showPriorityMenuBtn = document.querySelector('#update-priority')
const priorityBtns = document.querySelectorAll('.update-priority');
const projectsMenu = document.querySelector('.update-project');
const showProjectsMenuBtn = document.querySelector('#update-projects')
const currentProjectName = document.querySelector('#tv-current-project');
const dateInput = document.querySelector('.update-datetime input[type="date"]');
const timeInput = document.querySelector('.update-datetime input[type="time"]');
const showDateTimeInputsBtn = document.querySelector('#show-datetime-inputs');
const confirmDateTimeChangeBtn = document.querySelector('#confirm-new-datetime');
const dueDate = document.querySelector('#update-due-date-title');


export function controlDetails() {
    remove.addEventListener('click', () => {
        if (window.confirm("Are you sure you wanna delete this task?")) {
            let currentTask = getCurrentTask();

            allItems.splice(allItems.findIndex(item => item === currentTask), 1);
            displayTasks();

            document.querySelector('.details').classList.add('hidden');
            document.querySelector('.no-task').classList.remove('hidden');

            document.querySelector('.task-view').classList.remove('visible');
            document.querySelector('.content').classList.remove('hidden');
        }
    })

    checkbox.addEventListener('change', () => {
        let currentTask = getCurrentTask();
        
        currentTask.changeStatus();
        if(isOverdue(currentTask.dueDate) && !currentTask.isDone) dueDate.classList.add('overdue');
        else dueDate.classList.remove('overdue');
        displayTasks();
    })

    taskName.addEventListener('input', () => {
        let currentTask = getCurrentTask();

        currentTask.title = taskName.value;
        displayTasks();
    })

    description.addEventListener('input', ()=> {
        let currentTask = getCurrentTask();

        currentTask.description = description.value;
        displayTasks();
    })

    showPriorityMenuBtn.addEventListener('click', () => {
        priorityMenu.classList.toggle('hidden');
    })

    showProjectsMenuBtn.addEventListener('click', () => {
        projectsMenu.classList.toggle('hidden');
    })

    priorityBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            showPriorityMenuBtn.className = btn.id;

            let currentTask = getCurrentTask();
            currentTask.priority = btn.id;
            displayTasks();
        })
    })

    controlProjects();

    window.addEventListener('click', (e) => {
        if(e.target !== showPriorityMenuBtn && e.target !== showPriorityMenuBtn.firstChild){
            priorityMenu.classList.add('hidden');
        }

        if(e.target !== showProjectsMenuBtn && e.target !== showProjectsMenuBtn.firstChild && e.target !== currentProjectName){
            projectsMenu.classList.add('hidden');
        }
    })

    showDateTimeInputsBtn.addEventListener('click', () => {
        document.querySelector('#update-due-date-title').classList.toggle('hidden');
        document.querySelector('.update-datetime').classList.toggle('hidden');

        let currentTask = getCurrentTask();
        let datetime = currentTask.dueDate.split(' ');
        dateInput.value = datetime[0];
        timeInput.value = datetime[1];
    })

    confirmDateTimeChangeBtn.addEventListener('click', () => {
        dueDate.classList.toggle('hidden');
        document.querySelector('.update-datetime').classList.toggle('hidden');

        let currentTask = getCurrentTask();
        let date = dateInput.value;
        if(timeInput.value && !dateInput.value) date = format(new Date(), 'yyyy-MM-dd');
        currentTask.dueDate = `${date} ${timeInput.value}`;
        dueDate.innerHTML = formatDetailsView(currentTask.dueDate);
        if(isOverdue(currentTask.dueDate) && !currentTask.isDone) dueDate.classList.add('overdue');
        else dueDate.classList.remove('overdue');
        displayTasks();
    })
}

export function controlProjects(){
    const allProjects = document.querySelectorAll('.update-project button')

    allProjects.forEach((btn) => {
        btn.addEventListener('click', () => {
            showProjectsMenuBtn.firstChild.innerHTML = btn.firstChild.innerHTML;
            currentProjectName.innerHTML = btn.lastChild.innerHTML;
            showProjectsMenuBtn.className = btn.className;

            let currentTask = getCurrentTask();
            currentTask.project = currentProjectName.innerHTML;
            displayTasks();
        })
    })
}

function getCurrentTask(){
    let taskID = taskName.getAttribute('data-current-id');
    let id = taskID.slice(0, 1);
    let i = taskID.slice(-1);

    return groupedTasks[id][i];
}