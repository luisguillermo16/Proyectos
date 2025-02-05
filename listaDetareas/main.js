
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function updateTaskList() {

  taskList.innerHTML = "";


  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    if (task.completed) {
      li.classList.add("completed");
    }


    li.addEventListener("click", function () {
      task.completed = !task.completed;
      updateTaskList();
      saveTasks();
    });


    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.style.marginLeft = '20px';
    deleteButton.style.marginBottom = '10px';
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function (event) {
      event.stopPropagation(); 
      const taskIndex = tasks.indexOf(task);
      tasks.splice(taskIndex, 1);
      updateTaskList();
      saveTasks();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


addButton.addEventListener("click", function () {
  const taskTitle = taskInput.value.trim();
  if (taskTitle !== "") {
    const newTask = {
      title: taskTitle,
      completed: false,
    };
    tasks.push(newTask);
    updateTaskList();
    saveTasks();
    taskInput.value = "";
  }
});


updateTaskList();
