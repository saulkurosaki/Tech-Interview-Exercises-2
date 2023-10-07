
//Ejercicio31: Dado un texto crea una función que sea capaz de invertir el orden de sus palabras.
//             Sin usar funciones nativas del lenguaje.

const invertirPalabras = (frase) => {

    let invertido = '';

    palabras = frase.split(' ');

    for(let i = palabras.length - 1; i >= 0; i--){

        if(palabras[i].length >= 1){
            invertido += palabras[i] + ' ';
        };

    };

    return invertido;
};

console.log(invertirPalabras('Hola    soy Saul Paredes'));