// Obtener referencias a elementos del DOM
const historialList = document.getElementById("historial");

// Array para almacenar el historial de números
let historial = [];

function Random() {
  var num1 = Math.floor(Math.random() * 80);
  var num2 = Math.floor(Math.random() * 80);
  var num3 = Math.floor(Math.random() * 80);

  // Mostrar los números generados en el historial
  mostrarEnHistorial(num1,num2,num3);
 

  // Actualizar los números en el display
  numero1.innerHTML = num1;
  numero2.innerHTML = num2;
  numero3.innerHTML = num3;
}

function mostrarEnHistorial(numero1,numero2,numero3) {
  // Agregar el número al historial
  historial.push(numero1,numero2,numero3);

  // Crear un elemento de lista para mostrar el número en el historial
  const li = document.createElement("li");
  li.textContent = numero1 + " - " + numero2  + " - " + numero3;
  
  // Agregar el elemento de lista al historial
  historialList.appendChild(li);
}




