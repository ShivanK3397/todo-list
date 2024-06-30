class Task{
    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    }

    getTitle(){
        return this.title;
    }

    getDueDate(){
        return this.dueDate;
    }
    getDescription(){
        return this.description;
    }
}

export{Task};