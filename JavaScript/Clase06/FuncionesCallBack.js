// Aqui se puede seguir utilizando hosting
// Se pueden llamar funciones antes de declararlas
mifuncion1(); // Función 1
miFuncion2(); // Función 2


function mifuncion1() {
    console.log("Función 1");
}

function miFuncion2() {
    console.log("Función 2");
}

// Esto es trabajar con funciones de manera secuencial
// Se ejecutan en un orden, de arriba hacia abajo
mifuncion1();
miFuncion2();

// Funciones tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 + op2;
    funcionCallback('Resultado: '+resultado);
}

// Una funcion Callback es una función que se pasa como argumento a otra función
// El objetivo es que pueda ser utilizada para procesos que se ejecutan de manera asincrona(procesos que no se ejecutan de manera secuencial)
// Por ejemplo, en el caso de una función que realiza una operación matemática, se puede utilizar una función Callback para imprimir el resultado
// Cuando trabajamos con peticiones HTTP, por ejemplo, se puede utilizar una función Callback para manejar la respuesta

sumar(5, 10, imprimir); // 15

// Llamadas asincronas con uso de setTimeout
function miFuncionCallBack(){
    console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallBack, 3000); // Se ejecuta después de 3 segundos
// setTimeout es una función que permite ejecutar una función después de un tiempo determinado
// El primer argumento es la función que se va a ejecutar
// El segundo argumento es el tiempo en milisegundos que se va a esperar para ejecutar la función
// Esta no es un una funcion secuencial, es asincrona

setTimeout(function(){ console.log("Saludo asincrono 2"); }, 2000); // Se ejecuta después de 2 segundos+

setTimeout(() => { console.log("Saludo asincrono 7"); }, 7000); // Se ejecuta después de 7 segundos

// La funcion setTimeout 

let reloj = () => { 
    let fecha = new Date();
    //Backticks es una forma de crear cadenas de texto usando comillas invertidas
    // Se puede usar ${} para insertar variables dentro de la cadena
    
    console.log(`Hora: ${fecha.getHours}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

// setInterval es una función que permite ejecutar una función cada cierto tiempo
setInterval(reloj, 60000); // Se ejecuta cada segundo