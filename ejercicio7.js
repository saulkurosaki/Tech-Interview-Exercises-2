
//Ejercicio7: Dado un array de enteros, detectar si esa lista de 
//            números es una permutation del 1 al ultimo numero del array.
//            Una permutation es una secuencia de números en orden sin que falte ninguno entre ellos.
//            Devolver el numero faltante mas grande. El array puede venir desordenado.

//Ejemplos:
//          permutacion([1, 2, 3, 4, 5])   Devuelve: 5
//          permutacion([1, 2, 3, 5]))     Devuelve: 4

const permutacion = (numeros) => {

    //Ordenar el array de numeros
    numeros.sort((menor, mayor) => menor - mayor);

    //Pila de numeros faltantes
    let numerosFaltantes = [];

    //Recorrer el array y comprobar si cada elemento es igual al siguiente numero +1
    for(let i = 0; i < numeros.length; i++){

        let numeroFaltante = numeros[i] + 1;

        if(numeros[i + 1] !== numeroFaltante){
            numerosFaltantes.push(numeroFaltante);
        };

    };

    //Remover el ultimo numero de la variable numerosFaltantes
    numerosFaltantes.pop();

    //Si todo es correcto, devolver el numero mas grande
    if(numerosFaltantes.length >= 1){
        
        return 'El numero faltante mas grande en el arreglo es: "' + numerosFaltantes[numerosFaltantes.length - 1] + '"';

    }else{

        return 'La secuencia de numeros es correcta: ' + numeros;

    };
};

console.log(permutacion([2, 1, 4, 6, 8, 10])); //Incorrecta secuencia de numeros
console.log(permutacion([2, 1, 5, 9, 4, 3, 6, 8, 7, 10])); //Correcta secuencia de numeros