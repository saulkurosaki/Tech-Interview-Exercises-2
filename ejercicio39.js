
//Ejercicio39: Dado un numero crea una función que genere todas la combinaciones de paréntesis validas.

// Ejemplos:
// combinacionesParentesis(3);
 
// Devuelve:
// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

const combinacionesParentesis = (numero) => {

    //Definir variable resultados
    let resultados = [];

    //Comprobar si el numero es valido
    if (numero < 1) return resultados;

    //Ejecutar función recursiva para generar parentesis
    generarParentesis('', numero, numero, resultados);
    
    //Devolver resultados
    return resultados;
};

//Contador Ejecuciones
let contadorEjecucionesRecursivas = 0;

//Función Recursiva
const generarParentesis = (combinacion, abiertos, cerrados, resultados) => {

    //Si no quedan parentesis abiertos y cerrados, añadir combinacion a resultados
    if(abiertos === 0 && cerrados === 0){

        resultados.push(combinacion);
        console.log('La operación se repitió: "' + contadorEjecucionesRecursivas + '" veces. Y su combinacion es: ' + combinacion);
        return true;

    };

    //Si aun quedan parentesis abiertos disponibles, añadimos 1 a la combinacion siguiendo con la recursion
    if(abiertos > 0){

        generarParentesis(combinacion + '(', abiertos - 1, cerrados, resultados);

    };

    //Si aun quedan parentesis cerrados disponibles, y hay al menos un parentesis abierto para cerrar,
    //añadimos 1 a la combinacion siguiendo con la recursion
    if(cerrados > 0 && abiertos < cerrados){

        generarParentesis(combinacion + ')', abiertos, cerrados - 1, resultados);

    };

    //Actualizar contador de recursiones
    contadorEjecucionesRecursivas++
};

console.log(combinacionesParentesis(3));