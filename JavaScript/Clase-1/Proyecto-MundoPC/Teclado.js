//clase hija de DispositivoEntrada
const DispositivoEntrada = require("./DispositivoEntrada.js");

class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
  }
}

// Exportar la clase Teclado
module.exports = Teclado;
