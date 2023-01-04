/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/control-details-view.js":
/*!*************************************!*\
  !*** ./src/control-details-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlDetails": () => (/* binding */ controlDetails),
/* harmony export */   "controlProjects": () => (/* binding */ controlProjects)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _display_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-tasks */ "./src/display-tasks.js");




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


function controlDetails() {
    remove.addEventListener('click', () => {
        if (window.confirm("Are you sure you wanna delete this task?")) {
            let currentTask = getCurrentTask();

            _todos__WEBPACK_IMPORTED_MODULE_0__.allItems.splice(_todos__WEBPACK_IMPORTED_MODULE_0__.allItems.findIndex(item => item === currentTask), 1);
            (0,_display_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])();

            document.querySelector('.details').classList.add('hidden');
            document.querySelector('.no-task').classList.remove('hidden');
        }
    })

    checkbox.addEventListener('change', () => {
        let currentTask = getCurrentTask();
        
        currentTask.changeStatus();
        (0,_display_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    taskName.addEventListener('input', () => {
        let currentTask = getCurrentTask();

        currentTask.title = taskName.value;
        (0,_display_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    description.addEventListener('input', ()=> {
        let currentTask = getCurrentTask();

        currentTask.description = description.value;
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
            (0,_display_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
        document.querySelector('#update-due-date-title').classList.toggle('hidden');
        document.querySelector('.update-datetime').classList.toggle('hidden');

        let currentTask = getCurrentTask();
        currentTask.dueDate = `${dateInput.value} ${timeInput.value}`;
        document.querySelector('#update-due-date-title').innerHTML = currentTask.dueDate;
        (0,_display_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
}

function controlProjects(){
    const allProjects = document.querySelectorAll('.update-project button')

    allProjects.forEach((btn) => {
        btn.addEventListener('click', () => {
            showProjectsMenuBtn.firstChild.innerHTML = btn.firstChild.innerHTML;
            currentProjectName.innerHTML = btn.lastChild.innerHTML;
            showProjectsMenuBtn.className = btn.className;

            let currentTask = getCurrentTask();
            currentTask.project = currentProjectName.innerHTML;
            (0,_display_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
        })
    })
}

function getCurrentTask(){
    let taskID = taskName.getAttribute('data-current-id');
    let id = taskID.slice(0, 1);
    let i = taskID.slice(-1);

    return _display_tasks__WEBPACK_IMPORTED_MODULE_1__.groupedTasks[id][i];
}

/***/ }),

/***/ "./src/control-project-popup.js":
/*!**************************************!*\
  !*** ./src/control-project-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlProjectPopup),
/* harmony export */   "resetProjectForm": () => (/* binding */ resetProjectForm)
/* harmony export */ });
const addProject = document.querySelector('.add-project');
const popup = document.querySelector('.add-project-popup');
const currentColor = document.querySelector('#current-color');
const colors = document.querySelector('.colors');
const allColors = document.querySelectorAll('.colors button');
const cover = document.querySelector('.project-cover');

function controlProjectPopup() {
    addProject.addEventListener('click', resetProjectForm);
    cover.addEventListener('click', resetProjectForm);

    allColors.forEach((btn) => {
        btn.addEventListener('click', () => {
            currentColor.removeAttribute('class');
            currentColor.classList.add(btn.className);
        })
    })
    currentColor.addEventListener('click', () => {
        colors.classList.toggle('hidden');
    })

    window.addEventListener('click', (e) => {
        if(e.target !== currentColor && e.target !== currentColor.firstChild){
            colors.classList.add('hidden');
        } 
    })
}

function toggleProjectPopup() {
    cover.classList.toggle('hidden');
    popup.classList.toggle('hidden');
    colors.classList.add('hidden');
    document.querySelector('#new-project-name').focus();
    document.querySelector('#new-project-name').select();
}

function resetProjectForm(){
    document.querySelector('form').reset();
    currentColor.removeAttribute('class');
    currentColor.classList.add('color-1');
    toggleProjectPopup();
}

/***/ }),

/***/ "./src/control-sidebar.js":
/*!********************************!*\
  !*** ./src/control-sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlSidebar)
/* harmony export */ });
/* harmony import */ var _display_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-tasks */ "./src/display-tasks.js");


function controlSidebar() {
    const controlIcons = () => {
        const projectsAll = document.querySelectorAll('.list li');

        projectsAll.forEach((project) => {
            project.addEventListener('click', () => {
                clearActiveClass();
                project.classList.add('active');
                (0,_display_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])(project.id);
            })
        });

        const clearActiveClass = (() => {
            projectsAll.forEach((project) => {
                project.classList.remove('active');
            })
        });
    }

    const changeProjectsVisibility = () => {
        const viewProjects = document.querySelector('.view-projects');
        const projects = document.querySelector('.projects');

        viewProjects.addEventListener('click', () => {
            projects.classList.toggle('hidden');
            toggleIcon();
        })

        const toggleIcon = () => {
            const icon = viewProjects.firstElementChild;
            icon.innerHTML = (icon.innerHTML == 'expand_more') ? 'expand_less' : 'expand_more';
        }
    }


    controlIcons();
    changeProjectsVisibility();
}

/***/ }),

/***/ "./src/control-todo-popup.js":
/*!***********************************!*\
  !*** ./src/control-todo-popup.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlMenus": () => (/* binding */ controlMenus),
/* harmony export */   "resetForm": () => (/* binding */ resetForm)
/* harmony export */ });
const additionalData = document.querySelector('.additional-data');
const datetime = document.querySelector('.datetime');
const description = document.querySelector('.description');
const priority = document.querySelector('.priority');
const priorityBtn = document.querySelector('#priority');
const changePriority = document.querySelectorAll('.change-priority');
const projectsBtn = document.querySelector('#projects');
const changeProject = document.querySelector('.change-project');
const currentProject = document.querySelector('#current-project');

function controlToDoPopup() {
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
    projectsBtn.addEventListener('click', () => {
        changeProject.classList.toggle('hidden');
    })
    controlMenus();

    window.addEventListener('click', (e) => {
        if(e.target !== priorityBtn && e.target !== priorityBtn.firstChild){
            priority.classList.add('hidden');
        }

        if(e.target !== projectsBtn && e.target !== projectsBtn.firstChild && e.target !== currentProject){
            changeProject.classList.add('hidden');
        }
    })

    document.querySelector('.cover').addEventListener('click', resetForm)
    document.querySelector('.add-item-popup').addEventListener('click', resetForm)
}

function controlMenus(){
    const allProjects = document.querySelectorAll('.change-project button')

    changePriority.forEach((btn) => {
        btn.addEventListener('click', () => {
            priorityBtn.removeAttribute('class');
            priorityBtn.classList.add(btn.id);
            priority.classList.toggle('hidden');
        })
    })
    allProjects.forEach((btn) => {
        btn.addEventListener('click', () => {
            projectsBtn.firstChild.innerHTML = btn.firstChild.innerHTML;
            currentProject.innerHTML = btn.lastChild.innerHTML;
            projectsBtn.className = btn.className;
        })
    })
}

function resetForm() {
    document.querySelector('.item-popup').reset();

    priorityBtn.removeAttribute('class');
    priorityBtn.classList.add('none');

    projectsBtn.firstChild.innerHTML = 'inbox';
    currentProject.innerHTML = 'Inbox';
    projectsBtn.className = '';

    toggleItemPopup();
}

function toggleItemPopup() {
    document.querySelector('.popup').classList.toggle('hidden');
    document.querySelector('.cover').classList.toggle('hidden');
    additionalData.classList.add('hidden')
    datetime.classList.add('hidden');
    description.classList.add('hidden');
    document.querySelector('#task-name').focus();
    document.querySelector('#task-name').select();
}

controlToDoPopup();

/***/ }),

/***/ "./src/display-details.js":
/*!********************************!*\
  !*** ./src/display-details.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayDetails": () => (/* binding */ displayDetails)
/* harmony export */ });
/* harmony import */ var _display_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-tasks */ "./src/display-tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const taskName = document.querySelector('.current-task-name input[type="text"]');
const dueDate = document.querySelector('#update-due-date-title');
const priority = document.querySelector('#update-priority');
const description = document.querySelector('#current-description');
const projectIcon = document.querySelector('#update-projects span');
const projectTitle = document.querySelector('#tv-current-project');
const checkbox = document.querySelector('.current-task-name input[type="checkbox"]');

function displayDetails(){
    const visibleTasks = document.querySelectorAll('.tasks li');

    visibleTasks.forEach((task) => {
        task.addEventListener('click', () => {
            taskName.setAttribute('data-current-id', task.id);

            let id = task.id.slice(0,1);
            let i = task.id.slice(-1);

            let currentTask = _display_tasks__WEBPACK_IMPORTED_MODULE_0__.groupedTasks[id][i];
            let currentProject = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.find(project => project.name == currentTask.project);
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

/***/ }),

/***/ "./src/display-projects.js":
/*!*********************************!*\
  !*** ./src/display-projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _control_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-sidebar */ "./src/control-sidebar.js");
/* harmony import */ var _control_todo_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-todo-popup */ "./src/control-todo-popup.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-tasks */ "./src/display-tasks.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _control_details_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-details-view */ "./src/control-details-view.js");








function displayProjects() {
    let activeID = document.querySelectorAll('.active')[0].id;
    
    document.querySelector('.projects').innerHTML = '';
    document.querySelector('.change-project>ul').innerHTML = '<li><button type="button"><span class="material-symbols-outlined">inbox</span><div>Inbox</div></button></li>';
    document.querySelector('.update-project>ul').innerHTML = '<li><button type="button"><span class="material-symbols-outlined">inbox</span><div>Inbox</div></button></li>';

    let i = 4;

    _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.forEach((project) => {
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

        const popup1 = generatePopup(project);
        const popup2 = generatePopup(project);

        document.querySelector('.change-project>ul').appendChild(popup1);
        document.querySelector('.update-project>ul').appendChild(popup2);
    })
    ;(0,_control_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_control_todo_popup__WEBPACK_IMPORTED_MODULE_1__.controlMenus)();
    (0,_control_details_view__WEBPACK_IMPORTED_MODULE_5__.controlProjects)();

    document.getElementById(activeID).classList.add('active');
}

function generatePopup(project){
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

    return liPopup;
}

document.querySelector('#remove-project').addEventListener('click', () => {
    let id = document.querySelector('header').getAttribute('data-id') - 4;

    _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.splice(id,1);
    
    _display_tasks__WEBPACK_IMPORTED_MODULE_3__.groupedTasks[id+4].forEach((a) => _todos__WEBPACK_IMPORTED_MODULE_4__.allItems.splice(_todos__WEBPACK_IMPORTED_MODULE_4__.allItems.findIndex(b => a == b),1));

    displayProjects();
    (0,_display_tasks__WEBPACK_IMPORTED_MODULE_3__["default"])(0);
})

/***/ }),

/***/ "./src/display-tasks.js":
/*!******************************!*\
  !*** ./src/display-tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTasks),
/* harmony export */   "groupTasks": () => (/* binding */ groupTasks),
/* harmony export */   "groupedTasks": () => (/* binding */ groupedTasks)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-details */ "./src/display-details.js");




const groupedTasks = [];
let currentID;
let isHidden = false;
let isFirstSession = true;

function groupTasks() {
    if (_todos__WEBPACK_IMPORTED_MODULE_0__.allItems.length == 0 && isFirstSession) {
        (0,_todos__WEBPACK_IMPORTED_MODULE_0__.examples)();
    }
    isFirstSession = false;
    let inbox = _todos__WEBPACK_IMPORTED_MODULE_0__.allItems.filter(item => item.project == "Inbox");
    let today = [];
    let thisWeek = [];
    groupedTasks[0] = _todos__WEBPACK_IMPORTED_MODULE_0__.allItems;
    groupedTasks[1] = inbox;
    groupedTasks[2] = today;
    groupedTasks[3] = thisWeek;
    for (let i = 4; i <= _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.length + 3; i++) {
        let temp = _todos__WEBPACK_IMPORTED_MODULE_0__.allItems.filter(item => item.project == _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[i - 4].name);
        groupedTasks[i] = temp;
    }
}

function displayTasks(id=currentID) {
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

        if(id == 0 && task.project != "Inbox"){
            let icon = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.find(element => element.name == task.project);
            btn = `<div class="tasks-project ${icon.color}"><span class="material-symbols-outlined">${icon.icon}</span><div>${task.project}</div></div>`;
        }

        const item = `
                <input type="checkbox" ${status}>
                <div class="task-name">${task.title}</div>
                <div class="date">${task.dueDate}</div>
                ${btn}
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
    (0,_display_details__WEBPACK_IMPORTED_MODULE_2__.displayDetails)();
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


/***/ }),

/***/ "./src/edit-project.js":
/*!*****************************!*\
  !*** ./src/edit-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");
/* harmony import */ var _display_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-tasks */ "./src/display-tasks.js");





const editProjectBtn = document.querySelector('#edit-project');
const form = document.querySelector('.header');
const header = document.querySelector('header');
const changeColor = document.querySelector('#change-color');
const changeProjectName = document.querySelector('#change-project-name');
const colors = document.querySelector('.colors2');
const allColors = document.querySelectorAll('.colors2 button');

function editProject(){
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
            console.log('test')
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
        changeProjectName.value = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[id-4].name;
    
        document.querySelector('#update-project').addEventListener('click', (ev)=> {
            ev.preventDefault();
            let id = form.getAttribute('data-id');

            _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[id-4].name = changeProjectName.value;
            _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[id-4].color = changeColor.className;

            _display_tasks__WEBPACK_IMPORTED_MODULE_2__.groupedTasks[id].forEach(task => {
                task.project = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[id-4].name;
            })

            ;(0,_display_projects__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_display_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(id);

            header.classList.remove('hidden');
            form.classList.add('hidden');
        });
    })
}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _control_project_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-project-popup */ "./src/control-project-popup.js");
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");



class Project{
    constructor(name,color,icon){
        this.name = name;
        this.color = color
        this.icon = icon;
    }
}

const allProjects = [];

const example1 = new Project("Mike's b-day", "color-2", "fiber_manual_record");
const example2 = new Project("Personal website", "color-1", "fiber_manual_record");
const example3 = new Project("Kitchen makeover", "color-3", "fiber_manual_record");
const example4 = new Project("Shopping list", "color-5", "fiber_manual_record");

allProjects.push(example1);
allProjects.push(example2);
allProjects.push(example3);
allProjects.push(example4);

function addProject() {
    document.querySelector('#submit-project').addEventListener('click', (ev) => {
        ev.preventDefault();
        const projectName = document.querySelector('#new-project-name').value;
        const color = document.querySelector('#current-color').className;
        const icon = document.querySelector('#current-color>span').innerHTML;

        const newProject = new Project(projectName, color, icon);
        allProjects.push(newProject);
        (0,_control_project_popup__WEBPACK_IMPORTED_MODULE_0__.resetProjectForm)();
        (0,_display_projects__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
}

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allItems": () => (/* binding */ allItems),
/* harmony export */   "default": () => (/* binding */ addToDoItem),
/* harmony export */   "examples": () => (/* binding */ examples)
/* harmony export */ });
/* harmony import */ var _control_todo_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-todo-popup */ "./src/control-todo-popup.js");
/* harmony import */ var _display_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-tasks */ "./src/display-tasks.js");



class ToDoItem{
    constructor(title,description,dueDate,priority,project,isDone){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
        this.project = project;
    }

    changeStatus(){
        this.isDone = !this.isDone;
    }
}

const allItems = [];

function examples(){
    const example1 = new ToDoItem("Bake a cake", "","","","Inbox",false);
    const example2 = new ToDoItem("Send invitations", "","","","Inbox",true);

    allItems.push(example1);
    allItems.push(example2);
}


function addToDoItem() {
    document.querySelector('#submit-task').addEventListener('click', (ev) => {
        ev.preventDefault();
        const taskName = document.querySelector('#task-name').value;
        const taskDescription = document.querySelector('textarea').value;
        const taskDueDate = getDate();
        const taskPriority = document.querySelector('#priority').className;
        const taskProject = document.querySelector('#current-project').innerHTML;

        const newTask = new ToDoItem(taskName, taskDescription, taskDueDate, taskPriority, taskProject, false);
        allItems.push(newTask);

        (0,_control_todo_popup__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
        (0,_display_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
}

function getDate() {
    const date = document.querySelector('.datetime input[type="date"]').value;
    const time = document.querySelector('.datetime input[type="time"]').value;

    return `${date} ${time}`;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _control_project_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-project-popup */ "./src/control-project-popup.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");
/* harmony import */ var _display_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-tasks */ "./src/display-tasks.js");
/* harmony import */ var _edit_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-project */ "./src/edit-project.js");
/* harmony import */ var _control_details_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-details-view */ "./src/control-details-view.js");








(0,_todos__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_control_project_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_display_projects__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_display_tasks__WEBPACK_IMPORTED_MODULE_4__["default"])(0);
(0,_edit_project__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_control_details_view__WEBPACK_IMPORTED_MODULE_6__.controlDetails)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2U7O0FBRXZELGtEQUFXO0FBQ1gsa0VBQW1CO0FBQ25CLHFEQUFVO0FBQ1YsNkRBQWU7QUFDZiwwREFBWTtBQUNaLHlEQUFXO0FBQ1gscUVBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbC1kZXRhaWxzLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sLXByb2plY3QtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sLXNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sLXRvZG8tcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS10YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsSXRlbXMgfSBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgZ3JvdXBlZFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheS10YXNrc1wiO1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5cbmNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUnKTtcbmNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGFzay1uYW1lIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10YXNrLW5hbWUgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtZGVzY3JpcHRpb24nKTtcbmNvbnN0IHByaW9yaXR5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtcHJpb3JpdHktbWVudScpO1xuY29uc3Qgc2hvd1ByaW9yaXR5TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtcHJpb3JpdHknKVxuY29uc3QgcHJpb3JpdHlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVwZGF0ZS1wcmlvcml0eScpO1xuY29uc3QgcHJvamVjdHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1wcm9qZWN0Jyk7XG5jb25zdCBzaG93UHJvamVjdHNNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS1wcm9qZWN0cycpXG5jb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHYtY3VycmVudC1wcm9qZWN0Jyk7XG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWRhdGV0aW1lIGlucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG5jb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWRhdGV0aW1lIGlucHV0W3R5cGU9XCJ0aW1lXCJdJyk7XG5jb25zdCBzaG93RGF0ZVRpbWVJbnB1dHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1kYXRldGltZS1pbnB1dHMnKTtcbmNvbnN0IGNvbmZpcm1EYXRlVGltZUNoYW5nZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLW5ldy1kYXRldGltZScpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sRGV0YWlscygpIHtcbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgZGVsZXRlIHRoaXMgdGFzaz9cIikpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRUYXNrKCk7XG5cbiAgICAgICAgICAgIGFsbEl0ZW1zLnNwbGljZShhbGxJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBjdXJyZW50VGFzayksIDEpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tdGFzaycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gZ2V0Q3VycmVudFRhc2soKTtcbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRUYXNrLmNoYW5nZVN0YXR1cygpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxuXG4gICAgdGFza05hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRUYXNrKCk7XG5cbiAgICAgICAgY3VycmVudFRhc2sudGl0bGUgPSB0YXNrTmFtZS52YWx1ZTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSlcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCk9PiB7XG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRUYXNrKCk7XG5cbiAgICAgICAgY3VycmVudFRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcbiAgICB9KVxuXG4gICAgc2hvd1ByaW9yaXR5TWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHlNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG5cbiAgICBzaG93UHJvamVjdHNNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0c01lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcblxuICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hvd1ByaW9yaXR5TWVudUJ0bi5jbGFzc05hbWUgPSBidG4uaWQ7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRUYXNrKCk7XG4gICAgICAgICAgICBjdXJyZW50VGFzay5wcmlvcml0eSA9IGJ0bi5pZDtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb250cm9sUHJvamVjdHMoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBzaG93UHJpb3JpdHlNZW51QnRuICYmIGUudGFyZ2V0ICE9PSBzaG93UHJpb3JpdHlNZW51QnRuLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgcHJpb3JpdHlNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHNob3dQcm9qZWN0c01lbnVCdG4gJiYgZS50YXJnZXQgIT09IHNob3dQcm9qZWN0c01lbnVCdG4uZmlyc3RDaGlsZCAmJiBlLnRhcmdldCAhPT0gY3VycmVudFByb2plY3ROYW1lKXtcbiAgICAgICAgICAgIHByb2plY3RzTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBzaG93RGF0ZVRpbWVJbnB1dHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtZHVlLWRhdGUtdGl0bGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1kYXRldGltZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRUYXNrKCk7XG4gICAgICAgIGxldCBkYXRldGltZSA9IGN1cnJlbnRUYXNrLmR1ZURhdGUuc3BsaXQoJyAnKTtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZXRpbWVbMF07XG4gICAgICAgIHRpbWVJbnB1dC52YWx1ZSA9IGRhdGV0aW1lWzFdO1xuICAgIH0pXG5cbiAgICBjb25maXJtRGF0ZVRpbWVDaGFuZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtZHVlLWRhdGUtdGl0bGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1kYXRldGltZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRUYXNrKCk7XG4gICAgICAgIGN1cnJlbnRUYXNrLmR1ZURhdGUgPSBgJHtkYXRlSW5wdXQudmFsdWV9ICR7dGltZUlucHV0LnZhbHVlfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtZHVlLWRhdGUtdGl0bGUnKS5pbm5lckhUTUwgPSBjdXJyZW50VGFzay5kdWVEYXRlO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbFByb2plY3RzKCl7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXBkYXRlLXByb2plY3QgYnV0dG9uJylcblxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaG93UHJvamVjdHNNZW51QnRuLmZpcnN0Q2hpbGQuaW5uZXJIVE1MID0gYnRuLmZpcnN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3ROYW1lLmlubmVySFRNTCA9IGJ0bi5sYXN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgc2hvd1Byb2plY3RzTWVudUJ0bi5jbGFzc05hbWUgPSBidG4uY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBnZXRDdXJyZW50VGFzaygpO1xuICAgICAgICAgICAgY3VycmVudFRhc2sucHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZS5pbm5lckhUTUw7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VGFzaygpe1xuICAgIGxldCB0YXNrSUQgPSB0YXNrTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudC1pZCcpO1xuICAgIGxldCBpZCA9IHRhc2tJRC5zbGljZSgwLCAxKTtcbiAgICBsZXQgaSA9IHRhc2tJRC5zbGljZSgtMSk7XG5cbiAgICByZXR1cm4gZ3JvdXBlZFRhc2tzW2lkXVtpXTtcbn0iLCJjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpO1xuY29uc3QgY3VycmVudENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3InKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnMnKTtcbmNvbnN0IGFsbENvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcnMgYnV0dG9uJyk7XG5jb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvdmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xQcm9qZWN0UG9wdXAoKSB7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdEZvcm0pO1xuICAgIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0Rm9ybSk7XG5cbiAgICBhbGxDb2xvcnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjdXJyZW50Q29sb3IuY2xhc3NMaXN0LmFkZChidG4uY2xhc3NOYW1lKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGN1cnJlbnRDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29sb3JzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gY3VycmVudENvbG9yICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50Q29sb3IuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBjb2xvcnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdFBvcHVwKCkge1xuICAgIGNvdmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGNvbG9ycy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbmFtZScpLmZvY3VzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS5zZWxlY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJvamVjdEZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICBjdXJyZW50Q29sb3IucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIGN1cnJlbnRDb2xvci5jbGFzc0xpc3QuYWRkKCdjb2xvci0xJyk7XG4gICAgdG9nZ2xlUHJvamVjdFBvcHVwKCk7XG59IiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xTaWRlYmFyKCkge1xuICAgIGNvbnN0IGNvbnRyb2xJY29ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCBsaScpO1xuXG4gICAgICAgIHByb2plY3RzQWxsLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJBY3RpdmVDbGFzcygpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xlYXJBY3RpdmVDbGFzcyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0FsbC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgdmlld1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcblxuICAgICAgICB2aWV3UHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRvZ2dsZUljb24oKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0b2dnbGVJY29uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IHZpZXdQcm9qZWN0cy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gKGljb24uaW5uZXJIVE1MID09ICdleHBhbmRfbW9yZScpID8gJ2V4cGFuZF9sZXNzJyA6ICdleHBhbmRfbW9yZSc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnRyb2xJY29ucygpO1xuICAgIGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSgpO1xufSIsImNvbnN0IGFkZGl0aW9uYWxEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGl0aW9uYWwtZGF0YScpO1xuY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXRpbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbmNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcmlvcml0eScpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbmNvbnN0IGNoYW5nZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXByb2plY3QnKTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdCcpO1xuXG5mdW5jdGlvbiBjb250cm9sVG9Eb1BvcHVwKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcm9qZWN0IGJ1dHRvbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBkYXRldGltZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihkYXRldGltZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hhbmdlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGNvbnRyb2xNZW51cygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByaW9yaXR5QnRuICYmIGUudGFyZ2V0ICE9PSBwcmlvcml0eUJ0bi5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByb2plY3RzQnRuICYmIGUudGFyZ2V0ICE9PSBwcm9qZWN0c0J0bi5maXJzdENoaWxkICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50UHJvamVjdCl7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1wb3B1cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbE1lbnVzKCl7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByb2plY3QgYnV0dG9uJylcblxuICAgIGNoYW5nZVByaW9yaXR5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKGJ0bi5pZCk7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9IGJ0bi5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTCA9IGJ0bi5sYXN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcHJvamVjdHNCdG4uY2xhc3NOYW1lID0gYnRuLmNsYXNzTmFtZTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXBvcHVwJykucmVzZXQoKTtcblxuICAgIHByaW9yaXR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG5cbiAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9ICdpbmJveCc7XG4gICAgY3VycmVudFByb2plY3QuaW5uZXJIVE1MID0gJ0luYm94JztcbiAgICBwcm9qZWN0c0J0bi5jbGFzc05hbWUgPSAnJztcblxuICAgIHRvZ2dsZUl0ZW1Qb3B1cCgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVJdGVtUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgYWRkaXRpb25hbERhdGEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkYXRldGltZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykuZm9jdXMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykuc2VsZWN0KCk7XG59XG5cbmNvbnRyb2xUb0RvUG9wdXAoKTsiLCJpbXBvcnQgeyBncm91cGVkVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGFzay1uYW1lIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS1kdWUtZGF0ZS10aXRsZScpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLXByaW9yaXR5Jyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWRlc2NyaXB0aW9uJyk7XG5jb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtcHJvamVjdHMgc3BhbicpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R2LWN1cnJlbnQtcHJvamVjdCcpO1xuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10YXNrLW5hbWUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RGV0YWlscygpe1xuICAgIGNvbnN0IHZpc2libGVUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrcyBsaScpO1xuXG4gICAgdmlzaWJsZVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW50LWlkJywgdGFzay5pZCk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IHRhc2suaWQuc2xpY2UoMCwxKTtcbiAgICAgICAgICAgIGxldCBpID0gdGFzay5pZC5zbGljZSgtMSk7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdyb3VwZWRUYXNrc1tpZF1baV07XG4gICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09IGN1cnJlbnRUYXNrLnByb2plY3QpO1xuICAgICAgICAgICAgaWYoIWN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWNvbi5pbm5lckhUTUwgPSAnaW5ib3gnO1xuICAgICAgICAgICAgICAgIHByb2plY3RJY29uLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcHJvamVjdEljb24uaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuaWNvbjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWNvbi5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IGN1cnJlbnRQcm9qZWN0LmNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXRhc2snKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgdGFza05hbWUudmFsdWUgPSBjdXJyZW50VGFzay50aXRsZTtcbiAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gY3VycmVudFRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTmFtZSA9IGN1cnJlbnRUYXNrLnByaW9yaXR5O1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBjdXJyZW50VGFzay5wcm9qZWN0O1xuXG4gICAgICAgICAgICBpZihjdXJyZW50VGFzay5pc0RvbmUpIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgY29udHJvbFNpZGViYXIgZnJvbSBcIi4vY29udHJvbC1zaWRlYmFyXCI7XG5pbXBvcnQgeyBjb250cm9sTWVudXMgfSBmcm9tIFwiLi9jb250cm9sLXRvZG8tcG9wdXBcIlxuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5pbXBvcnQgeyBncm91cGVkVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5pbXBvcnQgeyBhbGxJdGVtcyB9IGZyb20gXCIuL3RvZG9zXCI7XG5pbXBvcnQgeyBjb250cm9sUHJvamVjdHMgfSBmcm9tIFwiLi9jb250cm9sLWRldGFpbHMtdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgbGV0IGFjdGl2ZUlEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpWzBdLmlkO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcHJvamVjdD51bCcpLmlubmVySFRNTCA9ICc8bGk+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+aW5ib3g8L3NwYW4+PGRpdj5JbmJveDwvZGl2PjwvYnV0dG9uPjwvbGk+JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLXByb2plY3Q+dWwnKS5pbm5lckhUTUwgPSAnPGxpPjxidXR0b24gdHlwZT1cImJ1dHRvblwiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmluYm94PC9zcGFuPjxkaXY+SW5ib3g8L2Rpdj48L2J1dHRvbj48L2xpPic7XG5cbiAgICBsZXQgaSA9IDQ7XG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxpU2lkZWJhci5jbGFzc05hbWUgPSBwcm9qZWN0LmNvbG9yO1xuICAgICAgICBsaVNpZGViYXIuaWQgPSBpKys7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gcHJvamVjdC5pY29uO1xuICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBsaVNpZGViYXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGxpU2lkZWJhci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKGxpU2lkZWJhcik7XG5cbiAgICAgICAgY29uc3QgcG9wdXAxID0gZ2VuZXJhdGVQb3B1cChwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcG9wdXAyID0gZ2VuZXJhdGVQb3B1cChwcm9qZWN0KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXByb2plY3Q+dWwnKS5hcHBlbmRDaGlsZChwb3B1cDEpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLXByb2plY3Q+dWwnKS5hcHBlbmRDaGlsZChwb3B1cDIpO1xuICAgIH0pXG4gICAgY29udHJvbFNpZGViYXIoKTtcbiAgICBjb250cm9sTWVudXMoKTtcbiAgICBjb250cm9sUHJvamVjdHMoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFjdGl2ZUlEKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQb3B1cChwcm9qZWN0KXtcbiAgICBjb25zdCBsaVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzcGFuUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZGl2UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3QuY29sb3I7XG4gICAgc3BhblBvcHVwLmlubmVySFRNTCA9IHByb2plY3QuaWNvbjtcbiAgICBzcGFuUG9wdXAuY2xhc3NOYW1lID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuUG9wdXApO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChkaXZQb3B1cCk7XG4gICAgbGlQb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGxpUG9wdXA7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpIC0gNDtcblxuICAgIGFsbFByb2plY3RzLnNwbGljZShpZCwxKTtcbiAgICBcbiAgICBncm91cGVkVGFza3NbaWQrNF0uZm9yRWFjaCgoYSkgPT4gYWxsSXRlbXMuc3BsaWNlKGFsbEl0ZW1zLmZpbmRJbmRleChiID0+IGEgPT0gYiksMSkpO1xuXG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgZGlzcGxheVRhc2tzKDApO1xufSkiLCJpbXBvcnQgeyBhbGxJdGVtcywgZXhhbXBsZXMgfSBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZGlzcGxheURldGFpbHMgfSBmcm9tIFwiLi9kaXNwbGF5LWRldGFpbHNcIjtcblxuZXhwb3J0IGNvbnN0IGdyb3VwZWRUYXNrcyA9IFtdO1xubGV0IGN1cnJlbnRJRDtcbmxldCBpc0hpZGRlbiA9IGZhbHNlO1xubGV0IGlzRmlyc3RTZXNzaW9uID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVGFza3MoKSB7XG4gICAgaWYgKGFsbEl0ZW1zLmxlbmd0aCA9PSAwICYmIGlzRmlyc3RTZXNzaW9uKSB7XG4gICAgICAgIGV4YW1wbGVzKCk7XG4gICAgfVxuICAgIGlzRmlyc3RTZXNzaW9uID0gZmFsc2U7XG4gICAgbGV0IGluYm94ID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IFwiSW5ib3hcIik7XG4gICAgbGV0IHRvZGF5ID0gW107XG4gICAgbGV0IHRoaXNXZWVrID0gW107XG4gICAgZ3JvdXBlZFRhc2tzWzBdID0gYWxsSXRlbXM7XG4gICAgZ3JvdXBlZFRhc2tzWzFdID0gaW5ib3g7XG4gICAgZ3JvdXBlZFRhc2tzWzJdID0gdG9kYXk7XG4gICAgZ3JvdXBlZFRhc2tzWzNdID0gdGhpc1dlZWs7XG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPD0gYWxsUHJvamVjdHMubGVuZ3RoICsgMzsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IGFsbFByb2plY3RzW2kgLSA0XS5uYW1lKTtcbiAgICAgICAgZ3JvdXBlZFRhc2tzW2ldID0gdGVtcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhpZD1jdXJyZW50SUQpIHtcbiAgICBncm91cFRhc2tzKCk7XG4gICAgY3VycmVudElEID0gaWQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3QgaWNvbiA9IHByb2plY3QuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdC5sYXN0Q2hpbGQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NOYW1lID0gcHJvamVjdC5jbGFzc05hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBzcGFuJykuaW5uZXJIVE1MID0gaWNvbi5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJykuaW5uZXJIVE1MID0gbmFtZS5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGxldCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xuXG4gICAgdG9kby5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbXBsZXRlZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZ3JvdXBlZFRhc2tzW2lkXS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGV0IHN0YXR1cyA9ICh0YXNrLmlzRG9uZSkgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgbGV0IGJ0biA9IGA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+YDtcblxuICAgICAgICBpZihpZCA9PSAwICYmIHRhc2sucHJvamVjdCAhPSBcIkluYm94XCIpe1xuICAgICAgICAgICAgbGV0IGljb24gPSBhbGxQcm9qZWN0cy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09IHRhc2sucHJvamVjdCk7XG4gICAgICAgICAgICBidG4gPSBgPGRpdiBjbGFzcz1cInRhc2tzLXByb2plY3QgJHtpY29uLmNvbG9yfVwiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPiR7aWNvbi5pY29ufTwvc3Bhbj48ZGl2PiR7dGFzay5wcm9qZWN0fTwvZGl2PjwvZGl2PmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtID0gYFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3N0YXR1c30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7YnRufVxuICAgICAgICBgO1xuICAgICAgICBsaS5jbGFzc05hbWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgICBsaS5pZCA9IGAke2lkfSR7aSsrfWA7XG5cbiAgICAgICAgaWYgKCF0YXNrLmlzRG9uZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZighaXNIaWRkZW4pe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrcyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWQgPSBpbnB1dC5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKDAsMSk7XG4gICAgICAgICAgICBsZXQgaSA9IGlucHV0LnBhcmVudEVsZW1lbnQuaWQuc2xpY2UoLTEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBncm91cGVkVGFza3NbaWRdW2ldLmNoYW5nZVN0YXR1cygpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGFzay1uYW1lIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrZWQgPSBncm91cGVkVGFza3NbaWRdW2ldLmlzRG9uZTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGRpc3BsYXlEZXRhaWxzKCk7XG59XG5cblxuZnVuY3Rpb24gY29udHJvbENvbXBsZXRlZCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24gYnV0dG9uIHNwYW4nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtb3B0aW9ucycpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgYnV0dG9uJyk7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZC10b2dnbGUnKTtcblxuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29tcGxldGVkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdleHBhbmRfbW9yZScpID8gJ2V4cGFuZF9sZXNzJyA6ICdleHBhbmRfbW9yZSc7XG4gICAgfSlcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcblxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICBpc0hpZGRlbiA9ICFpc0hpZGRlbjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIHRvZ2dsZS5pbm5lckhUTUwgPSAodG9nZ2xlLmlubmVySFRNTC5pbmNsdWRlcyhcIkhpZGVcIikpID8gXCJTaG93IGNvbXBsZXRlZFwiIDogXCJIaWRlIGNvbXBsZXRlZFwiO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPSBtZW51QnV0dG9uICYmIGUudGFyZ2V0ICE9IG1lbnVCdXR0b24uZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKXtcbiAgICBpZihjdXJyZW50SUQ8NCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtcHJvamVjdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtcHJvamVjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxufVxuXG5jb250cm9sQ29tcGxldGVkKCk7XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnXG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cyc7XG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheS10YXNrcyc7XG5pbXBvcnQgeyBncm91cGVkVGFza3MgfSBmcm9tICcuL2Rpc3BsYXktdGFza3MnO1xuXG5jb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IGNoYW5nZUNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5nZS1jb2xvcicpO1xuY29uc3QgY2hhbmdlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmdlLXByb2plY3QtbmFtZScpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yczInKTtcbmNvbnN0IGFsbENvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcnMyIGJ1dHRvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0UHJvamVjdCgpe1xuICAgIGFsbENvbG9ycy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VDb2xvci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjaGFuZ2VDb2xvci5jbGFzc0xpc3QuYWRkKGJ0bi5jbGFzc05hbWUpO1xuICAgICAgICAgICAgY29sb3JzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjaGFuZ2VDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29sb3JzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gY2hhbmdlQ29sb3IgJiYgZS50YXJnZXQgIT09IGNoYW5nZUNvbG9yLmZpcnN0Q2hpbGQgJiYgZS50YXJnZXQgIT09IGNoYW5nZVByb2plY3ROYW1lICYmIGUudGFyZ2V0ICE9PSBlZGl0UHJvamVjdEJ0biAmJiAhY29sb3JzLmNvbnRhaW5zKGUudGFyZ2V0KSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IFxuICAgIH0pXG5cbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBsZXQgY29sb3IgPSBoZWFkZXIuY2xhc3NMaXN0WzBdO1xuICAgICAgICBsZXQgaWQgPSBoZWFkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuXG4gICAgICAgIGNoYW5nZUNvbG9yLmNsYXNzTmFtZSA9IGNvbG9yO1xuICAgICAgICBjaGFuZ2VQcm9qZWN0TmFtZS52YWx1ZSA9IGFsbFByb2plY3RzW2lkLTRdLm5hbWU7XG4gICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KT0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgaWQgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tpZC00XS5uYW1lID0gY2hhbmdlUHJvamVjdE5hbWUudmFsdWU7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tpZC00XS5jb2xvciA9IGNoYW5nZUNvbG9yLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgZ3JvdXBlZFRhc2tzW2lkXS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2sucHJvamVjdCA9IGFsbFByb2plY3RzW2lkLTRdLm5hbWU7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhpZCk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59IiwiaW1wb3J0IHtyZXNldFByb2plY3RGb3JtfSBmcm9tICcuL2NvbnRyb2wtcHJvamVjdC1wb3B1cCdcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzJ1xuXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsY29sb3IsaWNvbil7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IGV4YW1wbGUxID0gbmV3IFByb2plY3QoXCJNaWtlJ3MgYi1kYXlcIiwgXCJjb2xvci0yXCIsIFwiZmliZXJfbWFudWFsX3JlY29yZFwiKTtcbmNvbnN0IGV4YW1wbGUyID0gbmV3IFByb2plY3QoXCJQZXJzb25hbCB3ZWJzaXRlXCIsIFwiY29sb3ItMVwiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5jb25zdCBleGFtcGxlMyA9IG5ldyBQcm9qZWN0KFwiS2l0Y2hlbiBtYWtlb3ZlclwiLCBcImNvbG9yLTNcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuY29uc3QgZXhhbXBsZTQgPSBuZXcgUHJvamVjdChcIlNob3BwaW5nIGxpc3RcIiwgXCJjb2xvci01XCIsIFwiZmliZXJfbWFudWFsX3JlY29yZFwiKTtcblxuYWxsUHJvamVjdHMucHVzaChleGFtcGxlMSk7XG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGUyKTtcbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTMpO1xuYWxsUHJvamVjdHMucHVzaChleGFtcGxlNCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWNvbG9yJykuY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3I+c3BhbicpLmlubmVySFRNTDtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUsIGNvbG9yLCBpY29uKTtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVzZXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHJlc2V0Rm9ybSB9IGZyb20gXCIuL2NvbnRyb2wtdG9kby1wb3B1cFwiO1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tICcuL2Rpc3BsYXktdGFza3MnXG5cbmNsYXNzIFRvRG9JdGVte1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkscHJvamVjdCxpc0RvbmUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjaGFuZ2VTdGF0dXMoKXtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxsSXRlbXMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4YW1wbGVzKCl7XG4gICAgY29uc3QgZXhhbXBsZTEgPSBuZXcgVG9Eb0l0ZW0oXCJCYWtlIGEgY2FrZVwiLCBcIlwiLFwiXCIsXCJcIixcIkluYm94XCIsZmFsc2UpO1xuICAgIGNvbnN0IGV4YW1wbGUyID0gbmV3IFRvRG9JdGVtKFwiU2VuZCBpbnZpdGF0aW9uc1wiLCBcIlwiLFwiXCIsXCJcIixcIkluYm94XCIsdHJ1ZSk7XG5cbiAgICBhbGxJdGVtcy5wdXNoKGV4YW1wbGUxKTtcbiAgICBhbGxJdGVtcy5wdXNoKGV4YW1wbGUyKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb0RvSXRlbSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBnZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLmNsYXNzTmFtZTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JykuaW5uZXJIVE1MO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9Eb0l0ZW0odGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza1Byb2plY3QsIGZhbHNlKTtcbiAgICAgICAgYWxsSXRlbXMucHVzaChuZXdUYXNrKTtcblxuICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGV0aW1lIGlucHV0W3R5cGU9XCJkYXRlXCJdJykudmFsdWU7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRldGltZSBpbnB1dFt0eXBlPVwidGltZVwiXScpLnZhbHVlO1xuXG4gICAgcmV0dXJuIGAke2RhdGV9ICR7dGltZX1gO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFkZFRvRG9JdGVtIGZyb20gXCIuL3RvZG9zXCJcbmltcG9ydCBjb250cm9sUHJvamVjdFBvcHVwIGZyb20gXCIuL2NvbnRyb2wtcHJvamVjdC1wb3B1cFwiXG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c1wiXG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cydcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSAnLi9kaXNwbGF5LXRhc2tzJ1xuaW1wb3J0IGVkaXRQcm9qZWN0IGZyb20gXCIuL2VkaXQtcHJvamVjdFwiXG5pbXBvcnQgeyBjb250cm9sRGV0YWlscyB9IGZyb20gXCIuL2NvbnRyb2wtZGV0YWlscy12aWV3XCJcblxuYWRkVG9Eb0l0ZW0oKTtcbmNvbnRyb2xQcm9qZWN0UG9wdXAoKTtcbmFkZFByb2plY3QoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuZGlzcGxheVRhc2tzKDApO1xuZWRpdFByb2plY3QoKTtcbmNvbnRyb2xEZXRhaWxzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9