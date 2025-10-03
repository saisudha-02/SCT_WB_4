function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskDateTime = document.getElementById("taskDateTime");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span>${taskInput.value} <br><small>🕒 ${taskDateTime.value || 'No deadline'}</small></span>
    <div class="actions">
      <button onclick="completeTask(this)"><i class="fas fa-check"></i></button>
      <button onclick="editTask(this)"><i class="fas fa-edit"></i></button>
      <button onclick="deleteTask(this)"><i class="fas fa-trash-alt"></i></button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  taskDateTime.value = "";
}

function completeTask(button) {
  let li = button.parentElement.parentElement;
  li.classList.toggle("completed");
}

function editTask(button) {
  let li = button.parentElement.parentElement;
  let span = li.querySelector("span");
  let newTask = prompt("Edit your task:", span.innerText.split("🕒")[0].trim());
  if (newTask) {
    let dateTime = prompt("Edit Date & Time (YYYY-MM-DD HH:MM):", "");
    span.innerHTML = `${newTask} <br><small>🕒 ${dateTime || 'No deadline'}</small>`;
  }
}

function deleteTask(button) {
  let li = button.parentElement.parentElement;
  li.remove();
}
