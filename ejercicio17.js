
//Ejercicio: Dado un array de frases, contar el numero de palabras que tiene.

// Ejemplos:
// contarPalabras([
//                 "Hola, soy Víctor Robles WEB",
//                 "Me gusta programar",
//                 "Y soy desarrollador web"
//             ]);

// Devuelve: 12

const contarPalabras = (frases) => {

    //Definir una variable que acumule el total de palabras de cada frase
    let totalPalabras = 0;

    //Hacer un bucle para recorrer cada frase
    frases.forEach(fraseActual => {

        //Dividir frase actual en un array de palabras
        const palabras = fraseActual.split(' ');
        const numeroPalabras = palabras.length;

        //Sumar el total de palabras a la variable acumulador
        totalPalabras += numeroPalabras;

    });

    //Devolver el total de palabras
    return 'El total de palabras entre todas las frases son: ' + totalPalabras;
};

console.log(
    contarPalabras([
        "Hola, soy Víctor Robles WEB",
        "Me gusta programar",
        "Y soy desarrollador web"
    ])
);