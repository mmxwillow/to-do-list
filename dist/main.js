/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



const taskName = document.querySelector('.current-task-name div');
const dueDate = document.querySelector('#update-due-date-title');
const priority = document.querySelector('#update-priority');
const description = document.querySelector('#current-description');
const projectIcon = document.querySelector('#update-projects span');
const projectTitle = document.querySelector('#tv-current-project');

function displayDetails(){
    const visibleTasks = document.querySelectorAll('.tasks li');

    visibleTasks.forEach((task) => {
        task.addEventListener('click', () => {
            let id = task.id.slice(0,1);
            let i = task.id.slice(-1);

            let currentTask = _display_tasks__WEBPACK_IMPORTED_MODULE_0__.groupedTasks[id][i];
            let currentProject = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.find(project => project.name == currentTask.project);
            if(!currentProject){
                projectIcon.innerHTML = 'inbox';
                projectIcon.parentElement.className = "";
            }

            document.querySelector('.details').classList.remove('hidden');
            document.querySelector('.no-task').classList.add('hidden');

            taskName.innerHTML = currentTask.title;
            dueDate.innerHTML = currentTask.dueDate;
            priority.className = currentTask.priority;
            description.value = currentTask.description;
            projectTitle.innerHTML = currentTask.project;
            projectIcon.innerHTML = currentProject.icon;
            projectIcon.parentElement.className = currentProject.color;
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







function displayProjects() {
    let activeID = document.querySelectorAll('.active')[0].id;
    
    document.querySelector('.projects').innerHTML = '';
    document.querySelector('.change-project>ul').innerHTML = '<li><button type="button"><span class="material-symbols-outlined">inbox</span><div>Inbox</div></button></li>';
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
    ;(0,_control_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_control_todo_popup__WEBPACK_IMPORTED_MODULE_1__.controlMenus)();

    document.getElementById(activeID).classList.add('active');
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
                <button class="remove">
                    <span class="material-symbols-outlined">delete</span>
                </button>
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

    document.querySelectorAll('input[type="checkbox"').forEach((input) => {
        input.addEventListener('change', () => {
            let id = input.parentElement.id.slice(0,1);
            let i = input.parentElement.id.slice(-1);
            
            groupedTasks[id][i].changeStatus();
            displayTasks();
        })
    })

    document.querySelectorAll('.remove').forEach((button) => {
        button.addEventListener('click', () => {
            let id = button.parentElement.id.slice(0,1);
            let i = button.parentElement.id.slice(-1);

            _todos__WEBPACK_IMPORTED_MODULE_0__.allItems.splice(_todos__WEBPACK_IMPORTED_MODULE_0__.allItems.findIndex(item => item === groupedTasks[id][i]),1);
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
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;

    return date+time;
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







(0,_todos__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_control_project_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_display_projects__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_display_tasks__WEBPACK_IMPORTED_MODULE_4__["default"])(0);
(0,_edit_project__WEBPACK_IMPORTED_MODULE_5__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pDMkM7O0FBRTVCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBWTtBQUM1QixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEYrQztBQUNOOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsd0RBQVk7QUFDMUMsaUNBQWlDLHVEQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDK0M7QUFDSTtBQUNWO0FBQ0U7QUFDSTtBQUNaOztBQUVwQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwwREFBbUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDZEQUFjO0FBQ2xCLElBQUksaUVBQVk7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLHlEQUFrQjtBQUN0QjtBQUNBLElBQUksd0RBQVksc0JBQXNCLG1EQUFlLENBQUMsc0RBQWtCOztBQUV4RTtBQUNBLElBQUksMERBQVk7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlENEM7QUFDSjtBQUNVOztBQUU1QztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFFBQVEsbURBQWU7QUFDdkIsUUFBUSxnREFBUTtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFlO0FBQy9CO0FBQ0E7QUFDQSxzQkFBc0IsNENBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQUsseURBQWtCLE1BQU07QUFDakQsbUJBQW1CLG1EQUFlLHlCQUF5QixrREFBVztBQUN0RTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHVEQUFnQjtBQUN2QywrQ0FBK0MsV0FBVyw0Q0FBNEMsVUFBVSxjQUFjLGFBQWE7QUFDM0k7O0FBRUE7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRCx5Q0FBeUMsV0FBVztBQUNwRCxvQ0FBb0MsYUFBYTtBQUNqRCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEdBQUcsRUFBRSxJQUFJOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1EQUFlLENBQUMsc0RBQWtCO0FBQzlDO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLElBQUksZ0VBQWM7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKd0M7QUFDUztBQUNOO0FBQ0k7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGtEQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0RBQVc7QUFDdkIsWUFBWSxrREFBVzs7QUFFdkIsWUFBWSx3REFBWTtBQUN4QiwrQkFBK0Isa0RBQVc7QUFDMUMsYUFBYTs7QUFFYixZQUFZLDhEQUFlO0FBQzNCLFlBQVksMERBQVk7O0FBRXhCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlEd0Q7QUFDUjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdFQUFnQjtBQUN4QixRQUFRLDZEQUFlO0FBQ3ZCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNpRDtBQUNQOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRUE7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEsOERBQVM7QUFDakIsUUFBUSwwREFBWTtBQUNwQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDd0I7QUFDdEI7QUFDYTtBQUNOO0FBQ0Y7O0FBRXhDLGtEQUFXO0FBQ1gsa0VBQW1CO0FBQ25CLHFEQUFVO0FBQ1YsNkRBQWU7QUFDZiwwREFBWTtBQUNaLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtcHJvamVjdC1wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtdG9kby1wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktZGV0YWlscy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpO1xuY29uc3QgY3VycmVudENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3InKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnMnKTtcbmNvbnN0IGFsbENvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcnMgYnV0dG9uJyk7XG5jb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvdmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xQcm9qZWN0UG9wdXAoKSB7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdEZvcm0pO1xuICAgIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0Rm9ybSk7XG5cbiAgICBhbGxDb2xvcnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjdXJyZW50Q29sb3IuY2xhc3NMaXN0LmFkZChidG4uY2xhc3NOYW1lKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGN1cnJlbnRDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29sb3JzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gY3VycmVudENvbG9yICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50Q29sb3IuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBjb2xvcnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdFBvcHVwKCkge1xuICAgIGNvdmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGNvbG9ycy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbmFtZScpLmZvY3VzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS5zZWxlY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJvamVjdEZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICBjdXJyZW50Q29sb3IucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIGN1cnJlbnRDb2xvci5jbGFzc0xpc3QuYWRkKCdjb2xvci0xJyk7XG4gICAgdG9nZ2xlUHJvamVjdFBvcHVwKCk7XG59IiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xTaWRlYmFyKCkge1xuICAgIGNvbnN0IGNvbnRyb2xJY29ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCBsaScpO1xuXG4gICAgICAgIHByb2plY3RzQWxsLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJBY3RpdmVDbGFzcygpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xlYXJBY3RpdmVDbGFzcyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0FsbC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgdmlld1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcblxuICAgICAgICB2aWV3UHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRvZ2dsZUljb24oKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0b2dnbGVJY29uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IHZpZXdQcm9qZWN0cy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gKGljb24uaW5uZXJIVE1MID09ICdleHBhbmRfbW9yZScpID8gJ2V4cGFuZF9sZXNzJyA6ICdleHBhbmRfbW9yZSc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnRyb2xJY29ucygpO1xuICAgIGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSgpO1xufSIsImNvbnN0IGFkZGl0aW9uYWxEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGl0aW9uYWwtZGF0YScpO1xuY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXRpbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbmNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcmlvcml0eScpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbmNvbnN0IGNoYW5nZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXByb2plY3QnKTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdCcpO1xuXG5mdW5jdGlvbiBjb250cm9sVG9Eb1BvcHVwKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcm9qZWN0IGJ1dHRvbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBkYXRldGltZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihkYXRldGltZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hhbmdlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGNvbnRyb2xNZW51cygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByaW9yaXR5QnRuICYmIGUudGFyZ2V0ICE9PSBwcmlvcml0eUJ0bi5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByb2plY3RzQnRuICYmIGUudGFyZ2V0ICE9PSBwcm9qZWN0c0J0bi5maXJzdENoaWxkICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50UHJvamVjdCl7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1wb3B1cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbE1lbnVzKCl7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByb2plY3QgYnV0dG9uJylcblxuICAgIGNoYW5nZVByaW9yaXR5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKGJ0bi5pZCk7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9IGJ0bi5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTCA9IGJ0bi5sYXN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcHJvamVjdHNCdG4uY2xhc3NOYW1lID0gYnRuLmNsYXNzTmFtZTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXBvcHVwJykucmVzZXQoKTtcblxuICAgIHByaW9yaXR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG5cbiAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9ICdpbmJveCc7XG4gICAgY3VycmVudFByb2plY3QuaW5uZXJIVE1MID0gJ0luYm94JztcbiAgICBwcm9qZWN0c0J0bi5jbGFzc05hbWUgPSAnJztcblxuICAgIHRvZ2dsZUl0ZW1Qb3B1cCgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVJdGVtUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgYWRkaXRpb25hbERhdGEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkYXRldGltZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykuZm9jdXMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykuc2VsZWN0KCk7XG59XG5cbmNvbnRyb2xUb0RvUG9wdXAoKTsiLCJpbXBvcnQgeyBncm91cGVkVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGFzay1uYW1lIGRpdicpO1xuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtZHVlLWRhdGUtdGl0bGUnKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS1wcmlvcml0eScpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1kZXNjcmlwdGlvbicpO1xuY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLXByb2plY3RzIHNwYW4nKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0di1jdXJyZW50LXByb2plY3QnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxzKCl7XG4gICAgY29uc3QgdmlzaWJsZVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzIGxpJyk7XG5cbiAgICB2aXNpYmxlVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkID0gdGFzay5pZC5zbGljZSgwLDEpO1xuICAgICAgICAgICAgbGV0IGkgPSB0YXNrLmlkLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gZ3JvdXBlZFRhc2tzW2lkXVtpXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gY3VycmVudFRhc2sucHJvamVjdCk7XG4gICAgICAgICAgICBpZighY3VycmVudFByb2plY3Qpe1xuICAgICAgICAgICAgICAgIHByb2plY3RJY29uLmlubmVySFRNTCA9ICdpbmJveCc7XG4gICAgICAgICAgICAgICAgcHJvamVjdEljb24ucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXRhc2snKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgdGFza05hbWUuaW5uZXJIVE1MID0gY3VycmVudFRhc2sudGl0bGU7XG4gICAgICAgICAgICBkdWVEYXRlLmlubmVySFRNTCA9IGN1cnJlbnRUYXNrLmR1ZURhdGU7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc05hbWUgPSBjdXJyZW50VGFzay5wcmlvcml0eTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFRhc2suZGVzY3JpcHRpb247XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gY3VycmVudFRhc2sucHJvamVjdDtcbiAgICAgICAgICAgIHByb2plY3RJY29uLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0Lmljb247XG4gICAgICAgICAgICBwcm9qZWN0SWNvbi5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IGN1cnJlbnRQcm9qZWN0LmNvbG9yO1xuICAgICAgICB9KVxuICAgIH0pXG59IiwiaW1wb3J0IGNvbnRyb2xTaWRlYmFyIGZyb20gXCIuL2NvbnRyb2wtc2lkZWJhclwiO1xuaW1wb3J0IHsgY29udHJvbE1lbnVzIH0gZnJvbSBcIi4vY29udHJvbC10b2RvLXBvcHVwXCJcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheS10YXNrc1wiO1xuaW1wb3J0IHsgZ3JvdXBlZFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheS10YXNrc1wiO1xuaW1wb3J0IHsgYWxsSXRlbXMgfSBmcm9tIFwiLi90b2Rvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgbGV0IGFjdGl2ZUlEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpWzBdLmlkO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcHJvamVjdD51bCcpLmlubmVySFRNTCA9ICc8bGk+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+aW5ib3g8L3NwYW4+PGRpdj5JbmJveDwvZGl2PjwvYnV0dG9uPjwvbGk+JztcbiAgICBsZXQgaSA9IDQ7XG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxpU2lkZWJhci5jbGFzc05hbWUgPSBwcm9qZWN0LmNvbG9yO1xuICAgICAgICBsaVNpZGViYXIuaWQgPSBpKys7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gcHJvamVjdC5pY29uO1xuICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBsaVNpZGViYXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGxpU2lkZWJhci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKGxpU2lkZWJhcik7XG5cbiAgICAgICAgY29uc3QgbGlQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzcGFuUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdlBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3QuY29sb3I7XG4gICAgICAgIHNwYW5Qb3B1cC5pbm5lckhUTUwgPSBwcm9qZWN0Lmljb247XG4gICAgICAgIHNwYW5Qb3B1cC5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCc7XG4gICAgICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3BhblBvcHVwKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGRpdlBvcHVwKTtcbiAgICAgICAgbGlQb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcHJvamVjdD51bCcpLmFwcGVuZENoaWxkKGxpUG9wdXApO1xuICAgIH0pXG4gICAgY29udHJvbFNpZGViYXIoKTtcbiAgICBjb250cm9sTWVudXMoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFjdGl2ZUlEKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgLSA0O1xuXG4gICAgYWxsUHJvamVjdHMuc3BsaWNlKGlkLDEpO1xuICAgIFxuICAgIGdyb3VwZWRUYXNrc1tpZCs0XS5mb3JFYWNoKChhKSA9PiBhbGxJdGVtcy5zcGxpY2UoYWxsSXRlbXMuZmluZEluZGV4KGIgPT4gYSA9PSBiKSwxKSk7XG5cbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5VGFza3MoMCk7XG59KSIsImltcG9ydCB7IGFsbEl0ZW1zLCBleGFtcGxlcyB9IGZyb20gXCIuL3RvZG9zXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBkaXNwbGF5RGV0YWlscyB9IGZyb20gXCIuL2Rpc3BsYXktZGV0YWlsc1wiO1xuXG5leHBvcnQgY29uc3QgZ3JvdXBlZFRhc2tzID0gW107XG5sZXQgY3VycmVudElEO1xubGV0IGlzSGlkZGVuID0gZmFsc2U7XG5sZXQgaXNGaXJzdFNlc3Npb24gPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBUYXNrcygpIHtcbiAgICBpZiAoYWxsSXRlbXMubGVuZ3RoID09IDAgJiYgaXNGaXJzdFNlc3Npb24pIHtcbiAgICAgICAgZXhhbXBsZXMoKTtcbiAgICB9XG4gICAgaXNGaXJzdFNlc3Npb24gPSBmYWxzZTtcbiAgICBsZXQgaW5ib3ggPSBhbGxJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByb2plY3QgPT0gXCJJbmJveFwiKTtcbiAgICBsZXQgdG9kYXkgPSBbXTtcbiAgICBsZXQgdGhpc1dlZWsgPSBbXTtcbiAgICBncm91cGVkVGFza3NbMF0gPSBhbGxJdGVtcztcbiAgICBncm91cGVkVGFza3NbMV0gPSBpbmJveDtcbiAgICBncm91cGVkVGFza3NbMl0gPSB0b2RheTtcbiAgICBncm91cGVkVGFza3NbM10gPSB0aGlzV2VlaztcbiAgICBmb3IgKGxldCBpID0gNDsgaSA8PSBhbGxQcm9qZWN0cy5sZW5ndGggKyAzOyBpKyspIHtcbiAgICAgICAgbGV0IHRlbXAgPSBhbGxJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByb2plY3QgPT0gYWxsUHJvamVjdHNbaSAtIDRdLm5hbWUpO1xuICAgICAgICBncm91cGVkVGFza3NbaV0gPSB0ZW1wO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRhc2tzKGlkPWN1cnJlbnRJRCkge1xuICAgIGdyb3VwVGFza3MoKTtcbiAgICBjdXJyZW50SUQgPSBpZDtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBjb25zdCBpY29uID0gcHJvamVjdC5maXJzdENoaWxkO1xuICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0Lmxhc3RDaGlsZDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGFzc05hbWUgPSBwcm9qZWN0LmNsYXNzTmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIHNwYW4nKS5pbm5lckhUTUwgPSBpY29uLmlubmVySFRNTDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKS5pbm5lckhUTUwgPSBuYW1lLmlubmVySFRNTDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuICAgIGxldCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XG5cbiAgICB0b2RvLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29tcGxldGVkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBncm91cGVkVGFza3NbaWRdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsZXQgc3RhdHVzID0gKHRhc2suaXNEb25lKSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICBsZXQgYnRuID0gYDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5gO1xuXG4gICAgICAgIGlmKGlkID09IDAgJiYgdGFzay5wcm9qZWN0ICE9IFwiSW5ib3hcIil7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGFsbFByb2plY3RzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT0gdGFzay5wcm9qZWN0KTtcbiAgICAgICAgICAgIGJ0biA9IGA8ZGl2IGNsYXNzPVwidGFza3MtcHJvamVjdCAke2ljb24uY29sb3J9XCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+JHtpY29uLmljb259PC9zcGFuPjxkaXY+JHt0YXNrLnByb2plY3R9PC9kaXY+PC9kaXY+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBgXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7c3RhdHVzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHtidG59XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgICAgIGxpLmNsYXNzTmFtZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIGxpLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICAgIGxpLmlkID0gYCR7aWR9JHtpKyt9YDtcblxuICAgICAgICBpZiAoIXRhc2suaXNEb25lKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKCFpc0hpZGRlbil7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCInKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWQgPSBpbnB1dC5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKDAsMSk7XG4gICAgICAgICAgICBsZXQgaSA9IGlucHV0LnBhcmVudEVsZW1lbnQuaWQuc2xpY2UoLTEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBncm91cGVkVGFza3NbaWRdW2ldLmNoYW5nZVN0YXR1cygpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkID0gYnV0dG9uLnBhcmVudEVsZW1lbnQuaWQuc2xpY2UoMCwxKTtcbiAgICAgICAgICAgIGxldCBpID0gYnV0dG9uLnBhcmVudEVsZW1lbnQuaWQuc2xpY2UoLTEpO1xuXG4gICAgICAgICAgICBhbGxJdGVtcy5zcGxpY2UoYWxsSXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZ3JvdXBlZFRhc2tzW2lkXVtpXSksMSk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgZGlzcGxheURldGFpbHMoKTtcbn1cblxuXG5mdW5jdGlvbiBjb250cm9sQ29tcGxldGVkKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbiBidXR0b24gc3BhbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1vcHRpb25zJyk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKTtcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkLXRvZ2dsZScpO1xuXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb21wbGV0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ2V4cGFuZF9tb3JlJykgPyAnZXhwYW5kX2xlc3MnIDogJ2V4cGFuZF9tb3JlJztcbiAgICB9KVxuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGlzSGlkZGVuID0gIWlzSGlkZGVuO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgdG9nZ2xlLmlubmVySFRNTCA9ICh0b2dnbGUuaW5uZXJIVE1MLmluY2x1ZGVzKFwiSGlkZVwiKSkgPyBcIlNob3cgY29tcGxldGVkXCIgOiBcIkhpZGUgY29tcGxldGVkXCI7XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9IG1lbnVCdXR0b24gJiYgZS50YXJnZXQgIT0gbWVudUJ1dHRvbi5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBoaWRlQnV0dG9ucygpe1xuICAgIGlmKGN1cnJlbnRJRDw0KXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1wcm9qZWN0JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1wcm9qZWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG59XG5cbmNvbnRyb2xDb21wbGV0ZWQoKTtcbiIsImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cydcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzJztcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSAnLi9kaXNwbGF5LXRhc2tzJztcbmltcG9ydCB7IGdyb3VwZWRUYXNrcyB9IGZyb20gJy4vZGlzcGxheS10YXNrcyc7XG5cbmNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgY2hhbmdlQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmdlLWNvbG9yJyk7XG5jb25zdCBjaGFuZ2VQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuZ2UtcHJvamVjdC1uYW1lJyk7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JzMicpO1xuY29uc3QgYWxsQ29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yczIgYnV0dG9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0KCl7XG4gICAgYWxsQ29sb3JzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUNvbG9yLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGNoYW5nZUNvbG9yLmNsYXNzTGlzdC5hZGQoYnRuLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICBjb2xvcnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNoYW5nZUNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb2xvcnMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBjaGFuZ2VDb2xvciAmJiBlLnRhcmdldCAhPT0gY2hhbmdlQ29sb3IuZmlyc3RDaGlsZCAmJiBlLnRhcmdldCAhPT0gY2hhbmdlUHJvamVjdE5hbWUgJiYgZS50YXJnZXQgIT09IGVkaXRQcm9qZWN0QnRuICYmICFjb2xvcnMuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gXG4gICAgfSlcblxuICAgIGVkaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGxldCBjb2xvciA9IGhlYWRlci5jbGFzc0xpc3RbMF07XG4gICAgICAgIGxldCBpZCA9IGhlYWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG5cbiAgICAgICAgY2hhbmdlQ29sb3IuY2xhc3NOYW1lID0gY29sb3I7XG4gICAgICAgIGNoYW5nZVByb2plY3ROYW1lLnZhbHVlID0gYWxsUHJvamVjdHNbaWQtNF0ubmFtZTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBpZCA9IGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzW2lkLTRdLm5hbWUgPSBjaGFuZ2VQcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzW2lkLTRdLmNvbG9yID0gY2hhbmdlQ29sb3IuY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBncm91cGVkVGFza3NbaWRdLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgdGFzay5wcm9qZWN0ID0gYWxsUHJvamVjdHNbaWQtNF0ubmFtZTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKGlkKTtcblxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn0iLCJpbXBvcnQge3Jlc2V0UHJvamVjdEZvcm19IGZyb20gJy4vY29udHJvbC1wcm9qZWN0LXBvcHVwJ1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnXG5cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSxjb2xvcixpY29uKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgZXhhbXBsZTEgPSBuZXcgUHJvamVjdChcIk1pa2UncyBiLWRheVwiLCBcImNvbG9yLTJcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuY29uc3QgZXhhbXBsZTIgPSBuZXcgUHJvamVjdChcIlBlcnNvbmFsIHdlYnNpdGVcIiwgXCJjb2xvci0xXCIsIFwiZmliZXJfbWFudWFsX3JlY29yZFwiKTtcbmNvbnN0IGV4YW1wbGUzID0gbmV3IFByb2plY3QoXCJLaXRjaGVuIG1ha2VvdmVyXCIsIFwiY29sb3ItM1wiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5jb25zdCBleGFtcGxlNCA9IG5ldyBQcm9qZWN0KFwiU2hvcHBpbmcgbGlzdFwiLCBcImNvbG9yLTVcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuXG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGUxKTtcbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTIpO1xuYWxsUHJvamVjdHMucHVzaChleGFtcGxlMyk7XG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGU0KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3InKS5jbGFzc05hbWU7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb2xvcj5zcGFuJykuaW5uZXJIVE1MO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgY29sb3IsIGljb24pO1xuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXNldFByb2plY3RGb3JtKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcmVzZXRGb3JtIH0gZnJvbSBcIi4vY29udHJvbC10b2RvLXBvcHVwXCI7XG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheS10YXNrcydcblxuY2xhc3MgVG9Eb0l0ZW17XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxwcm9qZWN0LGlzRG9uZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGNoYW5nZVN0YXR1cygpe1xuICAgICAgICB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbGxJdGVtcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhbXBsZXMoKXtcbiAgICBjb25zdCBleGFtcGxlMSA9IG5ldyBUb0RvSXRlbShcIkJha2UgYSBjYWtlXCIsIFwiXCIsXCJcIixcIlwiLFwiSW5ib3hcIixmYWxzZSk7XG4gICAgY29uc3QgZXhhbXBsZTIgPSBuZXcgVG9Eb0l0ZW0oXCJTZW5kIGludml0YXRpb25zXCIsIFwiXCIsXCJcIixcIlwiLFwiSW5ib3hcIix0cnVlKTtcblxuICAgIGFsbEl0ZW1zLnB1c2goZXhhbXBsZTEpO1xuICAgIGFsbEl0ZW1zLnB1c2goZXhhbXBsZTIpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvRG9JdGVtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGdldERhdGUoKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykuY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKS5pbm5lckhUTUw7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb0RvSXRlbSh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvamVjdCwgZmFsc2UpO1xuICAgICAgICBhbGxJdGVtcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGltZVwiXScpLnZhbHVlO1xuXG4gICAgcmV0dXJuIGRhdGUrdGltZTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhZGRUb0RvSXRlbSBmcm9tIFwiLi90b2Rvc1wiXG5pbXBvcnQgY29udHJvbFByb2plY3RQb3B1cCBmcm9tIFwiLi9jb250cm9sLXByb2plY3QtcG9wdXBcIlxuaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIlxuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheS10YXNrcydcbmltcG9ydCBlZGl0UHJvamVjdCBmcm9tIFwiLi9lZGl0LXByb2plY3RcIlxuXG5hZGRUb0RvSXRlbSgpO1xuY29udHJvbFByb2plY3RQb3B1cCgpO1xuYWRkUHJvamVjdCgpO1xuZGlzcGxheVByb2plY3RzKCk7XG5kaXNwbGF5VGFza3MoMCk7XG5lZGl0UHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==