
//Ejercicio16: Crea una función que meta en una caja de asteriscos la frase
//             que le pasamos por parametro

// Ejemplos:
// mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
// **********
// * Hola   *
// * soy    *
// * Víctor *
// * Robles *
// * WEB    *
// **********

const mostrarTextoCaja = (frase) => {

    //Separar la frase en palabras y ver cuantos caracteres tiene la mas larga
    const palabras = frase.split(' ');
    let longitudMaxima = 0;

    palabras.forEach(palabra => {
        longitudMaxima = Math.max(longitudMaxima, palabra.length);
    });

    //Huecos por defecto extras
    const huecosPorDefecto = 4;

    //Imprimir la tapadera de arriba
    const asteriscosTotales = longitudMaxima + huecosPorDefecto;
    console.log('*'.repeat(asteriscosTotales));

    //Recorrer palabras y mostrarlas una por linea dentro de la caja
    palabras.forEach(palabra => {
        const espacios = ' '.repeat(longitudMaxima - palabra.length);
        console.log(`* ${palabra}${espacios} *`);
    });

    //Imprimir la linea final de asteriscos
    console.log('*'.repeat(asteriscosTotales));

};

mostrarTextoCaja('Hola soy Saul Paredes Fano');