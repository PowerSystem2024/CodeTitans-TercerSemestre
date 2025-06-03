//Funciones flecha en JavaScript

// Definición de una función normal
function miFuncion() {
    console.log("Hola desde la función miFuncion");
    
}

let miFuncionFlecha = () => {
    console.log("Hola desde la función miFuncion");
    
}

// Llamada a la función flecha
//No se aplica el concept hoisting a las funciones flecha
//el concept hoisting sirve para llamar a una función antes de su declaración

miFuncionFlecha(); 

//lo hacemos en una sola línea
const saludar = () => console.log("Hola desde la función saludar");

console.log(saludar); //undefined porque no retorna nada
saludar(); //Hola desde la función saludar

//otro ejemplo
const saludar2 = () => {
    return "Hola desde la función saludar2";
}

console.log(saludar2()); //Hola desde la función saludar2

//otra forma de hacerlo
const saludar3 = () => 'Hola desde la función saludar3';

console.log(saludar3()); //Hola desde la función saludar3

//continuamos con otro ejemplo
const regresarObjeto = () => ({nombre: 'Juan', edad: 30, profesion: 'Desarrollador'});

console.log(regresarObjeto()); //{ nombre: 'Juan', edad: 30, profesion: 'Desarrollador' }

const funcionParametros = (mensaje) => {
    console.log(mensaje);
}

funcionParametros("Hola desde la función clasica"); //Hola desde la función clasica

//se pueden omitir los paréntesis si solo hay un parámetro
const funcionConParametros = mensaje => console.log(mensaje)

funcionConParametros('Otra forma de trabajar con funcion flecha')

//Ahora vemos funciones flechas con varios parametros
//Podemos abrir esta funcion y tener mas cosas adentro
const funcionConVariosParametros = (op1, op2) => {
    resultado = op1 + op2;
    return resultado;
}

console.log(funcionConVariosParametros(10, 20)); //30
  