let display = document.getElementById("display");
function addDisplay(elemet) {
  display.value += elemet;
}

function clearDisplay() {
  display.value = "";
}

function culcule() {
  try {
    let resut = eval(display.value);
    display.value = resut;
  } catch (error) {
    display.value = "Error! funcion no aceptada";
    display.style.color = "red";
  }
}
function deleteDisplay() {
  display.value = display.value.slice(0, -1);
}
