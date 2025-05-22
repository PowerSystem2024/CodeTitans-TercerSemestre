//Seleccionamos los elementos del DOM
const btnPersonajeJugador = document.getElementById("btn-personaje");
// const btnFuego = document.getElementById("btn-fuego");
// const btnAgua = document.getElementById("btn-agua");
// const btnTierra = document.getElementById("btn-tierra");
// const btnAire = document.getElementById("btn-aire");
// const btnReiniciar = document.getElementById("btn-reiniciar");

//Agreamos los eventos a los botones y funciones
btnPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

//Creamos uuna funcion para seleccionar el personaje del jugador
function seleccionarPersonajeJugador() {
  // Obtenemos el valor del personaje seleccionado
  const personajeSeleccionado = document.querySelector(
    'input[name="personaje"]:checked'
  );
  if (personajeSeleccionado) {
    alert("Seleccionaste a " + personajeSeleccionado.labels[0].innerText);
  } else {
    alert("No has seleccionado un personaje");
  }
}
