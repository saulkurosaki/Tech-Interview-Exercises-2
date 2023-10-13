
//Ejercicio49: Crea una funcion que dado el array de numeros, devuelva el numero mas pequeño de la matriz.
//             No puedes ordenar el array, solo estructuras de control.

// Ejemplos:
// elMasPequeño([8,9,99,88,77,1,12,13,6,7])  // Devuelve: 1

const elMasPequeño = (numeros) => {

    let peque = numeros[0];

    for(let numero of numeros){

        if(numero < peque) peque = numero;

    };

    return peque;
};

console.log(elMasPequeño([8,9,99,88,77,1,12,13,6,7]))