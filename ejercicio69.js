
//Ejercicio69: Crea una funcion que dada un texto, sea capaz de censurar palabras.

// Ejemplos:
// censurar("Texto de prueba", "texto") // ***** de prueba

const censurar = (texto, censura) => {

    let palabras = texto.split(' ');
    let resultado = '';

    for(let palabra of palabras){

        if(palabra.toLowerCase() === censura){
            resultado = texto.replace(palabra, '*'.repeat(palabra.length));
        };

    };

    return resultado;
};

console.log(censurar("Texto de prueba", "texto"));