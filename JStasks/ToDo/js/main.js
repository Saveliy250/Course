const formElement = document.querySelector('#form');
const taskInputElement = document.querySelector('#taskInput')
const tasksListElement = document.querySelector('#tasksList')
const removeButtonElement = document.querySelector('#removeDoneTasks')

let tasks = [];
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.forEach(task => {
    renderTask(task);
})

checkEmptyList()

formElement.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    const inputValue = taskInputElement.value;

    const newTask = {
        id: Date.now(),
        text: inputValue,
        done: false
    }
    tasks.push(newTask);

    saveToLocalStorage()

    renderTask(newTask);

    taskInputElement.value = '';
    taskInputElement.focus();


    checkEmptyList()
}

tasksListElement.addEventListener('click', deleteTask);

function deleteTask(e) {
    if(e.target.dataset.action !== 'delete') {
        return
    }
    const parentNode = e.target.closest('.list-group-item');
    const id = Number(parentNode.id);

    tasks = tasks.filter(task => task.id !== id)
    saveToLocalStorage()
    parentNode.remove()
    checkEmptyList()
}

tasksListElement.addEventListener('click', doneTask);

function doneTask(e) {
    if (e.target.dataset.action !== 'done') {
        return
    }

    const parentNode = e.target.closest('.list-group-item')
    const id = Number(parentNode.id);

    const task = tasks.find(task => task.id === id);
    task.done = !task.done;
    saveToLocalStorage()

    parentNode.querySelector('.task-title').classList.toggle('task-title--done')
}

function checkEmptyList() {
    if (tasks.length === 0) {
        const emptyListHTML = `
        <li id="emptyList" class="list-group-item empty-list">
            <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
            <div class="empty-list__title">Список дел пуст</div>
        </li>`;

        tasksListElement.insertAdjacentHTML('afterbegin', emptyListHTML);

    }
    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#emptyList');
        emptyListEl ? emptyListEl.remove() : null;
    }

}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task) {
    const taskHTML = `
    <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
            <span class="task-title ${task.done ? "task-title--done" : ""}">${task.text}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                    <img src="./img/tick.svg" alt="Done" width="18" height="18">
                </button>
                <button type="button" data-action="delete" class="btn-action">
                    <img src="./img/cross.svg" alt="Done" width="18" height="18">
                </button>
            </div>
    </li>
    `
    tasksListElement.insertAdjacentHTML('beforeend', taskHTML);
}
