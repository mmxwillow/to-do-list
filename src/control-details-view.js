import { allItems } from "./todos";
import { groupedTasks } from "./display-tasks";
import displayTasks from "./display-tasks";

export function controlDetails() {
    const remove = document.querySelector('#remove');
    const checkbox = document.querySelector('.current-task-name input[type="checkbox"]');
    const taskName = document.querySelector('.current-task-name div');

    remove.addEventListener('click', () => {
        if (window.confirm("Are you sure you wanna delete this task?")) {
            let taskID = taskName.getAttribute('data-current-id');
            let id = taskID.slice(0, 1);
            let i = taskID.slice(-1);

            allItems.splice(allItems.findIndex(item => item === groupedTasks[id][i]), 1);
            displayTasks();

            document.querySelector('.details').classList.add('hidden');
            document.querySelector('.no-task').classList.remove('hidden');
        }
    })

    checkbox.addEventListener('change', () => {
        let taskID = taskName.getAttribute('data-current-id');
        let id = taskID.slice(0, 1);
        let i = taskID.slice(-1);
        
        groupedTasks[id][i].changeStatus();
        displayTasks();
    })
}
