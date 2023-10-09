
//Ejercicio37: Crea dos funciones que comprueben si dado un array de numeros, todos ellos son pares.
//             Usando solo métodos del lenguaje y otra solo usando estructuras de control.

// Ejemplos:
// todosPares([1, 2, 3, 4]); // false
// todosPares([2, 6, 8, 12]); // true

//MÉTODOS DEL LENGUAJE
const todosParesV1 = (numeros) => {

    return numeros.every(numero => numero % 2 === 0) ? 'Todos los numeros SI son pares!! :D' : 'Todos los numeros NO son pares :c';

};

//ESTRUCTURAS DE CONTROL
const todosParesV2 = (numeros) => {

    //Recorrer array
    for (let i = 0; i < numeros.length; i++) {

        //Comprobar si es par o impar
        if(numeros[i] % 2 !== 0){
            return 'Todos los numeros NO son pares :c';
        };

    };

    //Devolver resultado
    return 'Todos los numeros SI son pares!! :D';
};

console.log(todosParesV1([1, 2, 3, 4]));
console.log(todosParesV1([2, 6, 8, 12]));
console.log();
console.log(todosParesV2([1, 2, 3, 4]));
console.log(todosParesV2([2, 6, 8, 12]));