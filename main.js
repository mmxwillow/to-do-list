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
        const taskDescription = document.querySelector('textarea').innerHTML;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtdG9kby1wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpO1xuY29uc3QgY3VycmVudENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3InKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnMnKTtcbmNvbnN0IGFsbENvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcnMgYnV0dG9uJyk7XG5jb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvdmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xQcm9qZWN0UG9wdXAoKSB7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdEZvcm0pO1xuICAgIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0Rm9ybSk7XG5cbiAgICBhbGxDb2xvcnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjdXJyZW50Q29sb3IuY2xhc3NMaXN0LmFkZChidG4uY2xhc3NOYW1lKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGN1cnJlbnRDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29sb3JzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gY3VycmVudENvbG9yICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50Q29sb3IuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBjb2xvcnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdFBvcHVwKCkge1xuICAgIGNvdmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGNvbG9ycy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbmFtZScpLmZvY3VzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS5zZWxlY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJvamVjdEZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICBjdXJyZW50Q29sb3IucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIGN1cnJlbnRDb2xvci5jbGFzc0xpc3QuYWRkKCdjb2xvci0xJyk7XG4gICAgdG9nZ2xlUHJvamVjdFBvcHVwKCk7XG59IiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xTaWRlYmFyKCkge1xuICAgIGNvbnN0IGNvbnRyb2xJY29ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCBsaScpO1xuXG4gICAgICAgIHByb2plY3RzQWxsLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJBY3RpdmVDbGFzcygpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xlYXJBY3RpdmVDbGFzcyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0FsbC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgdmlld1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcblxuICAgICAgICB2aWV3UHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRvZ2dsZUljb24oKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0b2dnbGVJY29uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IHZpZXdQcm9qZWN0cy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gKGljb24uaW5uZXJIVE1MID09ICdleHBhbmRfbW9yZScpID8gJ2V4cGFuZF9sZXNzJyA6ICdleHBhbmRfbW9yZSc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnRyb2xJY29ucygpO1xuICAgIGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSgpO1xufSIsImNvbnN0IGFkZGl0aW9uYWxEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGl0aW9uYWwtZGF0YScpO1xuY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXRpbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbmNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcmlvcml0eScpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbmNvbnN0IGNoYW5nZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXByb2plY3QnKTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdCcpO1xuXG5mdW5jdGlvbiBjb250cm9sVG9Eb1BvcHVwKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcm9qZWN0IGJ1dHRvbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBkYXRldGltZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihkYXRldGltZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hhbmdlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGNvbnRyb2xNZW51cygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByaW9yaXR5QnRuICYmIGUudGFyZ2V0ICE9PSBwcmlvcml0eUJ0bi5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByb2plY3RzQnRuICYmIGUudGFyZ2V0ICE9PSBwcm9qZWN0c0J0bi5maXJzdENoaWxkICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50UHJvamVjdCl7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1wb3B1cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbE1lbnVzKCl7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByb2plY3QgYnV0dG9uJylcblxuICAgIGNoYW5nZVByaW9yaXR5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKGJ0bi5pZCk7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9IGJ0bi5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTCA9IGJ0bi5sYXN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcHJvamVjdHNCdG4uY2xhc3NOYW1lID0gYnRuLmNsYXNzTmFtZTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXBvcHVwJykucmVzZXQoKTtcblxuICAgIHByaW9yaXR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG5cbiAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9ICdpbmJveCc7XG4gICAgY3VycmVudFByb2plY3QuaW5uZXJIVE1MID0gJ0luYm94JztcbiAgICBwcm9qZWN0c0J0bi5jbGFzc05hbWUgPSAnJztcblxuICAgIHRvZ2dsZUl0ZW1Qb3B1cCgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVJdGVtUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgYWRkaXRpb25hbERhdGEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkYXRldGltZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykuZm9jdXMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykuc2VsZWN0KCk7XG59XG5cbmNvbnRyb2xUb0RvUG9wdXAoKTsiLCJpbXBvcnQgY29udHJvbFNpZGViYXIgZnJvbSBcIi4vY29udHJvbC1zaWRlYmFyXCI7XG5pbXBvcnQgeyBjb250cm9sTWVudXMgfSBmcm9tIFwiLi9jb250cm9sLXRvZG8tcG9wdXBcIlxuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5pbXBvcnQgeyBncm91cGVkVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5pbXBvcnQgeyBhbGxJdGVtcyB9IGZyb20gXCIuL3RvZG9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBsZXQgYWN0aXZlSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJylbMF0uaWQ7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1wcm9qZWN0PnVsJykuaW5uZXJIVE1MID0gJzxsaT48YnV0dG9uIHR5cGU9XCJidXR0b25cIj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5pbmJveDwvc3Bhbj48ZGl2PkluYm94PC9kaXY+PC9idXR0b24+PC9saT4nO1xuICAgIGxldCBpID0gNDtcblxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgbGlTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGlTaWRlYmFyLmNsYXNzTmFtZSA9IHByb2plY3QuY29sb3I7XG4gICAgICAgIGxpU2lkZWJhci5pZCA9IGkrKztcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBwcm9qZWN0Lmljb247XG4gICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGxpU2lkZWJhci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgbGlTaWRlYmFyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQobGlTaWRlYmFyKTtcblxuICAgICAgICBjb25zdCBsaVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHNwYW5Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgZGl2UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gcHJvamVjdC5jb2xvcjtcbiAgICAgICAgc3BhblBvcHVwLmlubmVySFRNTCA9IHByb2plY3QuaWNvbjtcbiAgICAgICAgc3BhblBvcHVwLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcbiAgICAgICAgZGl2UG9wdXAuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuUG9wdXApO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoZGl2UG9wdXApO1xuICAgICAgICBsaVBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1wcm9qZWN0PnVsJykuYXBwZW5kQ2hpbGQobGlQb3B1cCk7XG4gICAgfSlcbiAgICBjb250cm9sU2lkZWJhcigpO1xuICAgIGNvbnRyb2xNZW51cygpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYWN0aXZlSUQpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSAtIDQ7XG5cbiAgICBhbGxQcm9qZWN0cy5zcGxpY2UoaWQsMSk7XG4gICAgXG4gICAgZ3JvdXBlZFRhc2tzW2lkKzRdLmZvckVhY2goKGEpID0+IGFsbEl0ZW1zLnNwbGljZShhbGxJdGVtcy5maW5kSW5kZXgoYiA9PiBhID09IGIpLDEpKTtcblxuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIGRpc3BsYXlUYXNrcygwKTtcbn0pIiwiaW1wb3J0IHsgYWxsSXRlbXMsIGV4YW1wbGVzIH0gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IGdyb3VwZWRUYXNrcyA9IFtdO1xubGV0IGN1cnJlbnRJRDtcbmxldCBpc0hpZGRlbiA9IGZhbHNlO1xubGV0IGlzRmlyc3RTZXNzaW9uID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVGFza3MoKSB7XG4gICAgaWYgKGFsbEl0ZW1zLmxlbmd0aCA9PSAwICYmIGlzRmlyc3RTZXNzaW9uKSB7XG4gICAgICAgIGV4YW1wbGVzKCk7XG4gICAgfVxuICAgIGlzRmlyc3RTZXNzaW9uID0gZmFsc2U7XG4gICAgbGV0IGluYm94ID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IFwiSW5ib3hcIik7XG4gICAgbGV0IHRvZGF5ID0gW107XG4gICAgbGV0IHRoaXNXZWVrID0gW107XG4gICAgZ3JvdXBlZFRhc2tzWzBdID0gYWxsSXRlbXM7XG4gICAgZ3JvdXBlZFRhc2tzWzFdID0gaW5ib3g7XG4gICAgZ3JvdXBlZFRhc2tzWzJdID0gdG9kYXk7XG4gICAgZ3JvdXBlZFRhc2tzWzNdID0gdGhpc1dlZWs7XG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPD0gYWxsUHJvamVjdHMubGVuZ3RoICsgMzsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IGFsbFByb2plY3RzW2kgLSA0XS5uYW1lKTtcbiAgICAgICAgZ3JvdXBlZFRhc2tzW2ldID0gdGVtcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhpZD1jdXJyZW50SUQpIHtcbiAgICBncm91cFRhc2tzKCk7XG4gICAgY3VycmVudElEID0gaWQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3QgaWNvbiA9IHByb2plY3QuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdC5sYXN0Q2hpbGQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NOYW1lID0gcHJvamVjdC5jbGFzc05hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBzcGFuJykuaW5uZXJIVE1MID0gaWNvbi5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJykuaW5uZXJIVE1MID0gbmFtZS5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGxldCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xuXG4gICAgdG9kby5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbXBsZXRlZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZ3JvdXBlZFRhc2tzW2lkXS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGV0IHN0YXR1cyA9ICh0YXNrLmlzRG9uZSkgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgbGV0IGJ0biA9IGA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+YDtcblxuICAgICAgICBpZihpZCA9PSAwICYmIHRhc2sucHJvamVjdCAhPSBcIkluYm94XCIpe1xuICAgICAgICAgICAgbGV0IGljb24gPSBhbGxQcm9qZWN0cy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09IHRhc2sucHJvamVjdCk7XG4gICAgICAgICAgICBidG4gPSBgPGRpdiBjbGFzcz1cInRhc2tzLXByb2plY3QgJHtpY29uLmNvbG9yfVwiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPiR7aWNvbi5pY29ufTwvc3Bhbj48ZGl2PiR7dGFzay5wcm9qZWN0fTwvZGl2PjwvZGl2PmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtID0gYFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3N0YXR1c30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7YnRufVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgICAgICBsaS5jbGFzc05hbWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgICBsaS5pZCA9IGAke2lkfSR7aSsrfWA7XG5cbiAgICAgICAgaWYgKCF0YXNrLmlzRG9uZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZighaXNIaWRkZW4pe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiJykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkID0gaW5wdXQucGFyZW50RWxlbWVudC5pZC5zbGljZSgwLDEpO1xuICAgICAgICAgICAgbGV0IGkgPSBpbnB1dC5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKC0xKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ3JvdXBlZFRhc2tzW2lkXVtpXS5jaGFuZ2VTdGF0dXMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKDAsMSk7XG4gICAgICAgICAgICBsZXQgaSA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgYWxsSXRlbXMuc3BsaWNlKGFsbEl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGdyb3VwZWRUYXNrc1tpZF1baV0pLDEpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBoaWRlQnV0dG9ucygpO1xufVxuXG5cbmZ1bmN0aW9uIGNvbnRyb2xDb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uIGJ1dHRvbiBzcGFuJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGJ1dHRvbicpO1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQtdG9nZ2xlJyk7XG5cbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbXBsZXRlZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IChidXR0b24uaW5uZXJIVE1MID09PSAnZXhwYW5kX21vcmUnKSA/ICdleHBhbmRfbGVzcycgOiAnZXhwYW5kX21vcmUnO1xuICAgIH0pXG5cbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG5cbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgaXNIaWRkZW4gPSAhaXNIaWRkZW47XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB0b2dnbGUuaW5uZXJIVE1MID0gKHRvZ2dsZS5pbm5lckhUTUwuaW5jbHVkZXMoXCJIaWRlXCIpKSA/IFwiU2hvdyBjb21wbGV0ZWRcIiA6IFwiSGlkZSBjb21wbGV0ZWRcIjtcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQgIT0gbWVudUJ1dHRvbiAmJiBlLnRhcmdldCAhPSBtZW51QnV0dG9uLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhpZGVCdXR0b25zKCl7XG4gICAgaWYoY3VycmVudElEPDQpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLXByb2plY3QnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLXByb2plY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn1cblxuY29udHJvbENvbXBsZXRlZCgpO1xuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnO1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tICcuL2Rpc3BsYXktdGFza3MnO1xuaW1wb3J0IHsgZ3JvdXBlZFRhc2tzIH0gZnJvbSAnLi9kaXNwbGF5LXRhc2tzJztcblxuY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0Jyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBjaGFuZ2VDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuZ2UtY29sb3InKTtcbmNvbnN0IGNoYW5nZVByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5nZS1wcm9qZWN0LW5hbWUnKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnMyJyk7XG5jb25zdCBhbGxDb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3JzMiBidXR0b24nKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFByb2plY3QoKXtcbiAgICBhbGxDb2xvcnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQ29sb3IucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgY2hhbmdlQ29sb3IuY2xhc3NMaXN0LmFkZChidG4uY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGNvbG9ycy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2hhbmdlQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbG9ycy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IGNoYW5nZUNvbG9yICYmIGUudGFyZ2V0ICE9PSBjaGFuZ2VDb2xvci5maXJzdENoaWxkICYmIGUudGFyZ2V0ICE9PSBjaGFuZ2VQcm9qZWN0TmFtZSAmJiBlLnRhcmdldCAhPT0gZWRpdFByb2plY3RCdG4gJiYgIWNvbG9ycy5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBcbiAgICB9KVxuXG4gICAgZWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgbGV0IGNvbG9yID0gaGVhZGVyLmNsYXNzTGlzdFswXTtcbiAgICAgICAgbGV0IGlkID0gaGVhZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcblxuICAgICAgICBjaGFuZ2VDb2xvci5jbGFzc05hbWUgPSBjb2xvcjtcbiAgICAgICAgY2hhbmdlUHJvamVjdE5hbWUudmFsdWUgPSBhbGxQcm9qZWN0c1tpZC00XS5uYW1lO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldik9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGlkID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgYWxsUHJvamVjdHNbaWQtNF0ubmFtZSA9IGNoYW5nZVByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgYWxsUHJvamVjdHNbaWQtNF0uY29sb3IgPSBjaGFuZ2VDb2xvci5jbGFzc05hbWU7XG5cbiAgICAgICAgICAgIGdyb3VwZWRUYXNrc1tpZF0uZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLnByb2plY3QgPSBhbGxQcm9qZWN0c1tpZC00XS5uYW1lO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoaWQpO1xuXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9KVxufSIsImltcG9ydCB7cmVzZXRQcm9qZWN0Rm9ybX0gZnJvbSAnLi9jb250cm9sLXByb2plY3QtcG9wdXAnXG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cydcblxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGNvbG9yLGljb24pe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBleGFtcGxlMSA9IG5ldyBQcm9qZWN0KFwiTWlrZSdzIGItZGF5XCIsIFwiY29sb3ItMlwiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5jb25zdCBleGFtcGxlMiA9IG5ldyBQcm9qZWN0KFwiUGVyc29uYWwgd2Vic2l0ZVwiLCBcImNvbG9yLTFcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuY29uc3QgZXhhbXBsZTMgPSBuZXcgUHJvamVjdChcIktpdGNoZW4gbWFrZW92ZXJcIiwgXCJjb2xvci0zXCIsIFwiZmliZXJfbWFudWFsX3JlY29yZFwiKTtcbmNvbnN0IGV4YW1wbGU0ID0gbmV3IFByb2plY3QoXCJTaG9wcGluZyBsaXN0XCIsIFwiY29sb3ItNVwiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5cbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTEpO1xuYWxsUHJvamVjdHMucHVzaChleGFtcGxlMik7XG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGUzKTtcbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb2xvcicpLmNsYXNzTmFtZTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWNvbG9yPnNwYW4nKS5pbm5lckhUTUw7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBjb2xvciwgaWNvbik7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHJlc2V0UHJvamVjdEZvcm0oKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyByZXNldEZvcm0gfSBmcm9tIFwiLi9jb250cm9sLXRvZG8tcG9wdXBcIjtcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSAnLi9kaXNwbGF5LXRhc2tzJ1xuXG5jbGFzcyBUb0RvSXRlbXtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LHByb2plY3QsaXNEb25lKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgY2hhbmdlU3RhdHVzKCl7XG4gICAgICAgIHRoaXMuaXNEb25lID0gIXRoaXMuaXNEb25lO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFsbEl0ZW1zID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBleGFtcGxlcygpe1xuICAgIGNvbnN0IGV4YW1wbGUxID0gbmV3IFRvRG9JdGVtKFwiQmFrZSBhIGNha2VcIiwgXCJcIixcIlwiLFwiXCIsXCJJbmJveFwiLGZhbHNlKTtcbiAgICBjb25zdCBleGFtcGxlMiA9IG5ldyBUb0RvSXRlbShcIlNlbmQgaW52aXRhdGlvbnNcIiwgXCJcIixcIlwiLFwiXCIsXCJJbmJveFwiLHRydWUpO1xuXG4gICAgYWxsSXRlbXMucHVzaChleGFtcGxlMSk7XG4gICAgYWxsSXRlbXMucHVzaChleGFtcGxlMik7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9Eb0l0ZW0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykuaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGdldERhdGUoKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykuY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKS5pbm5lckhUTUw7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb0RvSXRlbSh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvamVjdCwgZmFsc2UpO1xuICAgICAgICBhbGxJdGVtcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGltZVwiXScpLnZhbHVlO1xuXG4gICAgcmV0dXJuIGRhdGUrdGltZTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhZGRUb0RvSXRlbSBmcm9tIFwiLi90b2Rvc1wiXG5pbXBvcnQgY29udHJvbFByb2plY3RQb3B1cCBmcm9tIFwiLi9jb250cm9sLXByb2plY3QtcG9wdXBcIlxuaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIlxuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheS10YXNrcydcbmltcG9ydCBlZGl0UHJvamVjdCBmcm9tIFwiLi9lZGl0LXByb2plY3RcIlxuXG5hZGRUb0RvSXRlbSgpO1xuY29udHJvbFByb2plY3RQb3B1cCgpO1xuYWRkUHJvamVjdCgpO1xuZGlzcGxheVByb2plY3RzKCk7XG5kaXNwbGF5VGFza3MoMCk7XG5lZGl0UHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==