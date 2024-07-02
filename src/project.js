

class Project{
    

    constructor(name){
        this.name = name;
    
        this._tasks=[];
        

    }


    test(){
        return this._tasks;
    }

    getName(){
        return this.name;
    }

    addTasktoArray(task){
        
        this._tasks.push(task);
    
    }
    removeTask(index){
        this._tasks.splice(index,1);
    }


   
}




export{Project};