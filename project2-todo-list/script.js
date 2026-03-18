let todo=[];

while(true){
    let command=prompt("Enter a command ");
    if(command=="quit"){
        console.log("quiting");
        break;
    }
    else if(command=="add"){
        let task=prompt("Enter a task");
        todo.push(task);
        console.log("task is added");
    }
    else if(command=="delete"){
        let task=prompt("enter the task name");
        let index=todo.indexOf(task);
        if(index!==-1){
            todo.splice(index, 1);
            console.log("Task is deleted");
        }
        else{
            console.log("task not founded");
        }
    }
    else if(command=="show"){
        for(let i=0;i<todo.length;i++)
        {
            console.log(todo[i]);
        }
        }
        else{
            console.log("Invalid command ")
        }
}