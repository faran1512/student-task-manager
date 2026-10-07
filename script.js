// All tasks are kept in this list
let tasks = [];

// Add a new task from the form
function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const description = document.getElementById("taskDescription").value.trim();

  if (title === "") {
    alert("Please enter a task title.");
    return;
  }

  tasks.push({ title: title, description: description });

  // Clear the form
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";

  showTasks();
}

// Display all tasks
function showTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(function (task) {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.innerHTML = `
      <h5 class="mb-1">${task.title}</h5>
      <p class="mb-0 text-muted">${task.description}</p>
    `;
    list.appendChild(item);
  });
}
