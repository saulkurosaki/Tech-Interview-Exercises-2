
//Ejercicio56: Crea una función que tome un array de objetos de peliculas y 
// una clave como parametros y devuelva un objeto donde cada valor de 
// la clave es un array con todos los objetos que tienen ese valor 
// para la clave especificada.

// Ejemplos:
// agruparPor(peliculas, 'año')

// Devuelve:
//  {
//      1982: [{ titulo: 'E.T.', año: 1982 }],
//      1985: [{ titulo: 'Regreso al futuro', año: 1985 }],
//      1984: [{ titulo: 'Cazafantasmas', año: 1984 }],
//      1987: [{ titulo: 'Dirty Dancing', año: 1987 }],
//      1991: [{ titulo: 'Terminator 2: El juicio final', año: 1991 }],
//      1993: [{ titulo: 'Parque Jurásico', año: 1993 }],
//      1994: [{ titulo: 'Forrest Gump', año: 1994 }]
//  }

const peliculas = [
    { titulo: 'E.T.', año: 1982 },
    { titulo: 'Regreso al futuro', año: 1985 },
    { titulo: 'Cazafantasmas', año: 1984 },
    { titulo: 'Dirty Dancing', año: 1987 },
    { titulo: 'Terminator 2: El juicio final', año: 1991 },
    { titulo: 'Parque Jurásico', año: 1993 },
    { titulo: 'Forrest Gump', año: 1994 },
];

const agruparPor = (array, clave) => {

    return array.reduce((grupos, elementoActual) => {

        const categoria = elementoActual[clave];

        if(!grupos[categoria]) grupos[categoria] = [];

        grupos[categoria].push(elementoActual);

        return grupos;

    }, {});

};

console.log(agruparPor(peliculas, 'año'));