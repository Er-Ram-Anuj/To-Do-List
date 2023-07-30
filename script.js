const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.style.opacity = '0';
  setTimeout(() => taskItem.remove(), 300);
}

taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
