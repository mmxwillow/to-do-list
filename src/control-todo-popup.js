export default function controlToDoPopup() {
    const additionalData = document.querySelector('.additional-data');
    const datetime = document.querySelector('.datetime');
    const description = document.querySelector('.description');
    const priority = document.querySelector('.priority');
    const priorityBtn = document.querySelector('#priority');
    const changePriority = document.querySelectorAll('.change-priority');
    const projectsBtn = document.querySelector('#projects');
    const changeProject = document.querySelector('.change-project');
    const currentProject = document.querySelector('#current-project');
    const allProjects = document.querySelectorAll('.change-project button')

    document.querySelector('#due-date').addEventListener('click', () => {
        if(description.classList.contains('hidden')) additionalData.classList.toggle('hidden');
        datetime.classList.toggle('hidden');
    })
    document.querySelector('#description').addEventListener('click', () => {
        if(datetime.classList.contains('hidden')) additionalData.classList.toggle('hidden');
        description.classList.toggle('hidden');
    })
    priorityBtn.addEventListener('click', () => {
        priority.classList.toggle('hidden');
    })
    changePriority.forEach((btn) => {
        btn.addEventListener('click', () => {
            priorityBtn.removeAttribute('class');
            priorityBtn.classList.add(btn.id);
            priority.classList.toggle('hidden');
        })
    })
    projectsBtn.addEventListener('click', () => {
        changeProject.classList.toggle('hidden');
    })
    allProjects.forEach((btn) => {
        btn.addEventListener('click', () => {
            projectsBtn.firstChild.innerHTML = btn.firstChild.innerHTML;
            currentProject.innerHTML = btn.lastChild.innerHTML;
        })
    })

    window.addEventListener('click', (e) => {
        if(e.target !== priorityBtn && e.target !== priorityBtn.firstChild){
            priority.classList.add('hidden');
        }

        if(e.target !== projectsBtn && e.target !== projectsBtn.firstChild && e.target !== currentProject){
            changeProject.classList.add('hidden');
        }
    })

    const toggleItemPopup = () =>  {
        document.querySelector('.popup').classList.toggle('hidden');
        document.querySelector('.cover').classList.toggle('hidden');
    }

    document.querySelector('.cover').addEventListener('click', toggleItemPopup)
    document.querySelector('.add-item-popup').addEventListener('click', toggleItemPopup)
}