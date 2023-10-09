
//Ejercicio41: Crea una función que invierta los numeros de un numero entero.

// Ejemplos:
// invertirEntero(123)   // 321
// invertirEntero(-123)  // -321

const invertirEntero = (numero) => {

    let texto = numero.toString();
    let numeros = texto.split('');
    numeros.reverse();

    if(numeros[numeros.length - 1] === '-'){

        numeros.pop();
        numeros.unshift('-');

    };

    let invertido = numeros.join('');

    return parseInt(invertido);
};

console.log(invertirEntero(123));
console.log(invertirEntero(-123));