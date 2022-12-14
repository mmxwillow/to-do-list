import controlSidebar from "./control-sidebar";
import { controlMenus } from "./control-todo-popup"
import { allProjects } from "./projects";
import displayTasks from "./display-tasks";
import { groupedTasks } from "./display-tasks";
import { allItems } from "./todos";

export default function displayProjects() {
    let activeID = document.querySelectorAll('.active')[0].id;
    
    document.querySelector('.projects').innerHTML = '';
    document.querySelector('.change-project>ul').innerHTML = '<li><button type="button"><span class="material-symbols-outlined">inbox</span><div>Inbox</div></button></li>';
    let i = 4;

    allProjects.forEach((project) => {
        const liSidebar = document.createElement('li');
        const span = document.createElement('span');
        const div = document.createElement('div');

        liSidebar.className = project.color;
        liSidebar.id = i++;
        span.innerHTML = project.icon;
        span.className = 'material-symbols-outlined';
        div.innerHTML = project.name;

        liSidebar.appendChild(span);
        liSidebar.appendChild(div);

        document.querySelector('.projects').appendChild(liSidebar);

        const liPopup = document.createElement('li');
        const button = document.createElement('button');
        const spanPopup = document.createElement('span');
        const divPopup = document.createElement('div');

        button.type = 'button';
        button.className = project.color;
        spanPopup.innerHTML = project.icon;
        spanPopup.className = 'material-symbols-outlined';
        divPopup.innerHTML = project.name;

        button.appendChild(spanPopup);
        button.appendChild(divPopup);
        liPopup.appendChild(button);

        document.querySelector('.change-project>ul').appendChild(liPopup);
    })
    controlSidebar();
    controlMenus();

    document.getElementById(activeID).classList.add('active');
}

document.querySelector('#remove-project').addEventListener('click', () => {
    let id = document.querySelector('header').getAttribute('data-id') - 4;

    allProjects.splice(id,1);
    
    groupedTasks[id+4].forEach((a) => allItems.splice(allItems.findIndex(b => a == b),1));

    displayProjects();
    displayTasks(0);
})