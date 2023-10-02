
//Ejercicio12: Crea un programa que cuente las palabras de un texto

// Ejemplos:
// contarPalabras("El perro de san roque no tiene el rabo 
// porque es un perro muy muy malo");
 
// Devuelve:
// {
//   el: 2,
//   perro: 2,
//   de: 1,
//   san: 1,
//   roque: 1,
//   no: 1,
//   tiene: 1,
//   rabo: 1,
//   porque: 1,
//   es: 1,
//   un: 1,
//   muy: 2,
//   malo: 1
// }

const contarPalabras = (frase) => {

    //Crear un array con las palabras del texto, convertir a minúsculas, y quitar signos de acentuación
    const palabras = frase.toLowerCase()
                          .replace(/[^\w\s]/gi, '')
                          .split(' ');

    //Crear objeto vacio para almacenar las palabras y su contador
    let contadorPalabras = {};

    //Iterar el array que he generado y contar cuantas palabras hay de cada
    palabras.forEach(palabra => {
        
        if(palabra in contadorPalabras){
            contadorPalabras[palabra]++;
        }else{
            contadorPalabras[palabra] = 1;
        };

    });

    //Devolver palabras contadas
    return contadorPalabras;
};

console.log(contarPalabras("El perro de san roque no tiene el rabo porque es un perro muy muy malo"));