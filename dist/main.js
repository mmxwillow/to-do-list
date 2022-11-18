/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/control-sidebar.js":
/*!********************************!*\
  !*** ./src/control-sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlSidebar)
/* harmony export */ });
function controlSidebar() {
    const controlIcons = () => {
        const projectsAll = document.querySelectorAll('li');

        projectsAll.forEach((project) => {
            project.addEventListener('click', () => {
                clearActiveClass();
                project.firstElementChild.classList.add('active');
            })
        });

        const clearActiveClass = (() => {
            projectsAll.forEach((project) => {
                project.firstElementChild.classList.remove('active');
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
const allProjects = document.querySelectorAll('.change-project button')

function controlToDoPopup() {
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

    document.querySelector('.cover').addEventListener('click', toggleItemPopup)
    document.querySelector('.add-item-popup').addEventListener('click', toggleItemPopup)
}

function resetForm() {
    document.querySelector('form').reset();

    priorityBtn.removeAttribute('class');
    priorityBtn.classList.add('none');

    projectsBtn.firstChild.innerHTML = 'inbox';
    currentProject.innerHTML = 'Inbox';

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

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addToDoItem)
/* harmony export */ });
/* harmony import */ var _control_todo_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-todo-popup */ "./src/control-todo-popup.js");


class ToDoItem{
    constructor(title,description,dueDate,priority,project,isDone="false"){
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

function addToDoItem() {
    document.querySelector('#submit-task').addEventListener('click', (ev) => {
        ev.preventDefault();
        const taskName = document.querySelector('input[type="text"]').value;
        const taskDescription = document.querySelector('textarea').innerHTML;
        const taskDueDate = getDate();
        const taskPriority = document.querySelector('#priority').className;
        const taskProject = document.querySelector('#current-project').innerHTML;

        const newTask = new ToDoItem(taskName, taskDescription, taskDueDate, taskPriority, taskProject);
        allItems.push(newTask);
        console.log(newTask)

        ;(0,_control_todo_popup__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
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
/* harmony import */ var _control_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-sidebar */ "./src/control-sidebar.js");
/* harmony import */ var _control_todo_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-todo-popup */ "./src/control-todo-popup.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/todos.js");




(0,_control_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_control_todo_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_todos__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwrREFBUztBQUNqQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDSTtBQUNsQjs7QUFFakMsNERBQWM7QUFDZCwrREFBZ0I7QUFDaEIsa0RBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbC1zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbC10b2RvLXBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFNpZGViYXIoKSB7XG4gICAgY29uc3QgY29udHJvbEljb25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cbiAgICAgICAgcHJvamVjdHNBbGwuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckFjdGl2ZUNsYXNzKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsZWFyQWN0aXZlQ2xhc3MgPSAoKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHNBbGwuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0c1Zpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXdQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXByb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICAgICAgdmlld1Byb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0b2dnbGVJY29uKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdG9nZ2xlSWNvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSB2aWV3UHJvamVjdHMuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9IChpY29uLmlubmVySFRNTCA9PSAnZXhwYW5kX21vcmUnKSA/ICdleHBhbmRfbGVzcycgOiAnZXhwYW5kX21vcmUnO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb250cm9sSWNvbnMoKTtcbiAgICBjaGFuZ2VQcm9qZWN0c1Zpc2liaWxpdHkoKTtcbn0iLCJjb25zdCBhZGRpdGlvbmFsRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRpdGlvbmFsLWRhdGEnKTtcbmNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGV0aW1lJyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbmNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBjaGFuZ2VQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFuZ2UtcHJpb3JpdHknKTtcbmNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG5jb25zdCBjaGFuZ2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1wcm9qZWN0Jyk7XG5jb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKTtcbmNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcm9qZWN0IGJ1dHRvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xUb0RvUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBkYXRldGltZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihkYXRldGltZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBjaGFuZ2VQcmlvcml0eS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJpb3JpdHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChidG4uaWQpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hhbmdlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0J0bi5maXJzdENoaWxkLmlubmVySFRNTCA9IGJ0bi5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTCA9IGJ0bi5sYXN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gcHJpb3JpdHlCdG4gJiYgZS50YXJnZXQgIT09IHByaW9yaXR5QnRuLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihlLnRhcmdldCAhPT0gcHJvamVjdHNCdG4gJiYgZS50YXJnZXQgIT09IHByb2plY3RzQnRuLmZpcnN0Q2hpbGQgJiYgZS50YXJnZXQgIT09IGN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVJdGVtUG9wdXApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLXBvcHVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVJdGVtUG9wdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XG5cbiAgICBwcmlvcml0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuXG4gICAgcHJvamVjdHNCdG4uZmlyc3RDaGlsZC5pbm5lckhUTUwgPSAnaW5ib3gnO1xuICAgIGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTCA9ICdJbmJveCc7XG5cbiAgICB0b2dnbGVJdGVtUG9wdXAoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSXRlbVBvcHVwKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZGF0ZXRpbWUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG4iLCJpbXBvcnQgeyByZXNldEZvcm0gfSBmcm9tIFwiLi9jb250cm9sLXRvZG8tcG9wdXBcIjtcblxuY2xhc3MgVG9Eb0l0ZW17XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxwcm9qZWN0LGlzRG9uZT1cImZhbHNlXCIpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjaGFuZ2VTdGF0dXMoKXtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmU7XG4gICAgfVxufVxuXG5jb25zdCBhbGxJdGVtcyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb0RvSXRlbSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykuaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGdldERhdGUoKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykuY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKS5pbm5lckhUTUw7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb0RvSXRlbSh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvamVjdCk7XG4gICAgICAgIGFsbEl0ZW1zLnB1c2gobmV3VGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spXG5cbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRpbWVcIl0nKS52YWx1ZTtcblxuICAgIHJldHVybiBkYXRlK3RpbWU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY29udHJvbFNpZGViYXIgZnJvbSBcIi4vY29udHJvbC1zaWRlYmFyXCI7XG5pbXBvcnQgY29udHJvbFRvRG9Qb3B1cCBmcm9tIFwiLi9jb250cm9sLXRvZG8tcG9wdXBcIlxuaW1wb3J0IGFkZFRvRG9JdGVtIGZyb20gXCIuL3RvZG9zXCJcblxuY29udHJvbFNpZGViYXIoKTtcbmNvbnRyb2xUb0RvUG9wdXAoKTtcbmFkZFRvRG9JdGVtKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9