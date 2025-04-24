// Clase hija de DispositivoEntrada
// que representa un ratón y extiende su funcionalidad
const DispositivoEntrada = require("./DispositivoEntrada.js");

class Raton extends DispositivoEntrada {
  static contadorRaton = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRaton;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
  }
}

// Exportamos la clase Raton
module.exports = Raton;
