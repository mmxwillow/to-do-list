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
/* harmony export */   "default": () => (/* binding */ controlToDoPopup),
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
            projectsBtn.className = btn.className;
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

    document.querySelector('.cover').addEventListener('click', resetForm)
    document.querySelector('.add-item-popup').addEventListener('click', resetForm)
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





function displayProjects() {
    document.querySelector('.projects').innerHTML = '';
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
    (0,_control_todo_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

document.querySelector('#remove-project').addEventListener('click', () => {
    let id = document.querySelector('header').getAttribute('data-id') - 4;

    _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.splice(id,1);
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
/* harmony export */   "groupTasks": () => (/* binding */ groupTasks)
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

        const item = `
                <input type="checkbox" ${status}>
                <div class="task-name">${task.title}</div>
                <div class="date">${task.dueDate}</div>
                <button class="edit">
                        <span class="material-symbols-outlined">edit</span>
                </button>
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

            groupedTasks[id].splice(i,1);
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






(0,_todos__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_control_project_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_display_projects__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_display_tasks__WEBPACK_IMPORTED_MODULE_4__["default"])(0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDd0I7QUFDdEI7QUFDYTtBQUNOOztBQUUxQyxrREFBVztBQUNYLGtFQUFtQjtBQUNuQixxREFBVTtBQUNWLDZEQUFlO0FBQ2YsMERBQVksSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbC1wcm9qZWN0LXBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbC1zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbC10b2RvLXBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcHVwJyk7XG5jb25zdCBjdXJyZW50Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb2xvcicpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9ycycpO1xuY29uc3QgYWxsQ29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9ycyBidXR0b24nKTtcbmNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY292ZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFByb2plY3RQb3B1cCgpIHtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0Rm9ybSk7XG4gICAgY292ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RGb3JtKTtcblxuICAgIGFsbENvbG9ycy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudENvbG9yLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvci5jbGFzc0xpc3QuYWRkKGJ0bi5jbGFzc05hbWUpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgY3VycmVudENvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb2xvcnMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBjdXJyZW50Q29sb3IgJiYgZS50YXJnZXQgIT09IGN1cnJlbnRDb2xvci5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIGNvbG9ycy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0UG9wdXAoKSB7XG4gICAgY292ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgY29sb3JzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcm9qZWN0Rm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xuICAgIGN1cnJlbnRDb2xvci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgY3VycmVudENvbG9yLmNsYXNzTGlzdC5hZGQoJ2NvbG9yLTEnKTtcbiAgICB0b2dnbGVQcm9qZWN0UG9wdXAoKTtcbn0iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXktdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFNpZGViYXIoKSB7XG4gICAgY29uc3QgY29udHJvbEljb25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0IGxpJyk7XG5cbiAgICAgICAgcHJvamVjdHNBbGwuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckFjdGl2ZUNsYXNzKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGFza3MocHJvamVjdC5pZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbGVhckFjdGl2ZUNsYXNzID0gKCgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzQWxsLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUHJvamVjdHNWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB2aWV3UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1wcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgICAgIHZpZXdQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdG9nZ2xlSWNvbigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRvZ2dsZUljb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gdmlld1Byb2plY3RzLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAoaWNvbi5pbm5lckhUTUwgPT0gJ2V4cGFuZF9tb3JlJykgPyAnZXhwYW5kX2xlc3MnIDogJ2V4cGFuZF9tb3JlJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29udHJvbEljb25zKCk7XG4gICAgY2hhbmdlUHJvamVjdHNWaXNpYmlsaXR5KCk7XG59IiwiY29uc3QgYWRkaXRpb25hbERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkaXRpb25hbC1kYXRhJyk7XG5jb25zdCBkYXRldGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRldGltZScpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jyk7XG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuY29uc3QgY2hhbmdlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByaW9yaXR5Jyk7XG5jb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuY29uc3QgY2hhbmdlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcHJvamVjdCcpO1xuY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xUb0RvUG9wdXAoKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByb2plY3QgYnV0dG9uJylcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihkZXNjcmlwdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZGF0ZXRpbWUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZGF0ZXRpbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgYWRkaXRpb25hbERhdGEuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG4gICAgY2hhbmdlUHJpb3JpdHkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByaW9yaXR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoYnRuLmlkKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgcHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZVByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHNCdG4uZmlyc3RDaGlsZC5pbm5lckhUTUwgPSBidG4uZmlyc3RDaGlsZC5pbm5lckhUTUw7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5pbm5lckhUTUwgPSBidG4ubGFzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgIHByb2plY3RzQnRuLmNsYXNzTmFtZSA9IGJ0bi5jbGFzc05hbWU7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBwcmlvcml0eUJ0biAmJiBlLnRhcmdldCAhPT0gcHJpb3JpdHlCdG4uZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBwcm9qZWN0c0J0biAmJiBlLnRhcmdldCAhPT0gcHJvamVjdHNCdG4uZmlyc3RDaGlsZCAmJiBlLnRhcmdldCAhPT0gY3VycmVudFByb2plY3Qpe1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0Rm9ybSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tcG9wdXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0Rm9ybSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1wb3B1cCcpLnJlc2V0KCk7XG5cbiAgICBwcmlvcml0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuXG4gICAgcHJvamVjdHNCdG4uZmlyc3RDaGlsZC5pbm5lckhUTUwgPSAnaW5ib3gnO1xuICAgIGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTCA9ICdJbmJveCc7XG4gICAgcHJvamVjdHNCdG4uY2xhc3NOYW1lID0gJyc7XG5cbiAgICB0b2dnbGVJdGVtUG9wdXAoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSXRlbVBvcHVwKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZGF0ZXRpbWUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG4iLCJpbXBvcnQgY29udHJvbFNpZGViYXIgZnJvbSBcIi4vY29udHJvbC1zaWRlYmFyXCI7XG5pbXBvcnQgY29udHJvbFRvRG9Qb3B1cCBmcm9tIFwiLi9jb250cm9sLXRvZG8tcG9wdXBcIlxuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgaSA9IDQ7XG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxpU2lkZWJhci5jbGFzc05hbWUgPSBwcm9qZWN0LmNvbG9yO1xuICAgICAgICBsaVNpZGViYXIuaWQgPSBpKys7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gcHJvamVjdC5pY29uO1xuICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBsaVNpZGViYXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGxpU2lkZWJhci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKGxpU2lkZWJhcik7XG5cbiAgICAgICAgY29uc3QgbGlQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzcGFuUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdlBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3QuY29sb3I7XG4gICAgICAgIHNwYW5Qb3B1cC5pbm5lckhUTUwgPSBwcm9qZWN0Lmljb247XG4gICAgICAgIHNwYW5Qb3B1cC5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCc7XG4gICAgICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3BhblBvcHVwKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGRpdlBvcHVwKTtcbiAgICAgICAgbGlQb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcHJvamVjdD51bCcpLmFwcGVuZENoaWxkKGxpUG9wdXApO1xuICAgIH0pXG4gICAgY29udHJvbFNpZGViYXIoKTtcbiAgICBjb250cm9sVG9Eb1BvcHVwKCk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpIC0gNDtcblxuICAgIGFsbFByb2plY3RzLnNwbGljZShpZCwxKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5VGFza3MoMCk7XG59KSIsImltcG9ydCB7IGFsbEl0ZW1zLCBleGFtcGxlcyB9IGZyb20gXCIuL3RvZG9zXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGdyb3VwZWRUYXNrcyA9IFtdO1xubGV0IGN1cnJlbnRJRDtcbmxldCBpc0hpZGRlbiA9IGZhbHNlO1xubGV0IGlzRmlyc3RTZXNzaW9uID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVGFza3MoKSB7XG4gICAgaWYgKGFsbEl0ZW1zLmxlbmd0aCA9PSAwICYmIGlzRmlyc3RTZXNzaW9uKSB7XG4gICAgICAgIGV4YW1wbGVzKCk7XG4gICAgfVxuICAgIGlzRmlyc3RTZXNzaW9uID0gZmFsc2U7XG4gICAgbGV0IGluYm94ID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IFwiSW5ib3hcIik7XG4gICAgbGV0IHRvZGF5ID0gW107XG4gICAgbGV0IHRoaXNXZWVrID0gW107XG4gICAgZ3JvdXBlZFRhc2tzWzBdID0gYWxsSXRlbXM7XG4gICAgZ3JvdXBlZFRhc2tzWzFdID0gaW5ib3g7XG4gICAgZ3JvdXBlZFRhc2tzWzJdID0gdG9kYXk7XG4gICAgZ3JvdXBlZFRhc2tzWzNdID0gdGhpc1dlZWs7XG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPD0gYWxsUHJvamVjdHMubGVuZ3RoICsgMzsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IGFsbFByb2plY3RzW2kgLSA0XS5uYW1lKTtcbiAgICAgICAgZ3JvdXBlZFRhc2tzW2ldID0gdGVtcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhpZD1jdXJyZW50SUQpIHtcbiAgICBncm91cFRhc2tzKCk7XG4gICAgY3VycmVudElEID0gaWQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3QgaWNvbiA9IHByb2plY3QuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdC5sYXN0Q2hpbGQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NOYW1lID0gcHJvamVjdC5jbGFzc05hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBzcGFuJykuaW5uZXJIVE1MID0gaWNvbi5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJykuaW5uZXJIVE1MID0gbmFtZS5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGxldCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xuXG4gICAgdG9kby5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbXBsZXRlZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZ3JvdXBlZFRhc2tzW2lkXS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGV0IHN0YXR1cyA9ICh0YXNrLmlzRG9uZSkgPyAnY2hlY2tlZCcgOiAnJztcblxuICAgICAgICBjb25zdCBpdGVtID0gYFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3N0YXR1c30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgICAgICBsaS5jbGFzc05hbWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgICBsaS5pZCA9IGAke2lkfSR7aSsrfWA7XG5cbiAgICAgICAgaWYgKCF0YXNrLmlzRG9uZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZighaXNIaWRkZW4pe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiJykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkID0gaW5wdXQucGFyZW50RWxlbWVudC5pZC5zbGljZSgwLDEpO1xuICAgICAgICAgICAgbGV0IGkgPSBpbnB1dC5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKC0xKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ3JvdXBlZFRhc2tzW2lkXVtpXS5jaGFuZ2VTdGF0dXMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKDAsMSk7XG4gICAgICAgICAgICBsZXQgaSA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgZ3JvdXBlZFRhc2tzW2lkXS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgaGlkZUJ1dHRvbnMoKTtcbn1cblxuXG5mdW5jdGlvbiBjb250cm9sQ29tcGxldGVkKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbiBidXR0b24gc3BhbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1vcHRpb25zJyk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKTtcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkLXRvZ2dsZScpO1xuXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb21wbGV0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ2V4cGFuZF9tb3JlJykgPyAnZXhwYW5kX2xlc3MnIDogJ2V4cGFuZF9tb3JlJztcbiAgICB9KVxuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGlzSGlkZGVuID0gIWlzSGlkZGVuO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgdG9nZ2xlLmlubmVySFRNTCA9ICh0b2dnbGUuaW5uZXJIVE1MLmluY2x1ZGVzKFwiSGlkZVwiKSkgPyBcIlNob3cgY29tcGxldGVkXCIgOiBcIkhpZGUgY29tcGxldGVkXCI7XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9IG1lbnVCdXR0b24gJiYgZS50YXJnZXQgIT0gbWVudUJ1dHRvbi5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBoaWRlQnV0dG9ucygpe1xuICAgIGlmKGN1cnJlbnRJRDw0KXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1wcm9qZWN0JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1wcm9qZWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG59XG5cbmNvbnRyb2xDb21wbGV0ZWQoKTtcbiIsImltcG9ydCB7cmVzZXRQcm9qZWN0Rm9ybX0gZnJvbSAnLi9jb250cm9sLXByb2plY3QtcG9wdXAnXG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cydcblxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGNvbG9yLGljb24pe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBleGFtcGxlMSA9IG5ldyBQcm9qZWN0KFwiTWlrZSdzIGItZGF5XCIsIFwiY29sb3ItMlwiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5jb25zdCBleGFtcGxlMiA9IG5ldyBQcm9qZWN0KFwiUGVyc29uYWwgd2Vic2l0ZVwiLCBcImNvbG9yLTFcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuY29uc3QgZXhhbXBsZTMgPSBuZXcgUHJvamVjdChcIktpdGNoZW4gbWFrZW92ZXJcIiwgXCJjb2xvci0zXCIsIFwiZmliZXJfbWFudWFsX3JlY29yZFwiKTtcbmNvbnN0IGV4YW1wbGU0ID0gbmV3IFByb2plY3QoXCJTaG9wcGluZyBsaXN0XCIsIFwiY29sb3ItNVwiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5cbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTEpO1xuYWxsUHJvamVjdHMucHVzaChleGFtcGxlMik7XG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGUzKTtcbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb2xvcicpLmNsYXNzTmFtZTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWNvbG9yPnNwYW4nKS5pbm5lckhUTUw7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBjb2xvciwgaWNvbik7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHJlc2V0UHJvamVjdEZvcm0oKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyByZXNldEZvcm0gfSBmcm9tIFwiLi9jb250cm9sLXRvZG8tcG9wdXBcIjtcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSAnLi9kaXNwbGF5LXRhc2tzJ1xuXG5jbGFzcyBUb0RvSXRlbXtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LHByb2plY3QsaXNEb25lKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgY2hhbmdlU3RhdHVzKCl7XG4gICAgICAgIHRoaXMuaXNEb25lID0gIXRoaXMuaXNEb25lO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFsbEl0ZW1zID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBleGFtcGxlcygpe1xuICAgIGNvbnN0IGV4YW1wbGUxID0gbmV3IFRvRG9JdGVtKFwiQmFrZSBhIGNha2VcIiwgXCJcIixcIlwiLFwiXCIsXCJJbmJveFwiLGZhbHNlKTtcbiAgICBjb25zdCBleGFtcGxlMiA9IG5ldyBUb0RvSXRlbShcIlNlbmQgaW52aXRhdGlvbnNcIiwgXCJcIixcIlwiLFwiXCIsXCJJbmJveFwiLHRydWUpO1xuXG4gICAgYWxsSXRlbXMucHVzaChleGFtcGxlMSk7XG4gICAgYWxsSXRlbXMucHVzaChleGFtcGxlMik7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9Eb0l0ZW0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykuaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGdldERhdGUoKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykuY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKS5pbm5lckhUTUw7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb0RvSXRlbSh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvamVjdCwgZmFsc2UpO1xuICAgICAgICBhbGxJdGVtcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGltZVwiXScpLnZhbHVlO1xuXG4gICAgcmV0dXJuIGRhdGUrdGltZTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhZGRUb0RvSXRlbSBmcm9tIFwiLi90b2Rvc1wiXG5pbXBvcnQgY29udHJvbFByb2plY3RQb3B1cCBmcm9tIFwiLi9jb250cm9sLXByb2plY3QtcG9wdXBcIlxuaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIlxuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheS10YXNrcydcblxuYWRkVG9Eb0l0ZW0oKTtcbmNvbnRyb2xQcm9qZWN0UG9wdXAoKTtcbmFkZFByb2plY3QoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuZGlzcGxheVRhc2tzKDApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==