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

    static setCurrent(value){
        this.current=value;
    }

    static currentProject(){
        return this.current;
    }
}

export{Project};