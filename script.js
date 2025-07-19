function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">🗑️</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleComplete(span) {
  const li = span.parentElement;
  li.classList.toggle('completed');
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}
