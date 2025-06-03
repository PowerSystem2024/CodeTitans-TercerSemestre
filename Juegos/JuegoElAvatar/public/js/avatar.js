//Seleccionamos los elementos del DOM
const btnPersonajeJugador = document.getElementById("btn-personaje");
// const btnFuego = document.getElementById("btn-fuego");
// const btnAgua = document.getElementById("btn-agua");
// const btnTierra = document.getElementById("btn-tierra");
// const btnAire = document.getElementById("btn-aire");
// const btnReiniciar = document.getElementById("btn-reiniciar");

//Agreamos los eventos a los botones y funciones
btnPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

// Función para elegir aleatoriamente el personaje del enemigo
function aleatoria() {
  const personajes = ["Zuko", "Katara", "Toph", "Aang"];
  const indiceAleatorio = Math.floor(Math.random() * personajes.length);
  return personajes[indiceAleatorio];
}

//Creamos uuna funcion para seleccionar el personaje del jugador
function seleccionarPersonajeJugador() {
  // Obtenemos el valor del personaje seleccionado
  const personajeSeleccionado = document.querySelector(
    'input[name="personaje"]:checked'
  );
  if (personajeSeleccionado) {
    const personajeNombre = personajeSeleccionado.labels[0].innerText;

    // Actualizamos el span con el nombre del personaje
    document.getElementById("personaje-jugador").innerText = personajeNombre;

    // Seleccionamos el personaje enemigo usando la función aleatoria
    const personajeEnemigo = aleatoria();

    // Actualizamos el span con el nombre del personaje enemigo
    document.getElementById("personaje-enemigo").innerText = personajeEnemigo;
  } else {
    alert("No has seleccionado un personaje");
  }
}
