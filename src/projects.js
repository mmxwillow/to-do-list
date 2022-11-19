class Project{
    constructor(name,color,icon){
        this.name = name;
        this.color = color
        this.icon = icon;
    }
}

const allProjects = [];

export default function addProject() {
    document.querySelector('#submit-project').addEventListener('click', (ev) => {
        ev.preventDefault();
        const projectName = document.querySelector('#new-project-name').value;
        const color = document.querySelector('#current-color').className;
        const icon = document.querySelector('#current-color>span').innerHTML;

        const newProject = new Project(projectName, color, icon);
        allProjects.push(newProject);
        console.log(newProject)
    })
}