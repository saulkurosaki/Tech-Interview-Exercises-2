
//Ejercicio52: Dado un array de arrays, unir todos los arrays en uno solo sin usar la funcion flat() o concat()
//             de JS, solo estructuras de control y funciones basicas de arrays.

// Ejemplos:
// const numeros = [  
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// limpiarNumeros(numeros);

// Devuelve: 
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const limpiarNumeros = () => {

    let resultado = [];

    for(let subarray of numeros){
        for(let numero of subarray){
            resultado.push(numero);
        };
    };

    return resultado;
};

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(limpiarNumeros(numeros));