class ToDoItem{
    constructor(title,description,dueDate,priority,isDone="false",project="Inbox"){
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

function addToDoItem(){
    const item = new ToDoItem('train');
    item.status();
    allItems.push(item);
}