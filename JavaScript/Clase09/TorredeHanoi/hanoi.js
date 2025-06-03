// Función recursiva para resolver las Torres de Hanoi
const torresHanoi = (n, origen, destino, auxiliar) => {
  // Solo si hay un disco, lo moveremos directamente
  if (n === 1) {
    console.log(`Mover disco 1 de ${origen} a ${destino}`);
    return;
  }

  //  Mueve los n-1 discos superiores del origen al auxiliar
  torresHanoi(n - 1, origen, auxiliar, destino);

  //  Mueve el disco más grande del origen al destino
  console.log(`Mover disco ${n} de ${origen} a ${destino}`);

  //  Mueve los n-1 discos del auxiliar al destino
  torresHanoi(n - 1, auxiliar, destino, origen);
};

// Función para iniciar el algoritmo
const resolverHanoi = (numDiscos) => {
  console.log(`Resolviendo Torres de Hanoi con ${numDiscos} discos:`);
  console.log("=".repeat(40));
  torresHanoi(numDiscos, "A", "C", "B");
  console.log("=".repeat(40));
  console.log("Problema resuelto!");
};

// Iniciamos con 3 movimientos, pero le podemos aumentar o restar
resolverHanoi(3);

// Función para calcular el número mínimo de movimientos
const calcularMovimientos = (n) => {
  //Usamos la libreria math con la funcion pow para calcular 2^n - 1
  return Math.pow(2, n) - 1;
};

console.log(
  `\nNúmero mínimo de movimientos para 3 discos: ${calcularMovimientos(3)}`
);
