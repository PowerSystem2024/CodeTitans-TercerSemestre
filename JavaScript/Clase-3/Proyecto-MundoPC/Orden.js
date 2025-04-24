
const Raton = require("./Raton");
const Teclado = require("./Teclado");
const Monitor = require("./Monitor");
const Computadora = require("./Computadora");

//Clase contenedora de computadoras que representa una orden de compra

class Orden {
  static contadorOrdenes = 0; // Contador de órdenes

  constructor() {
    // Constructor de la clase Orden
    // Inicializa el ID de la orden y la lista de computadoras
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    // Getter para el ID de la orden
    // Devuelve el ID de la orden
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    // Método para agregar una computadora a la orden
    // Verifica si el objeto pasado es una instancia de Computadora
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    // Método para mostrar la orden
    // Verifica si hay computadoras en la orden
    let ordenStr = `Orden: ${this._idOrden}\nComputadoras: \n`;

    for (let computadora of this._computadoras) {
      // Itera sobre las computadoras
      // Llama al método toString de cada computadora y lo concatena a la cadena de orden
      ordenStr += `${computadora.toString()}\n`;
    }

    console.log(ordenStr);

    // Si no hay computadoras, muestra un mensaje indicando que la orden está vacía
    if (this._computadoras.length === 0) {
      console.log("La orden está vacía.");
    } else {
      console.log(ordenStr);
    }
  
  }
  // Método estático para aplicar polimorfismo
  static imprimir(tipo) {
    console.log(tipo.toString());
    if (tipo instanceof Raton) {
      console.log("Es una instancia de la clase Raton");
    } else if (tipo instanceof Teclado) {
      console.log("Es una instancia de la clase Teclado");
    } else if (tipo instanceof Monitor) {
      console.log("Es una instancia de la clase Monitor");
    } else if (tipo instanceof Computadora) {
      console.log("Es una instancia de la clase Computadora");
    } else if (tipo instanceof Orden) {
      console.log("Es una instancia de la clase Orden");
    } else if (tipo instanceof Object) {
      console.log("Es una instancia genérica de la clase Object");
    }
  }

}

// En el contexto del polimorfismo, la clase Orden no es directamente un ejemplo de polimorfismo
//  en sí misma, pero interactúa con el polimorfismo al trabajar con objetos de diferentes clases 
// (Raton, Teclado, Monitor, Computadora) de manera uniforme. Esto se logra mediante el uso del
//  método imprimir (ya sea estático o de instancia) que utiliza el operador instanceof para 
// determinar el tipo de objeto y realizar acciones específicas.
module.exports = Orden;
