import addToDoItem from "./todos"
import controlProjectPopup from "./control-project-popup"
import addProject from "./projects"
import displayProjects from './display-projects'
import displayTasks from './display-tasks'
import editProject from "./edit-project"
import { controlDetails } from "./control-details-view"
import { controlMobileView } from "./control-mobile-view"
import { getItems } from "./local-storage"

getItems();
addToDoItem();
controlProjectPopup();
addProject();
displayProjects();
displayTasks(0);
editProject();
controlDetails();
controlMobileView();