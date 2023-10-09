
//Ejercicio36: Crea un programa que encuentre las parejas de numeros que como resultado dan
//             dan un numero que le pasamos a la función por parametro.

// Ejemplos:
// encontrarParejasConSuma([1, 2, 3, 4], 5);

// Devuelve: 
// [ [ 1, 4 ], [ 2, 3 ] ]

const encontrarParejasConSuma = (numeros, suma) => {

    //Array de numeros valido y que tenga longitud de 2
    if (!Array.isArray(numeros) || numeros.length < 2) {
        return false;
    };

    //Crear array de parejas de numeros
    let parejas = [];

    //Recorrer el array de numeros
    for (let numeroActual of numeros) {

        //Recorrer de nuevo a partir del elemento que recorro ahora
        for (let segundoNumero of numeros.slice(numeros.indexOf(numeroActual + 1))) {

            //Comprobar si la suma me da el resultado esperado
            if(numeroActual + segundoNumero === suma){

                parejas.push([numeroActual, segundoNumero]);

            };

        };

    };

    //Devolver parejas
    return parejas;
};

console.log(encontrarParejasConSuma([1, 2, 3, 4], 5));