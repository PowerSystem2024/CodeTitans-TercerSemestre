//importando las clases necesarias
const Raton = require("./Raton");
const Teclado = require("./Teclado");
const Monitor = require("./Monitor");
const Computadora = require("./Computadora");
const Orden = require("./Orden");

// Creando objetos
const raton1 = new Raton("USB", "HP");
const raton2 = new Raton("Bluetooth", "Dell");
const teclado1 = new Teclado("USB", "HP");
const teclado2 = new Teclado("Bluetooth", "Logitech");
const monitor1 = new Monitor("HP", '15"');
const monitor2 = new Monitor("Dell", '27"');

// Creando computadoras
const computadora1 = new Computadora("HP Pavilion", monitor1, teclado1, raton1);
const computadora2 = new Computadora("Dell XPS", monitor2, teclado2, raton2);

// Creando órdenes
const orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

// Segunda orden con dos computadoras
const orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();



// Probando la función imprimir
Orden.imprimir(raton1); // Es una instancia de la clase Raton
Orden.imprimir(teclado1); // Es una instancia de la clase Teclado
Orden.imprimir(monitor1); // Es una instancia de la clase Monitor
Orden.imprimir(computadora1); // Es una instancia de la clase Computadora
Orden.imprimir(orden1); // Es una instancia de la clase Orden
Orden.imprimir(orden2); // Es una instancia de la clase Orden