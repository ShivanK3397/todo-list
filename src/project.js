

class Project{

    constructor(name){
        this.name = name;
        this.tasks = [];

    }

    test(){
        console.log("test");
        return this.tasks;
    }

    getName(){
        return this.name;
    }

    addTasktoArray(task){
        console.log(this.tasks);
        this.tasks.push(task);
    }

   
}

export{Project};