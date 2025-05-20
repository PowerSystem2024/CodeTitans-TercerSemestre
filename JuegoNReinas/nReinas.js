/*Se puede cambiar el valor de N para resolver el problema de las N reinas para diferentes tamaños de tablero*/
const N = 8; // Tamaño del tablero (N x N)

// Inicializa  tablero y arreglo de posiciones
let tablero = Array(N) // usamos let para que se pueda modificar el tablero
  .fill()
  .map(() => Array(N).fill("."));
let posicionesReinas = Array(N).fill(-1);

/**
 * Verifica si es seguro colocar una reina en la posición especificada
 */
function posicionSegura(fila, columna) {
  // Verificar columna
  for (let i = 0; i < fila; i++) {
    if (posicionesReinas[i] === columna) {
      return false;
    }
  }

  // Verifica diagonal superior izquierda
  for (let i = fila - 1, j = columna - 1; i >= 0 && j >= 0; i--, j--) {
    if (posicionesReinas[i] === j) {
      return false;
    }
  }

  // Verifica diagonal superior derecha
  for (let i = fila - 1, j = columna + 1; i >= 0 && j < N; i--, j++) {
    if (posicionesReinas[i] === j) {
      return false;
    }
  }

  return true;
}

/**
 * Imprime el estado actual del tablero
 */
function imprimirTablero() {
  console.log("\n Tablero actual:");

  // Imprimir números de columna
  let encabezado = "   ";
  for (let i = 0; i < N; i++) {
    encabezado += ` ${i} `;
  }
  console.log(encabezado);

  // Imprimir línea divisoria
  console.log("   " + "---".repeat(N));

  // Imprimir filas del tablero
  for (let i = 0; i < N; i++) {
    let fila = ` ${i} |`;
    for (let j = 0; j < N; j++) {
      fila += ` ${tablero[i][j]} `;
    }
    console.log(fila);
  }
}

/**
 * Actualiza el tablero según las posiciones actuales de las reinas
 */
function actualizarTablero() {
  // Limpiar el tablero
  tablero = Array(N)
    .fill()
    .map(() => Array(N).fill("."));

  // Colocar reinas
  for (let i = 0; i < N; i++) {
    if (posicionesReinas[i] !== -1) {
      tablero[i][posicionesReinas[i]] = "R";
    }
  }
}

/**
 * Función recursiva que resuelve el problema de las N Reinas usando backtracking
 */
function resolverNReinas(fila = 0) {
  // Si todas las reinas están colocadas
  if (fila === N) {
    return true;
  }

  // Intenta colocar la reina en cada columna de esta fila
  for (let col = 0; col < N; col++) {
    if (posicionSegura(fila, col)) {
      // Colocar reina
      posicionesReinas[fila] = col;

      // Actualizar el tablero y mostrar estado actual
      actualizarTablero();
      console.log(`\n--- Colocando reina en fila ${fila}, columna ${col} ---`);
      imprimirTablero();

      // Resolver para la siguiente fila
      if (resolverNReinas(fila + 1)) {
        return true;
      }

      // Si no funciona, retroceder
      console.log(
        `\n--- Retrocediendo: quitando reina de fila ${fila}, columna ${col} ---`
      );
      posicionesReinas[fila] = -1;
    }
  }

  return false;
}

// Función principal
function iniciar() {
  console.log(`\n*** EL PROBLEMA DE LAS ${N} REINAS ***`);
  console.log("Buscando solución...\n");

  const tiempoInicio = Date.now();

  if (resolverNReinas()) {
    const tiempoFin = Date.now();

    console.log("\n SOLUCIÓN ENCONTRADA!");
    console.log(`Tiempo: ${(tiempoFin - tiempoInicio) / 1000} segundos\n`);

    // Mostrar el tablero final
    console.log("TABLERO FINAL:");
    imprimirTablero();

    // Mostrar arreglo de posiciones
    console.log("\nARREGLO DE POSICIONES DE REINAS:");
    console.log("(índice = fila, valor = columna)");
    console.log(posicionesReinas);

    // Mostrar de forma más clara
    console.log("\nPOSICIONES:");
    for (let i = 0; i < N; i++) {
      console.log(`Reina ${i}: fila ${i}, columna ${posicionesReinas[i]}`);
    }
  } else {
    console.log("No se encontró solución para este tamaño de tablero");
  }
}

// Ejecutamos la funcion principal
iniciar();
