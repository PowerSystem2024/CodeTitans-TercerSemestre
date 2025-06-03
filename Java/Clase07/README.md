# 📦 Proyecto: Uso de Interfaces en Java

Este proyecto demuestra cómo utilizar **interfaces en Java** para definir contratos de comportamiento que pueden ser implementados por múltiples clases. Es una base fundamental para comprender conceptos como el **polimorfismo**, la **programación orientada a interfaces**, y la **arquitectura de software desacoplada**, que son pilares para construir aplicaciones mantenibles y escalables.

---

## 📚 Conceptos Clave

### 🧩 Interfaces en Java

- Una **interface** es un contrato que define un conjunto de métodos que una clase debe implementar.
- No contiene lógica de implementación, solo las firmas de métodos.
- Todos sus métodos son **públicos y abstractos** por defecto.
- Los atributos son automáticamente **`public static final`** (constantes).
- Una clase puede implementar varias interfaces.

Este proyecto define una interfaz `IAccesoDatos` con métodos como:

- `insertar()`
- `listar()`
- `actualizar()`
- `eliminar()`

---

### 🏗️ Implementaciones

Se incluyen dos clases que implementan esta interfaz:

- `ImplementacionMySQL`
- `ImplementacionOracle`

Ambas proporcionan su propia lógica para los métodos definidos en la interfaz.

---

### 🔁 Polimorfismo con Interfaces

Mediante el uso de una variable de tipo interfaz (`IAccesoDatos`), se puede apuntar a cualquier objeto que implemente esa interfaz. Esto permite cambiar fácilmente la lógica sin modificar la estructura del código:

```java
IAccesoDatos datos = new ImplementacionMySQL();
datos.listar(); // Ejecuta lógica específica de MySQL

datos = new ImplementacionOracle();
datos.listar(); // Ejecuta lógica específica de Oracle
```

## ¿Qué está pasando aquí?

- **`IAccesoDatos`** es una interfaz que define métodos como `listar()`.
- **`ImplementacionMySQL`** y **`ImplementacionOracle`** son clases que implementan esa interfaz, cada una con su lógica particular.
- Al asignar diferentes implementaciones a la variable `datos`, puedes cambiar el comportamiento en tiempo de ejecución utilizando el mismo tipo de referencia. ¡Esto es polimorfismo!

---

## Métodos y Clases `static` vs No-`static`

| Característica   | static                               | No static (instancia)             |
|------------------|--------------------------------------|-----------------------------------|
| **Pertenencia**  | A la clase                           | A la instancia (objeto)           |
| **Uso de memoria**| Cargado una sola vez en memoria      | Cada objeto tiene su propia copia |
| **Acceso**       | Se puede llamar sin crear un objeto  | Requiere crear un objeto de la clase |

---

### ¿Qué hacer si un método NO es `static` pero se necesita en el `main`?

Como `main` es un método `static`, no puede llamar directamente a métodos no estáticos. En este caso, debes crear una instancia de la clase que contiene el método:

```java
MiClase obj = new MiClase();
obj.metodoNoEstatico();
```

También puedes convertir el método en `static` si no depende de variables de instancia, aunque esto no siempre es lo ideal en términos de diseño orientado a objetos.

---

## Conclusión

Este proyecto es una introducción sólida al uso de **interfaces** y **polimorfismo** en Java. Te prepara para trabajar con patrones de diseño como **DAO**, **Service Layer** o incluso para desarrollar con frameworks como **Spring**, que se basan extensamente en este principio de diseño desacoplado.
