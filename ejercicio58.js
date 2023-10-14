
//Ejercicio58: Crea una función que tome una cadena de caracteres como argumento 
//             y devuelva una nueva cadena que contenga únicamente las letras 
//             únicas de la cadena original.
 
// Las letras deben aparecer en el mismo orden en que se 
// encontraron en la cadena original.
 
// Ejemplos:
// letrasUnicas("Hola soy Victor Robles WEB")
 
// Devuelve:
// Hola syVictrRbeWEB

const letrasUnicas = (cadena) => {

    let letrasUnicas = [];

    for(let letra of cadena){
        if(!letrasUnicas.includes(letra) && letra !== ' ') letrasUnicas.push(letra);
    };

    return letrasUnicas.join('');
};

console.log(letrasUnicas("Hola soy Victor Robles WEB"));