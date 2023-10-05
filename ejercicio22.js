
//Ejercicio22: Crea una función que invierta el orden de un texto sin usar funciones nativas del lenguaje.

const invertirTexto = (texto) => {

    //Crear una variable para almacenar la cadena invertida
    let cadenaInvertida = '';

    //Recorrer la cadena de forma inversa
    for (let i = texto.length - 1; i >= 0; i--) {

        //En cada iteración agregar el valor a la cadenaInvertida
        cadenaInvertida += texto[i];

    };

    //Devolver resultado
    return 'La cadena invertida de: "' + texto + '" es: "' + cadenaInvertida + '"';
};

console.log(invertirTexto('Hola como estas'));