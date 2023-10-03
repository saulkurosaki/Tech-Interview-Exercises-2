
//Ejercicio14: Dada una cadena de texto, comprobar si es un palindromo o no.
//             No usar funciones de JS, solo estructuras de control.
//             Los palindromos son palabras que se leen igual aun estando invertidas
//Por ejemplo: ana, bob, otto, allivessevilla

const esPalindromo = (palabra) => {

    //Dividir la cadena de texto en un array de letras
    let letras = [];

    for(let i = 0; i < palabra.length; i++){
        letras.push(palabra[i]);
    };

    //Invertir el array con un bucle
    let letrasInvertidas = [];

    for(let i = letras.length - 1; i >= 0; i--){
        letrasInvertidas.push(letras[i]);
    };

    //Unir todas la letras del array en un bucle'
    let palabraInvertida = '';

    for(let i = 0; i < letrasInvertidas.length; i++){
        palabraInvertida += letrasInvertidas[i];
    };

    //Devolver el resultado
    if(palabraInvertida === palabra){
        return '"' + palabra + '" SI es un palindromo: ' + '"' + palabraInvertida + '"';
    }else{
        return '"' + palabra + '" NO es un palindromo: ' + '"' + palabraInvertida + '"';
    };
};

console.log(esPalindromo('otto'));
console.log(esPalindromo('allivessevilla'));
console.log(esPalindromo('saulparedes'));