
//Ejercicio21: Crea una función que reciba un numero y me genere una matriz con el numero
//             de columnas y filas que le hemos proporcionado por parametro.

// Ejemplos:
// generarMatriz(4);

// Devuelve: 
// [
//   [ 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8 ],
//   [ 9, 10, 11, 12 ],
//   [ 13, 14, 15, 16 ]
// ]

const generarMatriz = (numero) => {

    //Crear un array vacio
    let matriz = [];

    //Variable acumuladora de la cifra a introducir en la matriz
    let numeroActual = 1;

    //Bucle para generar las filas
    for (let fila = 0; fila < numero; fila++) {

        //Crear una nueva fila con push
        matriz.push([]);

        //Bucle para generar cada numero de la matriz\
        for(let columna = 0; columna < numero; columna++){

            //Agregar numero a la fila actual
            matriz[fila].push(numeroActual);

            //Sumar uno al numeroActual
            numeroActual++;

        };

    };

    //Devolver la matriz
    return matriz;
};

console.log(generarMatriz(4));
console.log(generarMatriz(3));
console.log(generarMatriz(2));