document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const newTaskInput = document.getElementById('new-task');
 
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });
 
    function addTask(task) {
        const listItem = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task;
        listItem.appendChild(taskText);
 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);
 
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Concluir';
        toggleButton.addEventListener('click', () => {
            taskText.classList.toggle('done');
        });
        listItem.appendChild(toggleButton);
 
        todoList.appendChild(listItem);
    }
 });
 