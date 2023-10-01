
//Ejercicio10: Crea una función que reciba un DNI (8 numeros) y calcule la letra
//             del DNI. Es un proceso matemático fácil que se basa en obtener
//             el resto de la division entera del numero del DNI y el numero 23.
//             Y con el resto se obtiene la letra, usándolo como posición o indice
//             dentro de un array de letras

//Ejemplos: generarLetraDNI("25439343"); //Resultado: 25439343D

const generarLetraDNI = (numeroDNI) => {

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    //Convertir nuestro numero DNI a un entero
    numeroDNI = parseInt(numeroDNI);

    //Comprobar si el DNI es valido (8 cifras)
    if (numeroDNI > 0 && numeroDNI < 99999999) {

        //Calculo de la letra del DNI (numeroDNi % 23)
        let resto = numeroDNI % 23;

        //Conseguir la letra del array en base al resto
        let letra = letras[resto];

        //Devolver el DNI Completado
        return numeroDNI.toString() + letra;
    } else {
        return 'DNI invalido';
    };

};

console.log(generarLetraDNI("25439343"));
console.log(generarLetraDNI("21439143"));