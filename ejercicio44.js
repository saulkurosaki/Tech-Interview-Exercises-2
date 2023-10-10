
//Ejercicio44: Crea una función que detecte si un string es un Pangrama o no.
//             Un pangrama es una frase que incluye todas las letras del abecedario.
 
// Ejemplos:
// esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del árbol.") // true
// esPangrama("Hola soy Víctor Robles") // false

const esPangrama = (frase) => {

    frase = frase.toLowerCase().replace(/\s/g, '');
    
    const abecedario = 'abcdefghijklmnñopqrstuvwxyz'.split('');

    return abecedario.every(letra => frase.includes(letra)) ? 'La frase dada SI es un Pangrama' : 'La frase dada NO es un Pangrama';
};

console.log(esPangrama("El viejo Señor Gomez pedía queso, kiwi y habas, pero le ha tocado un saxofón"));
console.log(esPangrama("Hola soy Víctor Robles"));