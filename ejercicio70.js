
//Ejercicio70: Crea una funcion que dado un texto que contenga varias frases en minusculas,
//             logre poner en mayusculas las letras correctas del texto.

// Ejemplos:
// capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar.");
 
// Devuelve:
// Hola. Como estas. Soy Victor Robles. Me gusta programar.

const capitalizarFrase = (texto) => {

    let result = '';
    const separadas = texto.split('. ');

    for(let palabra of separadas){

        result += palabra.replace(palabra[0], palabra[0].toUpperCase()) + '. ';

    };

    return result;
};

console.log(capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar."));