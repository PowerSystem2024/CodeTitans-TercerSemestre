//Seleccionamos los elementos del DOM
const btnJugar = document.getElementById("btn-jugar");
const btnPersonajeJugador = document.getElementById("btn-personaje");
const btnPuño = document.getElementById("btn-puño");
const btnPatada = document.getElementById("btn-patada");
const btnBarrida = document.getElementById("btn-barrida");
const btnReiniciar = document.getElementById("btn-reiniciar");

// Variables para el conteo
let triunfos = 0;
let derrotas = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let juegoTerminado = false; // para controlar el estado del juego

// Función para mostrar/ocultar reglas
function toggleReglas() {
  const contenidoReglas = document.getElementById("contenido-reglas");
  const btnReglas = document.getElementById("btn-reglas");

  if (contenidoReglas.style.display === "none") {
    contenidoReglas.style.display = "block";
    btnReglas.textContent = "🔼 Ocultar Reglas";
  } else {
    contenidoReglas.style.display = "none";
    btnReglas.textContent = "📋 Ver Reglas del Juego";
  }
}

// Función para iniciar el juego (mostrar selección de personaje)
function iniciarJuego() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("seleccionar-personaje").style.display = "block";
  document.getElementById("seleccionar-ataque").style.display = "none";
  document.getElementById("mensajes").style.display = "none";
  document.getElementById("reiniciar").style.display = "none";
}

// Función para mostrar la sección de ataques
function mostrarSeccionAtaques() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("seleccionar-personaje").style.display = "none";
  document.getElementById("seleccionar-ataque").style.display = "block";
  document.getElementById("mensajes").style.display = "block";
  document.getElementById("reiniciar").style.display = "none";
}

// Función para mostrar botón reiniciar cuando termina el juego
function mostrarReiniciar() {
  document.getElementById("reiniciar").style.display = "block";
}

// Función para elegir aleatoriamente el personaje del enemigo
function aleatoria() {
  const personajes = ["Zuko", "Katara", "Toph", "Aang"];
  const indiceAleatorio = Math.floor(Math.random() * personajes.length);
  return personajes[indiceAleatorio];
}

// Función para elegir ataque aleatorio del enemigo
function ataqueAleatorioEnemigo() {
  const ataques = ["puño", "patada", "barrida"];
  const indiceAleatorio = Math.floor(Math.random() * ataques.length);
  return ataques[indiceAleatorio];
}

// Función de combate
function combate(ataqueJugador, ataqueEnemigo) {
  // Si el juego ya terminó, no permitir más ataques
  if (juegoTerminado) {
    return;
  }

  let resultado = "";

  // Combate
  if (ataqueEnemigo === ataqueJugador) {
    return "EMPATE";
  } else if (ataqueJugador === "puño" && ataqueEnemigo === "barrida") {
    vidasEnemigo--;
    return "GANASTE";
  } else if (ataqueJugador === "patada" && ataqueEnemigo === "puño") {
    vidasEnemigo--;
    return "GANASTE";
  } else if (ataqueJugador === "barrida" && ataqueEnemigo === "patada") {
    vidasEnemigo--;
    return "GANASTE";
  } else {
    vidasJugador--;
    resultado = "PERDISTE";
  }
  // Actualizar las vidas en el HTML
  document.getElementById("vidas-jugador").innerText = vidasJugador;
  document.getElementById("vidas-enemigo").innerText = vidasEnemigo;

  // Revisar si alguien llego a 0 vidas ANTES de mostrar el mensaje del combate
  if (vidasEnemigo === 0 || vidasJugador === 0) {
    revisarVidas();
  }

  return resultado;
}

// Función para revisar vidas y determinar ganador
function revisarVidas() {
  if (vidasEnemigo === 0) {
    juegoTerminado = true;
    mostrarMensajeFinal("¡GANASTE EL JUEGO! 🎉 Has derrotado al enemigo");
  } else if (vidasJugador === 0) {
    juegoTerminado = true;
    mostrarMensajeFinal("¡PERDISTE EL JUEGO! 😞 El enemigo te ha derrotado");
  }
}

// Función para mostrar mensaje final
function mostrarMensajeFinal(mensaje) {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerText = mensaje;
  nuevoParrafo.style.fontWeight = "bold";
  nuevoParrafo.style.fontSize = "18px";
  nuevoParrafo.style.color = "red";
  document.getElementById("mensajes").appendChild(nuevoParrafo);

  // Deshabilitamos los botones de ataque
  btnPuño.disabled = true;
  btnPatada.disabled = true;
  btnBarrida.disabled = true;

  // Mostrar botón reiniciar
  mostrarReiniciar();
}

//Creamos una funcion para seleccionar el personaje del jugador
function seleccionarPersonajeJugador() {
  const personajes = document.querySelectorAll('input[name="personaje"]');
  let personajeSeleccionado = "";

  for (let personaje of personajes) {
    if (personaje.checked) {
      personajeSeleccionado = personaje.id;
      break;
    }
  }

  //Si no hay personaje seleccionado, salir de la función
  if (personajeSeleccionado === "") {
    alert("Debes seleccionar un personaje");
    return;
  }

  // Mostrar el personaje seleccionado
  document.getElementById("personaje-jugador").innerText =
    personajeSeleccionado;

  // Seleccionar personaje enemigo
  const personajeEnemigo = aleatoria();
  document.getElementById("personaje-enemigo").innerText = personajeEnemigo;

  // Mostrar la sección de ataques
  mostrarSeccionAtaques();
}

//Funcion para manejar ataques
function ataque(tipoAtaque) {
  // Si el juego terminó, no permitir más ataques
  if (juegoTerminado) {
    return;
  }

  const ataqueEnemigo = ataqueAleatorioEnemigo();
  const resultado = combate(tipoAtaque, ataqueEnemigo);

  // Crear mensaje del ataque
  const nuevoParrafo = document.createElement("p");
  const personajeJugador =
    document.getElementById("personaje-jugador").innerText;
  const personajeEnemigo =
    document.getElementById("personaje-enemigo").innerText;

  nuevoParrafo.innerText = `Tu personaje ${personajeJugador} atacó con ${tipoAtaque}, el personaje ${personajeEnemigo} del enemigo atacó con ${ataqueEnemigo} - ${resultado}`;

  document.getElementById("mensajes").appendChild(nuevoParrafo);
}

//Funciones para los ataques específicos
function ataquePuño() {
  ataque("puño");
}

function ataquePatada() {
  ataque("patada");
}

function ataqueBarrida() {
  ataque("barrida");
}

//Función para reiniciar el juego
function reiniciarJuego() {
  // Reiniciamos las vidas
  vidasJugador = 3;
  vidasEnemigo = 3;
  juegoTerminado = false;

  // Actualizamos las vidas en el HTML
  document.getElementById("vidas-jugador").innerText = vidasJugador;
  document.getElementById("vidas-enemigo").innerText = vidasEnemigo;

  // Habilitamos los botones de ataque
  btnPuño.disabled = false;
  btnPatada.disabled = false;
  btnBarrida.disabled = false;

  // Limpiamos los spans de los personajes
  document.getElementById("personaje-jugador").innerText = "";
  document.getElementById("personaje-enemigo").innerText = "";

  // Limpiamos el mensaje de ataque
  document.getElementById("mensajes").innerHTML = "";

  // Reiniciamos la selección de personajes
  const personajes = document.querySelectorAll('input[name="personaje"]');
  personajes.forEach((personaje) => (personaje.checked = false));

  // Volvemos al estado inicial
  document.getElementById("inicio").style.display = "block";
  document.getElementById("seleccionar-personaje").style.display = "none";
  document.getElementById("seleccionar-ataque").style.display = "none";
  document.getElementById("mensajes").style.display = "none";
  document.getElementById("reiniciar").style.display = "none";
}

//Agreamos los eventos a los botones y funciones
btnJugar.addEventListener("click", iniciarJuego);
btnPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
btnPuño.addEventListener("click", ataquePuño);
btnPatada.addEventListener("click", ataquePatada);
btnBarrida.addEventListener("click", ataqueBarrida);
btnReiniciar.addEventListener("click", reiniciarJuego);
