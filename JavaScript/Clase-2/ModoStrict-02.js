// El modo estricto es una forma de escribir código JavaScript más seguro y limpio.
"use strict"; // Modo estricto

x = 10; // Esto lanzará un error porque x no ha sido declarada
console.log(x); // ReferenceError: x is not defined

function myFunction() {
  "use strict"; // Modo estricto dentro de la función
  y = 20; // Esto lanzará un error porque y no ha sido declarada
  console.log(y); // ReferenceError: y is not defined
}

myFunction(); // Llamada a la función
