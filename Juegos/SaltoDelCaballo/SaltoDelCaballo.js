// Clase que representa el problema del salto del caballo
class SaltoCaballo {
  //Crea un tablero de N x N y lo inicializa
  // con ceros, y define los posibles saltos del caballo.
  constructor(x, y) {
    this.N = 8;
    this.tablero = Array.from({ length: this.N + 1 }, () =>
      Array(this.N + 1).fill(0)
    );
    this.SALTO = [
      // Definición de los posibles saltos del caballo
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];
    this.exito = false; // Indica si se encontró una solución

    if (x < 1 || x > this.N || y < 1 || y > this.N) {
      throw new Error("Coordenadas fuera de rango");
    }

    this.x0 = x;
    this.y0 = y;
    this.tablero[this.x0][this.y0] = 1;
  }

  // Método que inicia el proceso de resolución del problema
  resolverProblema() {
    this.saltoCaballo(this.x0, this.y0, 2);
    return this.exito;
  }

  // Método recursivo que intenta realizar los saltos del caballo
  saltoCaballo(x, y, i) {
    let k = 0;
    let nx, ny;

    // Recorre los posibles saltos del caballo
    do {
      nx = x + this.SALTO[k][0];
      ny = y + this.SALTO[k][1];

      if (
        nx >= 1 &&
        nx <= this.N &&
        ny >= 1 &&
        ny <= this.N &&
        this.tablero[nx][ny] === 0
      ) {
        this.tablero[nx][ny] = i;

        if (i < this.N * this.N) {
          this.saltoCaballo(nx, ny, i + 1);

          if (!this.exito) {
            this.tablero[nx][ny] = 0;
          }
        } else {
          this.exito = true;
        }
      }
      k++;
    } while (k < 8 && !this.exito); //se detiene si se encuentra una solución
  }

  // Método que imprime el tablero en la consola
  escribirTablero() {
    for (let i = 1; i <= this.N; i++) {
      let fila = "";
      for (let j = 1; j <= this.N; j++) {
        fila += this.tablero[i][j].toString().padStart(2, "0") + " ";
      }
      console.log(fila);
    }
  }
}

module.exports = SaltoCaballo;
