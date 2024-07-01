class Project{

    constructor(name){
        this.name = name;
        this.tasks = [];

    }

    getTasks(){
        return this.tasks;
    }

    addTask(task){
        this.tasks.push(task);
    }
}

export{Project};