# Promesas en JavaScript

## 📌 Conceptos Básicos

### Creación de una Promesa
```
let promesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion) {
        resolver("La promesa se resolvió correctamente");
    } else {
        rechazar("Se produjo un error");
    }
});
```
### Estados de una Promesa
✅ Resuelta (Fulfilled): Cuando se llama a resolver()

❌ Rechazada (Rejected): Cuando se llama a rechazar()

⏳ Pendiente (Pending): Estado inicial

### 🛠️ Manejo de Promesas

#### Método .then()
```
// Forma con dos callbacks
promesa.then(
    valor => console.log(valor),  // Éxito
    error => console.log(error)   // Error
);
```
#### Método .catch() (Recomendado)
```
promesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));
```
#### ⏱️ Promesas con setTimeout
```
let promesa2 = new Promise((resolver) => {
    setTimeout(() => resolver("Mensaje después de 3 segundos"), 3000);
});

promesa2.then(valor => console.log(valor));
```
### ✨ Async/Await (Sintaxis Moderna)
#### Función Async (devuelve promesa)
```
async function miFuncionConPromesa() {
    return 'saludos con async';
}

miFuncionConPromesa().then(console.log);
```
#### Uso de Await
```
async function ejemploAsyncAwait() {
    let miPromesa = new Promise((resolver) => {
        resolver("Promesa con await");
    });
    console.log(await miPromesa);
}
```
#### Con setTimeout
```
async function ejemploConTimeout() {
    let promesa = new Promise((resolver) => {
        setTimeout(() => resolver("Resuelto después de 3s"), 3000);
    });
    console.log(await promesa);
}
```
### 📚 Buenas Prácticas
#### Manejo de errores:

```
async function ejemplo() {
    try {
        const resultado = await miPromesa;
        console.log(resultado);
    } catch (error) {
        console.error("Error:", error);
    }
}
```
#### Encadenamiento:
```
promesa
    .then(procesarDatos)
    .then(mostrarResultado)
    .catch(manejarError);
```
#### Nombres descriptivos:
```
// Bien
new Promise((resolve, reject) => {...})

// Evitar
new Promise((res, rej) => {...})
```

### 🔄 Diagrama de Flujo de una Promesa
```
          [Nueva Promesa]
               |
        ╭──────┴──────╮
        ▼             ▼
   [Resuelta]     [Rechazada]
        |             |
    .then()        .catch()
        |             |
    [Éxito]      [Manejo Error]
```
### 📌 Notas Importantes
Las promesas son asíncronas por naturaleza

Siempre manejar los errores con .catch() o try/catch