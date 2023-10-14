
//Ejercicio64: Crea un programa que compruebe si los paréntesis, llaves y corchetes 
//             de una expresión están equilibrados, es decir, que estos delimitadores 
//             se abren y cierran de forma adecuada.
 
// Ejemplos:
// expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }');  // imprime true
// expresionEquilibrada('{ x * ( y + z ) ] + 12 }');  // imprime false

const expresionEquilibrada = (expresion) => {

    //Crear una pila para guardar los signos de apertura
    const caracteres = expresion.split(' ');
    const apertura = caracteres.filter((char) => char === '(' || char === '[' || char === '{');
    const cerradura = caracteres.filter((char) => char === ')' || char === ']' || char === '}');

    //Comprobar la cantidad de signos de apertura y cerradura
    if(apertura.length === cerradura.length){
        return true;
    }else{
        return false
    };

};

console.log(expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }'));
console.log(expresionEquilibrada('{ x * ( y + z ) ] + 12 }'));