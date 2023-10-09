
//Ejercicio38: Crea una función que convierta un numero a binario.

// Ejemplos:
// aBinario(10) // 1010
// aBinario(76) // 1001100

const aBinario = (numero) => {

    //Crear una variable para el resultado
    let resultado = '';

    //Mientras el numero pasado sea mayor a cero, continuaremos dividiendo el numero entre 2 y añadiendo el resto al resultado
    while(numero > 0){

        resultado = (numero % 2) + resultado;

        numero = Math.floor(numero / 2);
    };

    return parseInt(resultado);
};

console.log(aBinario(10)); // 1010
console.log(aBinario(76)); // 1001100