import { groupedTasks } from "./display-tasks";
import { allProjects } from "./projects";
import { formatDetailsView } from "./format-datetime";
import { isOverdue } from "./format-datetime";

const taskName = document.querySelector('.current-task-name input[type="text"]');
const dueDate = document.querySelector('#update-due-date-title');
const priority = document.querySelector('#update-priority');
const description = document.querySelector('#current-description');
const projectIcon = document.querySelector('#update-projects span');
const projectTitle = document.querySelector('#tv-current-project');
const checkbox = document.querySelector('.current-task-name input[type="checkbox"]');
let mediaQuery = window.matchMedia('(max-width: 1150px)');


export function displayDetails(){
    const visibleTasks = document.querySelectorAll('.tasks li');

    visibleTasks.forEach((task) => {
        task.addEventListener('click', (ev) => {
            if(ev.target == task.firstElementChild) return;
            taskName.setAttribute('data-current-id', task.id);

            let id = task.id.slice(0,1);
            let i = task.id.slice(-1);

            let currentTask = groupedTasks[id][i];
            let currentProject = allProjects.find(project => project.name == currentTask.project);
            if(!currentProject){
                projectIcon.innerHTML = 'inbox';
                projectIcon.parentElement.className = "";
            }
            else{
                projectIcon.innerHTML = currentProject.icon;
                projectIcon.parentElement.className = currentProject.color;
            }

            document.querySelector('.details').classList.remove('hidden');
            document.querySelector('.no-task').classList.add('hidden');

            taskName.value = currentTask.title;
            dueDate.innerHTML = formatDetailsView(currentTask.dueDate);
            priority.className = currentTask.priority;
            description.value = currentTask.description;
            projectTitle.innerHTML = currentTask.project;

            
            if(isOverdue(currentTask.dueDate) && !currentTask.isDone) dueDate.classList.add('overdue');
            else dueDate.classList.remove('overdue');

            if(currentTask.isDone) checkbox.checked = true;
            else checkbox.checked = false;

            checkMediaQuery();

            mediaQuery.addEventListener('change', checkMediaQuery);
        })
    })
}

function checkMediaQuery(){
    if(mediaQuery.matches){
        document.querySelector('.task-view').classList.add('visible');
        document.querySelector('.content').classList.add('hidden');
    }
    else{
        document.querySelector('.task-view').classList.remove('visible');
        document.querySelector('.content').classList.remove('hidden');
    }
}