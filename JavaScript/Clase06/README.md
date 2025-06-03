# Clase 6 - Funciones, Callbacks y Asincronía en JavaScript

En esta clase se abordan conceptos fundamentales del lenguaje JavaScript relacionados con el uso de **funciones**, **callbacks** y **mecanismos asincrónicos**. A continuación se presenta una explicación estructurada de los temas tratados.

---

## Temas Explicados

### 1. Hoisting en funciones

JavaScript permite **invocar funciones antes de su declaración** gracias al mecanismo llamado *hoisting* (elevación). Las funciones declaradas con la palabra clave `function` son elevadas al inicio del contexto de ejecución.

---

### 2. Ejecución secuencial

Se explicó cómo las funciones se ejecutan de forma secuencial, es decir, en el orden en el que aparecen en el código (de arriba hacia abajo), salvo que se introduzcan mecanismos asincrónicos.

---

### 3. Funciones tipo callback

Un **callback** es una función que se pasa como argumento a otra función y se ejecuta en algún momento dentro de ella. Es una herramienta clave para manejar procesos que pueden tomar tiempo o depender de otros factores (como una petición HTTP, una lectura de archivo, etc.).

#### ¿Por qué se usan callbacks?
- Para manejar la **asincronía** sin bloquear el flujo del programa.
- Para ejecutar código **después** de que se complete una operación.

---

### 4. Asincronía con `setTimeout`

`setTimeout` permite ejecutar una función **después de cierto tiempo** (expresado en milisegundos). No se ejecuta de forma inmediata ni secuencial, sino que **espera un retraso definido**.

- Muy útil para simular cargas, retrasos, o eventos programados.

---

### 5. Funciones anónimas y arrow functions

Durante el uso de `setTimeout`, se introdujeron:
- **Funciones anónimas:** funciones sin nombre, creadas en el momento.
- **Arrow functions (`=>`)**: una forma más concisa de escribir funciones.

Estas son especialmente útiles para callbacks rápidos o expresiones simples.

---

### 6. Repetición periódica con `setInterval`

`setInterval` permite ejecutar una función **repetidamente** cada cierto intervalo de tiempo. A diferencia de `setTimeout`, esta función sigue ejecutándose hasta que se detenga manualmente.

- Ideal para relojes, actualizaciones en tiempo real, y tareas periódicas.

---

## Conclusiones

- El **hoisting** permite organizar el código sin importar la posición de las funciones.
- Los **callbacks** permiten delegar comportamientos posteriores a eventos o procesos.
- El uso de **`setTimeout` y `setInterval`** introduce asincronía al flujo normal del programa.
- Estos conceptos son esenciales para la programación moderna en JavaScript, especialmente en el desarrollo web y la interacción con APIs.

---
