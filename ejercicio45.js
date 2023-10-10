//Ejercicio45: Dado un array de numeros, elimina los duplicados

// Ejemplos:
// eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6])
 
// // Devuelve:
// [ 1, 2, 3, 4, 5, 6 ]

const eliminarDuplicados = (numeros) => {

    //Ordenar array
    numeros.sort((a, b) => a - b);

    //Crear array vacio
    let unicos = [];

    //Recorrer array original, y comprobar si el elemento actual ya existe
    for(let numero of numeros){

        if(!unicos.includes(numero)) unicos.push(numero);

    };

    //Devolver el resultado
    return unicos;
};
console.log(eliminarDuplicados([2, 2, 3, 4, 5, 5, 5, 6, 1, 1]));