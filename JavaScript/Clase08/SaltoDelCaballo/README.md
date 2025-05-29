# 🐴 Salto del Caballo (Algoritmo de Backtracking)

Este proyecto implementa el **algoritmo del salto del caballo** en un tablero de ajedrez de 8x8, utilizando la técnica de **backtracking**.

## 📌 ¿En qué consiste el problema?

El **salto del caballo** consiste en encontrar una secuencia de movimientos que le permitan a un caballo de ajedrez recorrer **todas las casillas del tablero** exactamente una vez, comenzando desde una posición dada.  
El caballo puede realizar 8 movimientos posibles, según las reglas del ajedrez.

El algoritmo verifica:

- Que el movimiento esté **dentro del tablero**.
- Que la casilla de destino **no haya sido visitada**.
- Y si no puede continuar, **retrocede** para intentar otras alternativas (esto es el _backtracking_).

---

## ⚙️ Tecnologías

- Lenguaje: **JavaScript**
- Se ejecuta desde la **consola**

---

## ▶️ Ejecución

1. Crea dos archivos:

   - `main.js` → donde se pide la entrada del usuario.
   - `saltoCaballo.js` → contiene la lógica del algoritmo.

2. Ejecuta el programa desde la terminal:

```bash
node main.js

```

3. El programa solicitará las coordenadas iniciales del caballo (entre 1 y 8).
   Por ejemplo:

```bash
x = 1
y = 1
```

💡 Lógica del Algoritmo
En el archivo saltoCaballo.js, se define:

El tablero de 8x8.

Los 8 posibles movimientos del caballo:

```javascript
const SALTO = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];
```

Se utiliza una función recursiva llamada resolverProblemaCaballo(x, y, move) para intentar todas las combinaciones de movimientos válidos desde la posición actual.

🔁 ¿Dónde se encuentra el Backtracking?
El backtracking se aplica en esta parte del código:

```javascript
if (nx >= 1 && nx <= N && ny >= 1 && ny <= N && tablero[nx][ny] === 0) {
  tablero[nx][ny] = move;

  if (move < N * N) {
    resolverProblemaCaballo(nx, ny, move + 1);

    if (!exito) {
      tablero[nx][ny] = 0; // Aquí se deshace el movimiento si no conduce a solución
    }
  } else {
    exito = true;
  }
}
```

👉 Esta línea:

```javascript
tablero[nx][ny] = 0;
```

es la vuelta atrás: si un movimiento no conduce a una solución, se desmarca la casilla para intentar otro camino.
