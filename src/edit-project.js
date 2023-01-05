import { allProjects } from './projects'
import displayProjects from './display-projects';
import displayTasks from './display-tasks';
import { groupedTasks } from './display-tasks';

const editProjectBtn = document.querySelector('#edit-project');
const form = document.querySelector('.header');
const header = document.querySelector('header');
const changeColor = document.querySelector('#change-color');
const changeProjectName = document.querySelector('#change-project-name');
const colors = document.querySelector('.colors2');
const allColors = document.querySelectorAll('.colors2 button');

export default function editProject(){
    allColors.forEach((btn) => {
        btn.addEventListener('click', (ev) => {
            changeColor.removeAttribute('class');
            changeColor.classList.add(btn.className);
            colors.classList.add('hidden');
        })
    })

    changeColor.addEventListener('click', () => {
        colors.classList.toggle('hidden');
    })

    window.addEventListener('click', (e) => {
        if(e.target !== changeColor && e.target !== changeColor.firstChild && e.target !== changeProjectName && e.target !== editProjectBtn && !colors.contains(e.target)){
            header.classList.remove('hidden');
            form.classList.add('hidden');
        } 
    })

    editProjectBtn.addEventListener('click', () => {
        header.classList.add('hidden');
        form.classList.remove('hidden');
        let color = header.classList[0];
        let id = header.getAttribute('data-id');
        form.setAttribute('data-id', id);

        changeColor.className = color;
        changeProjectName.value = allProjects[id-4].name;
    
        document.querySelector('#update-project').addEventListener('click', (ev)=> {
            ev.preventDefault();
            let id = form.getAttribute('data-id');

            allProjects[id-4].name = changeProjectName.value;
            allProjects[id-4].color = changeColor.className;

            groupedTasks[id].forEach(task => {
                task.project = allProjects[id-4].name;
            })

            displayProjects();
            displayTasks(id);

            header.classList.remove('hidden');
            form.classList.add('hidden');
        });
    })
}