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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUMsa0RBQVc7QUFDWCxrRUFBbUI7QUFDbkIscURBQVU7QUFDViw2REFBZTtBQUNmLDBEQUFZLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtcHJvamVjdC1wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2wtdG9kby1wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpO1xuY29uc3QgY3VycmVudENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3InKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnMnKTtcbmNvbnN0IGFsbENvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcnMgYnV0dG9uJyk7XG5jb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvdmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xQcm9qZWN0UG9wdXAoKSB7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UHJvamVjdEZvcm0pO1xuICAgIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQcm9qZWN0Rm9ybSk7XG5cbiAgICBhbGxDb2xvcnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjdXJyZW50Q29sb3IuY2xhc3NMaXN0LmFkZChidG4uY2xhc3NOYW1lKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGN1cnJlbnRDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29sb3JzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gY3VycmVudENvbG9yICYmIGUudGFyZ2V0ICE9PSBjdXJyZW50Q29sb3IuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBjb2xvcnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdFBvcHVwKCkge1xuICAgIGNvdmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGNvbG9ycy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJvamVjdEZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICBjdXJyZW50Q29sb3IucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIGN1cnJlbnRDb2xvci5jbGFzc0xpc3QuYWRkKCdjb2xvci0xJyk7XG4gICAgdG9nZ2xlUHJvamVjdFBvcHVwKCk7XG59IiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5LXRhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xTaWRlYmFyKCkge1xuICAgIGNvbnN0IGNvbnRyb2xJY29ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCBsaScpO1xuXG4gICAgICAgIHByb2plY3RzQWxsLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJBY3RpdmVDbGFzcygpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xlYXJBY3RpdmVDbGFzcyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0FsbC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgdmlld1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcblxuICAgICAgICB2aWV3UHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRvZ2dsZUljb24oKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0b2dnbGVJY29uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IHZpZXdQcm9qZWN0cy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gKGljb24uaW5uZXJIVE1MID09ICdleHBhbmRfbW9yZScpID8gJ2V4cGFuZF9sZXNzJyA6ICdleHBhbmRfbW9yZSc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnRyb2xJY29ucygpO1xuICAgIGNoYW5nZVByb2plY3RzVmlzaWJpbGl0eSgpO1xufSIsImNvbnN0IGFkZGl0aW9uYWxEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGl0aW9uYWwtZGF0YScpO1xuY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXRpbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbmNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcmlvcml0eScpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbmNvbnN0IGNoYW5nZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXByb2plY3QnKTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sVG9Eb1BvcHVwKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcm9qZWN0IGJ1dHRvbicpXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZGVzY3JpcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgYWRkaXRpb25hbERhdGEuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGRhdGV0aW1lLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRhdGV0aW1lLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGNoYW5nZVByaW9yaXR5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKGJ0bi5pZCk7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzQnRuLmZpcnN0Q2hpbGQuaW5uZXJIVE1MID0gYnRuLmZpcnN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QuaW5uZXJIVE1MID0gYnRuLmxhc3RDaGlsZC5pbm5lckhUTUw7XG4gICAgICAgICAgICBwcm9qZWN0c0J0bi5jbGFzc05hbWUgPSBidG4uY2xhc3NOYW1lO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gcHJpb3JpdHlCdG4gJiYgZS50YXJnZXQgIT09IHByaW9yaXR5QnRuLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihlLnRhcmdldCAhPT0gcHJvamVjdHNCdG4gJiYgZS50YXJnZXQgIT09IHByb2plY3RzQnRuLmZpcnN0Q2hpbGQgJiYgZS50YXJnZXQgIT09IGN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEZvcm0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLXBvcHVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEZvcm0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tcG9wdXAnKS5yZXNldCgpO1xuXG4gICAgcHJpb3JpdHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcblxuICAgIHByb2plY3RzQnRuLmZpcnN0Q2hpbGQuaW5uZXJIVE1MID0gJ2luYm94JztcbiAgICBjdXJyZW50UHJvamVjdC5pbm5lckhUTUwgPSAnSW5ib3gnO1xuICAgIHByb2plY3RzQnRuLmNsYXNzTmFtZSA9ICcnO1xuXG4gICAgdG9nZ2xlSXRlbVBvcHVwKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUl0ZW1Qb3B1cCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRhdGV0aW1lLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuIiwiaW1wb3J0IGNvbnRyb2xTaWRlYmFyIGZyb20gXCIuL2NvbnRyb2wtc2lkZWJhclwiO1xuaW1wb3J0IGNvbnRyb2xUb0RvUG9wdXAgZnJvbSBcIi4vY29udHJvbC10b2RvLXBvcHVwXCJcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmlubmVySFRNTCA9ICcnO1xuICAgIGxldCBpID0gNDtcblxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgbGlTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGlTaWRlYmFyLmNsYXNzTmFtZSA9IHByb2plY3QuY29sb3I7XG4gICAgICAgIGxpU2lkZWJhci5pZCA9IGkrKztcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBwcm9qZWN0Lmljb247XG4gICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGxpU2lkZWJhci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgbGlTaWRlYmFyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQobGlTaWRlYmFyKTtcblxuICAgICAgICBjb25zdCBsaVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHNwYW5Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgZGl2UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gcHJvamVjdC5jb2xvcjtcbiAgICAgICAgc3BhblBvcHVwLmlubmVySFRNTCA9IHByb2plY3QuaWNvbjtcbiAgICAgICAgc3BhblBvcHVwLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcbiAgICAgICAgZGl2UG9wdXAuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuUG9wdXApO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoZGl2UG9wdXApO1xuICAgICAgICBsaVBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1wcm9qZWN0PnVsJykuYXBwZW5kQ2hpbGQobGlQb3B1cCk7XG4gICAgfSlcbiAgICBjb250cm9sU2lkZWJhcigpO1xuICAgIGNvbnRyb2xUb0RvUG9wdXAoKTtcbn0iLCJpbXBvcnQgeyBhbGxJdGVtcywgZXhhbXBsZXMgfSBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBncm91cGVkVGFza3MgPSBbXTtcbmxldCBjdXJyZW50SUQ7XG5sZXQgaXNIaWRkZW4gPSBmYWxzZTtcbmxldCBpc0ZpcnN0U2Vzc2lvbiA9IHRydWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cFRhc2tzKCkge1xuICAgIGlmIChhbGxJdGVtcy5sZW5ndGggPT0gMCAmJiBpc0ZpcnN0U2Vzc2lvbikge1xuICAgICAgICBleGFtcGxlcygpO1xuICAgIH1cbiAgICBpc0ZpcnN0U2Vzc2lvbiA9IGZhbHNlO1xuICAgIGxldCBpbmJveCA9IGFsbEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJvamVjdCA9PSBcIkluYm94XCIpO1xuICAgIGxldCB0b2RheSA9IFtdO1xuICAgIGxldCB0aGlzV2VlayA9IFtdO1xuICAgIGdyb3VwZWRUYXNrc1swXSA9IGFsbEl0ZW1zO1xuICAgIGdyb3VwZWRUYXNrc1sxXSA9IGluYm94O1xuICAgIGdyb3VwZWRUYXNrc1syXSA9IHRvZGF5O1xuICAgIGdyb3VwZWRUYXNrc1szXSA9IHRoaXNXZWVrO1xuICAgIGZvciAobGV0IGkgPSA0OyBpIDw9IGFsbFByb2plY3RzLmxlbmd0aCArIDM7IGkrKykge1xuICAgICAgICBsZXQgdGVtcCA9IGFsbEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJvamVjdCA9PSBhbGxQcm9qZWN0c1tpIC0gNF0ubmFtZSk7XG4gICAgICAgIGdyb3VwZWRUYXNrc1tpXSA9IHRlbXA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VGFza3MoaWQ9Y3VycmVudElEKSB7XG4gICAgZ3JvdXBUYXNrcygpO1xuICAgIGN1cnJlbnRJRCA9IGlkO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IGljb24gPSBwcm9qZWN0LmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgbmFtZSA9IHByb2plY3QubGFzdENoaWxkO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsYXNzTmFtZSA9IHByb2plY3QuY2xhc3NOYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBzcGFuJykuaW5uZXJIVE1MID0gaWNvbi5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJykuaW5uZXJIVE1MID0gbmFtZS5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGxldCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xuXG4gICAgdG9kby5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbXBsZXRlZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZ3JvdXBlZFRhc2tzW2lkXS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGV0IHN0YXR1cyA9ICh0YXNrLmlzRG9uZSkgPyAnY2hlY2tlZCcgOiAnJztcblxuICAgICAgICBjb25zdCBpdGVtID0gYFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3N0YXR1c30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgICAgICBsaS5jbGFzc05hbWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgICBsaS5pZCA9IGAke2lkfSR7aSsrfWA7XG5cbiAgICAgICAgaWYgKCF0YXNrLmlzRG9uZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZighaXNIaWRkZW4pe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJykuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiJykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkID0gaW5wdXQucGFyZW50RWxlbWVudC5pZC5zbGljZSgwLDEpO1xuICAgICAgICAgICAgbGV0IGkgPSBpbnB1dC5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKC0xKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ3JvdXBlZFRhc2tzW2lkXVtpXS5jaGFuZ2VTdGF0dXMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKDAsMSk7XG4gICAgICAgICAgICBsZXQgaSA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgZ3JvdXBlZFRhc2tzW2lkXS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuXG5mdW5jdGlvbiBjb250cm9sQ29tcGxldGVkKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbiBidXR0b24gc3BhbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1vcHRpb25zJyk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKTtcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkLXRvZ2dsZScpO1xuXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb21wbGV0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ2V4cGFuZF9tb3JlJykgPyAnZXhwYW5kX2xlc3MnIDogJ2V4cGFuZF9tb3JlJztcbiAgICB9KVxuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGlzSGlkZGVuID0gIWlzSGlkZGVuO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgdG9nZ2xlLmlubmVySFRNTCA9ICh0b2dnbGUuaW5uZXJIVE1MLmluY2x1ZGVzKFwiSGlkZVwiKSkgPyBcIlNob3cgY29tcGxldGVkXCIgOiBcIkhpZGUgY29tcGxldGVkXCI7XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9IG1lbnVCdXR0b24gJiYgZS50YXJnZXQgIT0gbWVudUJ1dHRvbi5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb250cm9sQ29tcGxldGVkKCk7XG4iLCJpbXBvcnQge3Jlc2V0UHJvamVjdEZvcm19IGZyb20gJy4vY29udHJvbC1wcm9qZWN0LXBvcHVwJ1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnXG5cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSxjb2xvcixpY29uKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgZXhhbXBsZTEgPSBuZXcgUHJvamVjdChcIk1pa2UncyBiLWRheVwiLCBcImNvbG9yLTJcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuY29uc3QgZXhhbXBsZTIgPSBuZXcgUHJvamVjdChcIlBlcnNvbmFsIHdlYnNpdGVcIiwgXCJjb2xvci0xXCIsIFwiZmliZXJfbWFudWFsX3JlY29yZFwiKTtcbmNvbnN0IGV4YW1wbGUzID0gbmV3IFByb2plY3QoXCJLaXRjaGVuIG1ha2VvdmVyXCIsIFwiY29sb3ItM1wiLCBcImZpYmVyX21hbnVhbF9yZWNvcmRcIik7XG5jb25zdCBleGFtcGxlNCA9IG5ldyBQcm9qZWN0KFwiU2hvcHBpbmcgbGlzdFwiLCBcImNvbG9yLTVcIiwgXCJmaWJlcl9tYW51YWxfcmVjb3JkXCIpO1xuXG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGUxKTtcbmFsbFByb2plY3RzLnB1c2goZXhhbXBsZTIpO1xuYWxsUHJvamVjdHMucHVzaChleGFtcGxlMyk7XG5hbGxQcm9qZWN0cy5wdXNoKGV4YW1wbGU0KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtY29sb3InKS5jbGFzc05hbWU7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb2xvcj5zcGFuJykuaW5uZXJIVE1MO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgY29sb3IsIGljb24pO1xuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXNldFByb2plY3RGb3JtKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcmVzZXRGb3JtIH0gZnJvbSBcIi4vY29udHJvbC10b2RvLXBvcHVwXCI7XG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheS10YXNrcydcblxuY2xhc3MgVG9Eb0l0ZW17XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxwcm9qZWN0LGlzRG9uZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGNoYW5nZVN0YXR1cygpe1xuICAgICAgICB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbGxJdGVtcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhbXBsZXMoKXtcbiAgICBjb25zdCBleGFtcGxlMSA9IG5ldyBUb0RvSXRlbShcIkJha2UgYSBjYWtlXCIsIFwiXCIsXCJcIixcIlwiLFwiSW5ib3hcIixmYWxzZSk7XG4gICAgY29uc3QgZXhhbXBsZTIgPSBuZXcgVG9Eb0l0ZW0oXCJTZW5kIGludml0YXRpb25zXCIsIFwiXCIsXCJcIixcIlwiLFwiSW5ib3hcIix0cnVlKTtcblxuICAgIGFsbEl0ZW1zLnB1c2goZXhhbXBsZTEpO1xuICAgIGFsbEl0ZW1zLnB1c2goZXhhbXBsZTIpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvRG9JdGVtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLmlubmVySFRNTDtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBnZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLmNsYXNzTmFtZTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JykuaW5uZXJIVE1MO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9Eb0l0ZW0odGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza1Byb2plY3QsIGZhbHNlKTtcbiAgICAgICAgYWxsSXRlbXMucHVzaChuZXdUYXNrKTtcblxuICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRpbWVcIl0nKS52YWx1ZTtcblxuICAgIHJldHVybiBkYXRlK3RpbWU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkVG9Eb0l0ZW0gZnJvbSBcIi4vdG9kb3NcIlxuaW1wb3J0IGNvbnRyb2xQcm9qZWN0UG9wdXAgZnJvbSBcIi4vY29udHJvbC1wcm9qZWN0LXBvcHVwXCJcbmltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCJcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzJ1xuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tICcuL2Rpc3BsYXktdGFza3MnXG5cbmFkZFRvRG9JdGVtKCk7XG5jb250cm9sUHJvamVjdFBvcHVwKCk7XG5hZGRQcm9qZWN0KCk7XG5kaXNwbGF5UHJvamVjdHMoKTtcbmRpc3BsYXlUYXNrcygwKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=