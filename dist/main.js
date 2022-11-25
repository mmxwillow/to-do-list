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

function groupTasks() {
    if (_todos__WEBPACK_IMPORTED_MODULE_0__.allItems.length == 0) {
        (0,_todos__WEBPACK_IMPORTED_MODULE_0__.examples)();
    }
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
                <input type="checkbox" ${status} id="${id}${i++}">
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

        if (!task.isDone) {
            document.querySelector('.todo').appendChild(li);
        }
        else {
            document.querySelector('section').classList.remove('hidden');
            document.querySelector('.completed').classList.remove('hidden');
            document.querySelector('.completed').appendChild(li);
        }
    })

    document.querySelectorAll('input[type="checkbox"').forEach((input) => {
        input.addEventListener('change', () => {
            let id = input.id.slice(0,1);
            let i = input.id.slice(-1);
            
            groupedTasks[id][i].changeStatus();
            displayTasks();
        })
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






(0,_todos__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_control_project_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_display_projects__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_display_tasks__WEBPACK_IMPORTED_MODULE_4__["default"])(0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdFQUFnQjtBQUN4QixRQUFRLDZEQUFlO0FBQ3ZCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNpRDtBQUNQOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRUE7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEsOERBQVM7QUFDakIsUUFBUSwwREFBWTtBQUNwQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUN3QjtBQUN0QjtBQUNhO0FBQ047O0FBRTFDLGtEQUFXO0FBQ1gsa0VBQW1CO0FBQ25CLHFEQUFVO0FBQ1YsNkRBQWU7QUFDZiwwREFBWSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sLXByb2plY3QtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sLXNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sLXRvZG8tcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS10YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAnKTtcbmNvbnN0IGN1cnJlbnRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWNvbG9yJyk7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JzJyk7XG5jb25zdCBhbGxDb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3JzIGJ1dHRvbicpO1xuY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb3ZlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sUHJvamVjdFBvcHVwKCkge1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFByb2plY3RGb3JtKTtcbiAgICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdEZvcm0pO1xuXG4gICAgYWxsQ29sb3JzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50Q29sb3IucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgY3VycmVudENvbG9yLmNsYXNzTGlzdC5hZGQoYnRuLmNsYXNzTmFtZSk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBjdXJyZW50Q29sb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbG9ycy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IGN1cnJlbnRDb2xvciAmJiBlLnRhcmdldCAhPT0gY3VycmVudENvbG9yLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgY29sb3JzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3RQb3B1cCgpIHtcbiAgICBjb3Zlci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBjb2xvcnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFByb2plY3RGb3JtKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XG4gICAgY3VycmVudENvbG9yLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICBjdXJyZW50Q29sb3IuY2xhc3NMaXN0LmFkZCgnY29sb3ItMScpO1xuICAgIHRvZ2dsZVByb2plY3RQb3B1cCgpO1xufSIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheS10YXNrc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sU2lkZWJhcigpIHtcbiAgICBjb25zdCBjb250cm9sSWNvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QgbGknKTtcblxuICAgICAgICBwcm9qZWN0c0FsbC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyQWN0aXZlQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0LmlkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsZWFyQWN0aXZlQ2xhc3MgPSAoKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHNBbGwuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0c1Zpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXdQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXByb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICAgICAgdmlld1Byb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0b2dnbGVJY29uKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdG9nZ2xlSWNvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSB2aWV3UHJvamVjdHMuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9IChpY29uLmlubmVySFRNTCA9PSAnZXhwYW5kX21vcmUnKSA/ICdleHBhbmRfbGVzcycgOiAnZXhwYW5kX21vcmUnO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb250cm9sSWNvbnMoKTtcbiAgICBjaGFuZ2VQcm9qZWN0c1Zpc2liaWxpdHkoKTtcbn0iLCJjb25zdCBhZGRpdGlvbmFsRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRpdGlvbmFsLWRhdGEnKTtcbmNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGV0aW1lJyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbmNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBjaGFuZ2VQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFuZ2UtcHJpb3JpdHknKTtcbmNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG5jb25zdCBjaGFuZ2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1wcm9qZWN0Jyk7XG5jb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFRvRG9Qb3B1cCgpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFuZ2UtcHJvamVjdCBidXR0b24nKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBkYXRldGltZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihkYXRldGltZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBjaGFuZ2VQcmlvcml0eS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJpb3JpdHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChidG4uaWQpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hhbmdlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9IGJ0bi5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTCA9IGJ0bi5sYXN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcHJvamVjdHNCdG4uY2xhc3NOYW1lID0gYnRuLmNsYXNzTmFtZTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByaW9yaXR5QnRuICYmIGUudGFyZ2V0ICE9PSBwcmlvcml0eUJ0bi5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS50YXJnZXQgIT09IHByb2plY3RzQnRuICYmIGUudGFyZ2V0ICE9PSBwcm9qZWN0c0J0bi5maXJzdENoaWxkICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50UHJvamVjdCl7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1wb3B1cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGb3JtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXBvcHVwJykucmVzZXQoKTtcblxuICAgIHByaW9yaXR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG5cbiAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9ICdpbmJveCc7XG4gICAgY3VycmVudFByb2plY3QuaW5uZXJIVE1MID0gJ0luYm94JztcbiAgICBwcm9qZWN0c0J0bi5jbGFzc05hbWUgPSAnJztcblxuICAgIHRvZ2dsZUl0ZW1Qb3B1cCgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVJdGVtUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgYWRkaXRpb25hbERhdGEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkYXRldGltZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn1cbiIsImltcG9ydCBjb250cm9sU2lkZWJhciBmcm9tIFwiLi9jb250cm9sLXNpZGViYXJcIjtcbmltcG9ydCBjb250cm9sVG9Eb1BvcHVwIGZyb20gXCIuL2NvbnRyb2wtdG9kby1wb3B1cFwiXG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgaSA9IDQ7XG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxpU2lkZWJhci5jbGFzc05hbWUgPSBwcm9qZWN0LmNvbG9yO1xuICAgICAgICBsaVNpZGViYXIuaWQgPSBpKys7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gcHJvamVjdC5pY29uO1xuICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBsaVNpZGViYXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGxpU2lkZWJhci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKGxpU2lkZWJhcik7XG5cbiAgICAgICAgY29uc3QgbGlQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzcGFuUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdlBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3QuY29sb3I7XG4gICAgICAgIHNwYW5Qb3B1cC5pbm5lckhUTUwgPSBwcm9qZWN0Lmljb247XG4gICAgICAgIHNwYW5Qb3B1cC5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCc7XG4gICAgICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3BhblBvcHVwKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGRpdlBvcHVwKTtcbiAgICAgICAgbGlQb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcHJvamVjdD51bCcpLmFwcGVuZENoaWxkKGxpUG9wdXApO1xuICAgIH0pXG4gICAgY29udHJvbFNpZGViYXIoKTtcbiAgICBjb250cm9sVG9Eb1BvcHVwKCk7XG59IiwiaW1wb3J0IHsgYWxsSXRlbXMsIGV4YW1wbGVzIH0gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgZ3JvdXBlZFRhc2tzID0gW107XG5sZXQgY3VycmVudElEO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBUYXNrcygpIHtcbiAgICBpZiAoYWxsSXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgZXhhbXBsZXMoKTtcbiAgICB9XG4gICAgbGV0IGluYm94ID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IFwiSW5ib3hcIik7XG4gICAgbGV0IHRvZGF5ID0gW107XG4gICAgbGV0IHRoaXNXZWVrID0gW107XG4gICAgZ3JvdXBlZFRhc2tzWzBdID0gYWxsSXRlbXM7XG4gICAgZ3JvdXBlZFRhc2tzWzFdID0gaW5ib3g7XG4gICAgZ3JvdXBlZFRhc2tzWzJdID0gdG9kYXk7XG4gICAgZ3JvdXBlZFRhc2tzWzNdID0gdGhpc1dlZWs7XG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPD0gYWxsUHJvamVjdHMubGVuZ3RoICsgMzsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wID0gYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0ID09IGFsbFByb2plY3RzW2kgLSA0XS5uYW1lKTtcbiAgICAgICAgZ3JvdXBlZFRhc2tzW2ldID0gdGVtcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhpZD1jdXJyZW50SUQpIHtcbiAgICBncm91cFRhc2tzKCk7XG4gICAgY3VycmVudElEID0gaWQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3QgaWNvbiA9IHByb2plY3QuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdC5sYXN0Q2hpbGQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NOYW1lID0gcHJvamVjdC5jbGFzc05hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIHNwYW4nKS5pbm5lckhUTUwgPSBpY29uLmlubmVySFRNTDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKS5pbm5lckhUTUwgPSBuYW1lLmlubmVySFRNTDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuICAgIGxldCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XG5cbiAgICB0b2RvLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29tcGxldGVkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBncm91cGVkVGFza3NbaWRdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsZXQgc3RhdHVzID0gKHRhc2suaXNEb25lKSA/ICdjaGVja2VkJyA6ICcnO1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBgXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7c3RhdHVzfSBpZD1cIiR7aWR9JHtpKyt9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgICAgICBsaS5jbGFzc05hbWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBpdGVtO1xuXG4gICAgICAgIGlmICghdGFzay5pc0RvbmUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJykuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIicpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IGlucHV0LmlkLnNsaWNlKDAsMSk7XG4gICAgICAgICAgICBsZXQgaSA9IGlucHV0LmlkLnNsaWNlKC0xKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ3JvdXBlZFRhc2tzW2lkXVtpXS5jaGFuZ2VTdGF0dXMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG4iLCJpbXBvcnQge3Jlc2V0UHJvamVjdEZvcm19IGZyb20gJy4vY29udHJvbC1wcm9qZWN0LXBvcHVwJ1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnXG5cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSxjb2xvcixpY29uKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgZXhhbXBsZTEgPSBuZXcgUHJvamVjdChcIk1pa2UncyBiLWRheVwiLCBcImNvbG9yLTJcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuY29uc3QgZXhhbXBsZTIgPSBuZXcgUHJvamVjdChcIlBlcnNvbmFsIHdlYnNpdGVcIiwgXCJjb2xvci0xXCIsIFwiZmliZXJfbWFudWFsX3JlY29yZFwiKTtcbmNvbnN0IGV4YW1wbGUzID0gbmV3IFByb2plY3QoXCJLaXRjaGVuIG1ha2VvdmVyXCIsIFwiY29sb3ItM1wiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5jb25zdCBleGFtcGxlNCA9IG5ldyBQcm9qZWN0KFwiU2hvcHBpbmcgbGlzdFwiLCBcImNvbG9yLTVcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuXG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGUxKTtcbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTIpO1xuYWxsUHJvamVjdHMucHVzaChleGFtcGxlMyk7XG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGU0KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3InKS5jbGFzc05hbWU7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb2xvcj5zcGFuJykuaW5uZXJIVE1MO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgY29sb3IsIGljb24pO1xuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXNldFByb2plY3RGb3JtKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcmVzZXRGb3JtIH0gZnJvbSBcIi4vY29udHJvbC10b2RvLXBvcHVwXCI7XG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheS10YXNrcydcblxuY2xhc3MgVG9Eb0l0ZW17XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxwcm9qZWN0LGlzRG9uZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGNoYW5nZVN0YXR1cygpe1xuICAgICAgICB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbGxJdGVtcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhbXBsZXMoKXtcbiAgICBjb25zdCBleGFtcGxlMSA9IG5ldyBUb0RvSXRlbShcIkJha2UgYSBjYWtlXCIsIFwiXCIsXCJcIixcIlwiLFwiSW5ib3hcIixmYWxzZSk7XG4gICAgY29uc3QgZXhhbXBsZTIgPSBuZXcgVG9Eb0l0ZW0oXCJTZW5kIGludml0YXRpb25zXCIsIFwiXCIsXCJcIixcIlwiLFwiSW5ib3hcIix0cnVlKTtcblxuICAgIGFsbEl0ZW1zLnB1c2goZXhhbXBsZTEpO1xuICAgIGFsbEl0ZW1zLnB1c2goZXhhbXBsZTIpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvRG9JdGVtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLmlubmVySFRNTDtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBnZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLmNsYXNzTmFtZTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JykuaW5uZXJIVE1MO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9Eb0l0ZW0odGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza1Byb2plY3QsIGZhbHNlKTtcbiAgICAgICAgYWxsSXRlbXMucHVzaChuZXdUYXNrKTtcblxuICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRpbWVcIl0nKS52YWx1ZTtcblxuICAgIHJldHVybiBkYXRlK3RpbWU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkVG9Eb0l0ZW0gZnJvbSBcIi4vdG9kb3NcIlxuaW1wb3J0IGNvbnRyb2xQcm9qZWN0UG9wdXAgZnJvbSBcIi4vY29udHJvbC1wcm9qZWN0LXBvcHVwXCJcbmltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCJcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzJ1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tICcuL2Rpc3BsYXktdGFza3MnXG5cbmFkZFRvRG9JdGVtKCk7XG5jb250cm9sUHJvamVjdFBvcHVwKCk7XG5hZGRQcm9qZWN0KCk7XG5kaXNwbGF5UHJvamVjdHMoKTtcbmRpc3BsYXlUYXNrcygwKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=