//

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamanio) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamanio = tamanio;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get tamanio() {
    return this._tamanio;
  }

  set tamanio(tamanio) {
    this._tamanio = tamanio;
  }

  toString() {
    return `Monitor: [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio}]`;
  }
}

module.exports = Monitor;
