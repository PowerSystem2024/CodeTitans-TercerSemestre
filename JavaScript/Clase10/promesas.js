let promesa = new Promise ((resolver, rechazar) => {
    let expresion = true;
    if (expresion) {
        resolver("La promesa se resolvio correctamente");
    } else {
        rechazar("Se produjo un error");
    }
})

// promesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

//// Llamando a la promesa
// promesa
//     .then(valor => console.log(valor))
//     .catch(error => console.log(error));

let promesa2 = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver("Saludos desde promesa 2, callback, funcion flecha y setTimeout"), 3000);
})

//Llamando a promesa2 con setTimeout
// promesa2.then(valor => console.log(valor));

//Async indica que la funcion regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesas y async';
}

// miFuncionConPromesa()
//     .then(valor => console.log(valor))

//Async/Await
async function miFuncionConAsyncAwait() {
    let miPromesa = new Promise((resolver) => {
        resolver("Promesa con async/await");
    });
    console.log(await miPromesa);
    
}
//llamando la funcion
miFuncionConAsyncAwait()

async function miFuncionConAsyncAwaitSetTimeout() {
    let miPromesa2 = new Promise((resolver) => {
        console.log('Inicio Funcion');
        setTimeout(()=> resolver("Promesa con async/await y SETTIMEOUT"), 3000);
        console.log('Fin Funcion');
        
    });
    console.log(await miPromesa2);
    
}

//llamando la funcion
miFuncionConAsyncAwaitSetTimeout()