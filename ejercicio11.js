
//Ejercicio11: Crea una función a la cual se le pase un array de numeros y un 
//             numero que sera el resultado de la suma de los dos valores

//Ejemplos:
// sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
// sumarDos([4, 5, 9, 1], 10) // [9, 1]
// sumarDos([1, 2, 3, 4], 5) // [2, 3]  

const sumarDos = (numeros, resultado) => {

    //Recorrer el array de numeros
    for (let i = 0; i < numeros.length; i++) {

        //Calculo para sacar el segundo numero para devolver
        let primerNumero = numeros[i];
        let segundoNumero = resultado - primerNumero;

        //Comprobar si existe un segundo numero en el array que sumado
        //al actual sea igual al resultado esperado. Y comprobar también
        //que la variable segundoNumero es distinto al primerNumero

        if (numeros.includes(segundoNumero) && segundoNumero !== primerNumero) {

            //Si se cumple la condición devolver un array con el numero actual
            //y el segundoNumero que he calculado
            return primerNumero + ' + ' + segundoNumero + ' = ' + resultado;

        };

    };

};

console.log(sumarDos([3, 7, 8, 2], 10));
console.log(sumarDos([4, 5, 9, 1], 10));
console.log(sumarDos([1, 2, 3, 4], 5));