const readline = require("readline"); // Importamos el módulo readline para leer la entrada del usuario
const SaltoCaballo = require("./saltoDelCaballo");

// Interfaz para solicitar las coordenadas del caballo
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicitamos las coordenadas del caballo al usuario
rl.question("x = ", (x) => {
  // Validamos que x sea un número
  rl.question("y = ", (y) => {
    // Validamos que y sea un número
    try {
      const caballo = new SaltoCaballo(parseInt(x), parseInt(y)); // Creamos una instancia del problema
      const solucion = caballo.resolverProblema();
      if (solucion) {
        caballo.escribirTablero();
      } else {
        console.log("No se encontró una solución.");
      }
    } catch (e) {
      console.log("No se pudo probar el algoritmo: " + e.message);
    }
    rl.close(); // Cerramos la interfaz de lectura
  });
});
