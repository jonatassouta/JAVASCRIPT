class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length
    }
        addTask(taskText){
        /* console.log("funcionou"); */
        //clonagem template(task hide):
        let template = document.querySelector('.task').cloneNode(true);
        //remover o hide(task hide):
        template.classList.remove('hide');
        //Manipular texto(task title):
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        let list = document.querySelector('#tasks-container');
        list.appendChild(template);
        this.addEvents();
        this.checkTasks('add');
    }
       
        removeTask(task){
            //console.log('Vai apagar')
            //achar o elemento
            let parentEl = task.parentElement
            //remover da lista
            parentEl.remove();
            this.checkTasks('remove')
        }
        completeTask(task){
            if (task.classList.contains('done')) {
                task.classList.remove('done')
            } else {
                task.classList.add('done')
            }
            
        }


        addEvents(){
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1]
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1]
        //adicionar evento de remove  a TASK
        removeBtn.addEventListener('click',function(){
            todo.removeTask(this)
        })
        //adicionar ok (verde) quando tarefa finalizada
        doneBtn.addEventListener('click',function(){
            todo.completeTask(this)
        })
       
    }
    checkTasks(command){
        let msg = document.querySelector('#empty-tasks');
        if(command==='add'){
            this.totalTasks +=1;
        } else if(command==='remove'){
            this.totalTasks -=1;
        }
    }
}
let todo = new Todo();
let addBtn = document.querySelector("#add")
addBtn.addEventListener('click',function(e){
    e.preventDefault();
    let taskText = document.querySelector('#task');
    //console.log(taskText.value);
    if(taskText.value!=''){
        todo.addTask(taskText.value)
    } else {
        window.alert('Não pode estar vazio')
       
    }
   
})