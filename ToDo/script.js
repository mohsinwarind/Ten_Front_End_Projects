document.addEventListener('DOMContentLoaded',() =>{
    const todoForm = document.getElementById('todo-form')
    const newTaskInput = document.getElementById('new-task')
    const todoList = document.getElementById('todo-list')
    todoForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    })


function addTask(task){
    const li = document.createElement('li');
    li.innerHTML = `
    <span>${task}</span>
    <div class="button-container">
        <button class="tick-btn">&#10003;</button>
        <button class="delete-btn">&#128465;</button>
    </div>
    `;
    li.querySelector('.tick-btn').addEventListener('click',() =>{
        li.classList.toggle('completed');

    });
    li.querySelector('.delete-btn').addEventListener('click', ()=>{
        todoList.removeChild(li);
    });

    todoList.appendChild(li);
}

});