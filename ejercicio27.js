
//Ejercicio27: Crea una función a la cual le pasemos una frase y una palabra,
//             y busque si la palabra existe en la frase.

const buscarPalabra = (frase, palabra) => {

    //Convertir datos a minúsculas
    let lowerFrase = frase.toLowerCase();
    let lowerPalabra = palabra.toLowerCase();

    //Buscar la palabra en el string
    const indice = frase.indexOf(palabra);

    //Devolver el resultado
    let resultado = false;

    if(indice >= 0){
        resultado = true;
    };

    return resultado;
};

console.log(buscarPalabra('Hola como estas', 'Hola'));
console.log(buscarPalabra('Hola como estas', 'Saul'));