//clase Computadora que representa una computadora con un monitor, teclado y ratón

class Computadora {
  static contadorComputadoras = 0; // Contador de computadoras

  constructor(nombre, monitor, teclado, raton) {
    // Constructor de la clase Computadora
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  // Getter para el ID de la computadora
  get idComputadora() {
    return this._idComputadora;
  }

  toString() {
    // Método para representar la computadora como una cadena
    // Llama al método toString de cada componente y los concatena
    return `Computadora ${this._idComputadora}: ${this._nombre}
        ${this._monitor.toString()}
        ${this._teclado.toString()}
        ${this._raton.toString()}`;
  }
}

module.exports = Computadora;
