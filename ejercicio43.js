
//Ejercicio43: Dada una colección de letras:
// [
//     ['A','B','C','D'],
//     ['Z','V','K','S'],
//     ['F','G','O','E']
//  ]

//  Crea una función que me diga si la palabra que le paso como parametro 
//  se puede formar con las letras de la colección

//  Ejemplos:
//  puedeFormarPalabra('PERRO', coleccion)  // false
//  puedeFormarPalabra('CASO', coleccion)   // true

const coleccion = [
    ['A', 'B', 'C', 'D'],
    ['Z', 'V', 'K', 'S'],
    ['F', 'G', 'O', 'E']
];

const puedeFormarPalabra = (palabra, diccionario) => {

    //Aplanar array en uno solo
    let todasLasLetras = diccionario.flat();

    //Recorrer cada letra de la palabra
    for(letra of palabra){

        //Comprobar si la letra existe en el diccionario
        if(!todasLasLetras.includes(letra)) return 'La palabra: "' + palabra + '" NO se puede formar con las letras dadas... :c';

    };

    return 'La palabra: "' + palabra + '" SI se puede formar con las letras dadas!!! :D';
};

console.log(puedeFormarPalabra('PERRO', coleccion));
console.log(puedeFormarPalabra('CASO', coleccion));