
//Ejercicio59: Crea una función que retorne el número total de bumeranes de un 
//             array de números enteros e imprima cada uno de ellos.
 
// Un bumeran (bumeran, boomerang) es una secuencia formada por 3 números seguidos, 
// en el que el primero y el último son iguales, y el segundo es diferente. 
// Por ejemplo [2, 1, 2].
 
// Ejemplos:
// contarBumeranes([2, 1, 2, 3, 3, 4, 2, 4])
 
// Hay 2 bumeranes: [[2, 1, 2], [4, 2, 4]]

const contarBumeranes = (numeros) => {

    let contador = 0;
    let bumeranes = [];

    for(let i = 0; i < numeros.length; i++){

        const primerNumero = numeros[i];
        const segundoNumero = numeros[i+1];
        const tercerNumero = numeros[i+2];

        if(primerNumero === tercerNumero && primerNumero !== segundoNumero){

            contador++;
            bumeranes.push([primerNumero, segundoNumero, tercerNumero]);

        };

    };

    return [contador, bumeranes];
};

let bum = contarBumeranes([2, 1, 2, 3, 3, 4, 2, 4]);
console.log('Hay', bum[0], 'bumeranes:', bum[1]);