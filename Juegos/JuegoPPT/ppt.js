//1 sera piedra, 2 sera papel y 3 sera tijera

//funcion que genera un numero aleatorio entre 1 y 3
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada === 1) {
    resultado = "Piedra";
  } else if (jugada === 2) {
    resultado = "Papel";
  } else if (jugada === 3) {
    resultado = "Tijera";
  } else {
    resultado = "Elegiste mal 👹";
  }
  return resultado;
}

// Elementos del DOM
const resultadoElement = document.getElementById("resultado");
const reiniciarBtn = document.getElementById("reiniciar");

// Función para iniciar el juego
function iniciarJuego() {
  let jugador = 0;
  let pc = 0;
  let triunfos = 0;
  let derrotas = 0;

  while (triunfos < 3 && derrotas < 3) {
    pc = randomNumber(1, 3);
    jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera");

    alert("PC elige: " + eleccion(pc));
    alert("Tu eliges: " + eleccion(jugador));

    //Combate
    if (pc === jugador) {
      alert("EMPATE");
    } else if (jugador == 1 && pc == 3) {
      alert("GANASTE");
      triunfos++;
    } else if (jugador == 2 && pc == 1) {
      alert("GANASTE");
      triunfos++;
    } else if (jugador == 3 && pc == 2) {
      alert("GANASTE");
      triunfos++;
    } else {
      alert("PERDISTE");
      derrotas++;
    }
  }

  // En lugar de mostrar un alert, actualizamos el contenido del div resultado
  resultadoElement.innerHTML = `
    <p>Juego finalizado</p>
    <p>Ganaste ${triunfos} veces. Perdiste ${derrotas} veces.</p>
  `;

  // Mostramos el botón de reinicio
  reiniciarBtn.style.display = "block";
}

// Evento click para el botón reiniciar
reiniciarBtn.addEventListener("click", function () {
  // Ocultamos el botón de reinicio
  reiniciarBtn.style.display = "none";
  // Limpiamos el resultado
  resultadoElement.innerHTML = "";
  // Reiniciamos el juego
  iniciarJuego();
});

// Iniciamos el juego cuando carga la página
iniciarJuego();
