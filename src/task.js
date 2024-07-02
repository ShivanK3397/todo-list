class Task{
    constructor(title,dueDate,description){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        
        this.descriptionShown = false
      
    }

    setDescriptionShown(value){
        this.descriptionShown=value;
    }

    getDescriptionShown(){
        return this.descriptionShown;
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