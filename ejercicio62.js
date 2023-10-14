
//Ejercicio62: Dado un diccionario de letras disponibles:
// [
//     ['A', 'B', 'C', 'D'],
//     ['S', 'V', 'C', 'S'],
//     ['A', 'D', 'O', 'E']
// ]

//   Crea una función que me diga si la palabra que le paso
//   como parametro se puede formar con las letras del
//   diccionario disponibles.

//  ¡PERO OJO! Cada vez que se usa una letra, se elimina del array.

// Ejemplos:
// puedeFormarPalabra('BESO', diccionario)   // true
// puedeFormarPalabra('SOSO', diccionario)   // false

const puedeFormarPalabra = (palabra) => {

    let resultado = null;

    let diccionario = [
        ['A', 'B', 'C', 'D'],
        ['S', 'V', 'C', 'S'],
        ['A', 'D', 'O', 'E']
    ];

    let todasLasLetras = diccionario.flat();

    for(let letra of palabra){

        if(!todasLasLetras.includes(letra)) resultado = false;

        todasLasLetras.splice(todasLasLetras.indexOf(letra), 1);

    };

    if(resultado === false){
        resultado = false;
    }else{
        resultado = true;
    };

    return resultado;
};

console.log(puedeFormarPalabra('BESO'));
console.log(puedeFormarPalabra('SOSO'));