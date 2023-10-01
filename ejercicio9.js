
//Ejercicio9: Crea una función que reciba un array de numeros
//            y calcule la suma de todos los numeros pares del array

//Ejemplo: sumarPares([2, 13, 6, 15]); //Resultado: 8

const sumarPares = (numeros) => {

    //Variable para acumular la suma
    let suma = 0;

    //Recorrer array de numeros
    numeros.forEach(numeroActual => {
        
        //En cada iteración comprobar si el numero recorrido es par
        if((numeroActual % 2) === 0){

            //Si es par sumar
            suma += numeroActual;

        };

    });

    //Una vez que termine el bucle devolver resultado\
    return 'La suma de todos los numeros pares del array es: ' + suma;

};

console.log(sumarPares([2, 13, 6, 15]));
console.log(sumarPares([2, 13, 6, 15, 12, 11, 14, 6, 1, 4]));