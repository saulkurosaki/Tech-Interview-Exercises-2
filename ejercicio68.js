
//Ejercicio48: Crea una funcion que pueda generar contraseñas aleatorias.
//             Podrás pasar los siguientes parámetros para las contraseñas:

// - Longitud: Entre 6 y 20.
// - Con o sin mayúsculas.
// - Con o sin números.
// - Con o sin símbolos.
 
// Ejemplos:
// generarContraseña(12, true, true, false);

const generarContraseña = (longitud, mayus, numeros, simbolos) => {

    if(longitud < 6 || longitud > 20) return 'No se puede generar la contraseña';

    let contraseña = '';

    let diccionario = 'abcdefghijklmnopqrstuvwxyz';

    if(mayus) diccionario += diccionario.toUpperCase();
    if(numeros) diccionario += '0123456789';
    if(simbolos) diccionario += '!@#$%&*()/|\[]{}=<>.,'

    for(let contador = 0; contador < longitud; contador++){

        let indiceAleatorio = Math.floor(Math.random() * diccionario.length);
        contraseña += diccionario.charAt(indiceAleatorio);

    };
    
    return contraseña;
};

console.log(generarContraseña(18, true, true, true));