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
}

module.exports = Orden;
