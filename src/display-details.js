import { groupedTasks } from "./display-tasks";
import { allProjects } from "./projects";

const taskName = document.querySelector('.current-task-name input[type="text"]');
const dueDate = document.querySelector('#update-due-date-title');
const priority = document.querySelector('#update-priority');
const description = document.querySelector('#current-description');
const projectIcon = document.querySelector('#update-projects span');
const projectTitle = document.querySelector('#tv-current-project');
const checkbox = document.querySelector('.current-task-name input[type="checkbox"]');

export function displayDetails(){
    const visibleTasks = document.querySelectorAll('.tasks li');

    visibleTasks.forEach((task) => {
        task.addEventListener('click', () => {
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
            dueDate.innerHTML = currentTask.dueDate;
            priority.className = currentTask.priority;
            description.value = currentTask.description;
            projectTitle.innerHTML = currentTask.project;

            if(currentTask.isDone) checkbox.checked = true;
            else checkbox.checked = false;
        })
    })
}