# Manejo de errores y buenas prácticas en JavaScript

Este documento explica conceptos fundamentales para escribir código más seguro y mantenible en JavaScript moderno, enfocado en el uso de `"use strict"`, manejo de errores y declaración de variables.

---

## ¿Qué es `"use strict"`?

La directiva `"use strict"` activa un modo estricto en JavaScript que impone reglas más estrictas al escribir código. Previene errores comunes, como el uso de variables no declaradas, y ayuda a que el comportamiento del código sea más predecible y seguro.

---

## Manejo de errores con `try`, `catch` y `finally`

El bloque `try` permite ejecutar código que puede fallar. Si ocurre un error, se captura con `catch`, permitiendo manejarlo sin que el programa se detenga. El bloque `finally` se ejecuta siempre, haya o no errores, lo cual es útil para limpiar recursos o ejecutar lógica final.

---

## Lanzamiento de errores personalizados

JavaScript permite lanzar errores propios mediante `throw`. Esto es útil para validar datos y asegurar condiciones específicas durante la ejecución. Por ejemplo, se puede lanzar un error si una variable esperada no es un número o si un valor no cumple una condición esperada.

---

## Declaración de variables: `var`, `let` y `const`

- **`var`**: Tiene un ámbito de función y puede ser re-declarada. Es menos segura y no se recomienda en código moderno.
- **`let`**: Tiene un ámbito de bloque. Se puede reasignar pero no redeclarar en el mismo ámbito.
- **`const`**: También tiene un ámbito de bloque y no se puede reasignar. Es ideal para valores constantes o referencias que no cambiarán.

---

## Conclusiones

El uso de `"use strict"`, junto con una gestión adecuada de errores y la declaración correcta de variables (`let` y `const`), mejora la calidad del código, facilita su mantenimiento y reduce errores inesperados en tiempo de ejecución.

---
