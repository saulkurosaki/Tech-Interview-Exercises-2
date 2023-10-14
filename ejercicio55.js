
//Ejercicio55: Dado un conjunto de enteros distintos, devuelve todos los resultados de posibles subconjuntos.

// Ejemplos:
// subconjuntos([1,2,3]);
 
// Devuelve:
// [
// [3],
// [1],
// [2],
// [1,2,3],
// [1,3],
// [2,3],
// [1,2],
// []
// ]

const subconjuntos = (numeros) => {

    let resultados = [[]];

    //Ordenar todos los numeros
    numeros.sort((a, b) => a - b);

    //Recorrer todos los numeros
    for(let i = 0; i < numeros.length; i++){

        //Calcular tamaño de la lista de subconjuntos
        const tamaño = resultados.length;

        //Iterar subconjunto actual
        for(let j = 0; j < tamaño; j++){

            //Añadir a resultados una copia del subconjunto actual
            //con el numero actual agregado
            resultados.push([...resultados[j], numeros[i]]);
            
        };

    };

    return resultados;
};

console.log(subconjuntos([1, 2, 3]));