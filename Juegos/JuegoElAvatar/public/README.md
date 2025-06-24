# 🔥 Juego Web: Avatar - Batalla Elemental 🌊🌪️🌱

Proyecto interactivo basado en el universo de **Avatar: La Leyenda de Aang**, desarrollado con HTML, CSS y JavaScript. Permite al usuario seleccionar un personaje, elegir un ataque elemental y enfrentarse en una batalla tipo piedra-papel-tijera contra un rival aleatorio.

---

## 📁 Estructura Inicial del Proyecto

El proyecto se organizó desde terminal con la siguiente estructura:

```
juego-avatar/
 ┣ public/
 ┃ ┣ css/         # Estilos visuales (archivo styles.css)
 ┃ ┣ js/          # Lógica del juego (archivo avatar.js)
 ┃ ┣ assets/      # Imágenes y otros recursos
 ┃ ┗ avatar.html  # Página principal del juego
┣ README.md
```

---

## 🧱 Construcción del HTML

### 📌 Radio Buttons para Selección de Personajes

Se implementaron elementos `<input type="radio">` para que el jugador pueda seleccionar entre **Zuko**, **Katara**, **Toph** y **Aang**. Cada opción está vinculada a una etiqueta `<label>` para mejorar la accesibilidad.

```html
<label for="zuko">Zuko</label>
<input type="radio" name="personaje" id="zuko" />
```

La propiedad `name="personaje"` asegura que solo un personaje pueda ser elegido a la vez.

---

## 🎨 Estilo y Maquetado con CSS

El archivo `styles.css` se enfocó en:

- Centrar todos los elementos visuales usando **flexbox**.
- Aplicar un fondo oscuro con alto contraste.
- Estilizar botones con colores representativos de los elementos.
- Agregar bordes redondeados y sombras suaves para estética moderna.

```css
body {
  background-color: #1f1e1e;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

---

## ⚔️ Lógica del Juego en JavaScript

### 🧠 Flujo Básico

1. El jugador elige un personaje.
2. El enemigo se genera aleatoriamente.
3. Ambos seleccionan ataques.
4. Se compara el resultado según la mecánica:

   - **Puño > Barrida**
   - **Patada > Puño**
   - **Barrida > Patada**

5. Se actualizan las vidas.
6. El juego finaliza cuando uno pierde todas las vidas.

### 📍 Interacción con el DOM

Se usaron selectores como `getElementById` y `querySelector` para capturar las selecciones del jugador y actualizar dinámicamente el contenido con `innerText`.

```js
const personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');
```

### 🎲 Elección Aleatoria

Una función retorna un personaje aleatorio de entre los no seleccionados para representar al enemigo:

```js
function aleatoria() {
  const personajes = ["Zuko", "Katara", "Toph", "Aang"];
  const indice = Math.floor(Math.random() * personajes.length);
  return personajes[indice];
}
```

### 🧪 Funciones Principales

| Función                       | Propósito                                                |
|-------------------------------|----------------------------------------------------------|
| seleccionarPersonajeJugador() | Obtiene el personaje del jugador desde el DOM.           |
| aleatoria()                   | Devuelve un personaje enemigo aleatorio.                 |
| combatir()                    | Compara ataques y actualiza las vidas.                   |
| mostrarResultado()            | Muestra mensajes dinámicos según el turno.               |
| actualizarVidas()             | Reduce la vida del jugador o enemigo.                    |
| finalizarJuego()              | Muestra el resultado final y bloquea nuevas acciones.    |
| reiniciarJuego()              | Restablece todo para jugar otra vez.                     |

---

## 📘 Conceptos Técnicos Usados

- **DOM (Document Object Model):** Interacción con HTML desde JavaScript.
- **Eventos (addEventListener):** Captura de clics y ejecuciones de funciones.
- **Randomización con Math.random():** Para ataques y enemigos automáticos.
- **Propiedad innerText:** Actualización en vivo de información visible.
- **Estructura condicional (if/else):** Para determinar ganadores por turno.

---

## 💡 Aprendizajes Clave

- Separación de responsabilidades entre HTML, CSS y JS.
- Implementación de lógica simple de juego en entorno web.
- Dinamismo en la interfaz usando JS sin frameworks.
- Mejora visual aplicando estilos modernos y centrados.

---

## 🚀 Próximos Pasos

- Añadir sonidos y animaciones a los ataques.
- Mostrar imágenes personalizadas de cada personaje.
- Registrar el historial de combates o puntajes.
- Adaptar para móviles con diseño responsive.

---
