
//Ejercicio48: Dado un array eleva al cubo todos sus numeros y devuelve la mitad de cada uno.

// Ejemplos:
// elevaMitad([1, 2, 3, 4])  //Devuelve: [ 0.5, 4, 13.5, 32 ]

const elevaMitad = (numeros) => {

    return numeros.map(numero => (Math.pow(numero, 3) / 2));

};

console.log(elevaMitad([1, 2, 3, 4]));