
//Ejercicio32: Dado un texto, crea una función que sea capaz de generar un nuevo 
//             texto que incluya solo las palabras de 4 caracteres o mas.

// Ejemplos:
// fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 
// Devuelve: Hola Victor Robles, hace frio

const fraseFiltrada = (texto) => {

    //Separar las palabras y guardarlas en un array
    const palabras = texto.split(' ');

    //Filtrar el array con las palabras de 4 o mas caracteres
    const filtrado = palabras.filter(palabra => palabra.length >= 4).join(' ');

    //Devolver resultado
    return filtrado;

};

console.log(fraseFiltrada("Hola soy Victor Robles, hoy hace frio"));