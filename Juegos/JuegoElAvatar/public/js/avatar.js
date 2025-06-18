
//Seleccionamos los elementos del DOM
const btnPersonajeJugador = document.getElementById("btn-personaje");
// const btnFuego = document.getElementById("btn-fuego");
// const btnAgua = document.getElementById("btn-agua");
// const btnTierra = document.getElementById("btn-tierra");
// const btnAire = document.getElementById("btn-aire");
// const btnReiniciar = document.getElementById("btn-reiniciar");

let ataqueJugador

//Agreamos los eventos a los botones y funciones
btnPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
//Agregamos los eventos a los botones de ataque
let botonPunio = document.getElementById('btn-punio')
botonPunio.addEventListener('click', ataquePunio)

let botonPatada = document.getElementById('btn-patada')
botonPatada.addEventListener('click', ataquePatada)

let botonBarrida = document.getElementById('btn-barrida')
botonBarrida.addEventListener('click', ataqueBarrida)


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
    //Extrae el nombre del personaje seleccionado desde la etiqueta (label) asociada al botón.
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

//creamos las funciones de cada boton
function ataquePunio(){
  ataqueJugador = 'Punio'
  combate(ataqueJugador, ataqueAleatorioEnemigo())

}

function ataquePatada(){
  ataqueJugador = 'Patada'
  combate(ataqueJugador, ataqueAleatorioEnemigo())
}

function ataqueBarrida(){
  ataqueJugador = 'Barrida'
  combate(ataqueJugador, ataqueAleatorioEnemigo())
}
//Funcion para aataque aleatorio enemigo
function ataqueAleatorioEnemigo(){
  let ataqueAleatorio = aleatorio(1, 3)
  
  if(ataqueAleatorio == 1){
    ataqueEnemigo = 'Punio'
  } else if(ataqueAleatorio == 2){
    ataqueEnemigo = 'Patada'
  } else {
    ataqueEnemigo = 'Barrida'
  }

   return ataqueEnemigo
}

function aleatorio(min, max){ 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let vidasJugador = 3
let vidasEnemigo = 3
//funcion del combate
function combate(ataqueJugador, ataqueEnemigo){
  
  if (ataqueJugador === ataqueEnemigo){
    alert('Empate')
  
  } else if (
    (ataqueJugador === 'Punio' && ataqueEnemigo === 'Barrida') ||
    (ataqueJugador === 'Patada' && ataqueEnemigo === 'Punio') ||
    (ataqueJugador === 'Barrida' && ataqueEnemigo === 'Patada')
  ) {
    //gana el jugador 
     vidasEnemigo -= 1;
    alert("¡Ganaste esta ronda!");
  } else {
    // Gana el enemigo
    vidasJugador -= 1;
    alert("Perdiste esta ronda");
  }

  // Actualiza el DOM
  document.getElementById("vidas-jugador").innerText = vidasJugador
  document.getElementById("vidas-enemigo").innerText = vidasEnemigo

  // Verificar si alguien ganó el juego
  if (vidasJugador === 0) {
    alert("¡Has perdido el juego!");
  } else if (vidasEnemigo === 0) {
    alert("¡Has ganado el juego!");
  }
}

