// Obtener referencias a elementos del DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Obtener tareas almacenadas en el almacenamiento local
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Función para actualizar la lista de tareas en el DOM
function updateTaskList() {
  // Limpiar la lista de tareas existente
  taskList.innerHTML = "";

  // Recorrer todas las tareas y agregarlas al DOM
  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    if (task.completed) {
      li.classList.add("completed");
    }

    // Agregar evento de clic para marcar la tarea como completada o no completada
    li.addEventListener("click", function () {
      task.completed = !task.completed;
      updateTaskList();
      saveTasks();
    });

    // Agregar botón de eliminar tarea
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.style.marginLeft = '20px';
    deleteButton.style.marginBottom = '10px';
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Evitar que el evento de clic se propague al elemento li
      const taskIndex = tasks.indexOf(task);
      tasks.splice(taskIndex, 1);
      updateTaskList();
      saveTasks();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Función para guardar las tareas en el almacenamiento local
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Agregar evento de clic al botón Agregar
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

// Actualizar la lista de tareas al cargar la página
updateTaskList();
