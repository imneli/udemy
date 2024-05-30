const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
  const li = document.createElement('li');
  return li;
}

inputTask.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

function clearInput() {
  inputTask.value = '';
  inputTask.focus();
}

function createDeleteButton(li) {
  li.innerText += ' ';
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.setAttribute('class', 'delete');
  deleteButton.setAttribute('title', 'Delete this task');
  li.appendChild(deleteButton);
}

function createTask(inputText) {
  const li = createLi();
  li.innerText = inputText;
  tasks.appendChild(li);
  clearInput();
  createDeleteButton(li);
  saveTasks();
}

btnTask.addEventListener('click', function() {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('delete')) {
    el.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() {
  const taskItems = tasks.querySelectorAll('li');
  const taskList = [];

  for (let task of taskItems) {
    let taskText = task.innerText;
    taskText = taskText.replace('Delete', '').trim();
    taskList.push(taskText);
  }

  const tasksJSON = JSON.stringify(taskList);
  localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
  const tasks = localStorage.getItem('tasks');
  const taskList = JSON.parse(tasks);

  for(let task of taskList) {
    createTask(task);
  }
}
addSavedTasks();
