
//Ejercicio61: Dado una cadena de numeros , devuelve todas las combinaciones de letras 
//             posibles que el numero podría representar.

// Ejemplos:
// combinacionesLetras("23")

// Devuelve:
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

const combinacionesLetras = (numero) => {

    //Comprobar si el numero es valido
    if(numero.length === 0) return [];

    //Mapear letras
    const mapeo = [
        ' ', // 0
        '', // 1
        'abc', // 2
        'def', // 3
        'ghi', // 4
        'jkl', // 5
        'mno', // 6
        'pqrs', // 7
        'tuv', // 8
        'wxyz' // 9
    ];

    //Crear array para guardar resultados
    let resultados = [''];

    //Recorrer cada uno de los dígitos del numero
    for(const digito of numero){

        for(let i = 0, longitud = resultados.length; i < longitud; i++){

            const elementoAnterior = resultados.shift();

            for(let letra of mapeo[digito]){
                resultados.push(elementoAnterior + letra);
            };

        };

    };

    return resultados;
};

console.log(combinacionesLetras('23'));