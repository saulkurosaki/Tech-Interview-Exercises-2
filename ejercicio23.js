
//Ejercicio23: Crea una función que a la cual le pase unos numeros en un array, me decodifique 
//             el mensaje teniendo en cuenta que cada letra tiene un numero asignado.

// Ejemplos:
// decodificarMensaje([8, 15, 12, 1]);

// Devuelve: 
// HOLA

const decodificarMensaje = (codigo) => {

    //Crear una variable para almacenar la cadena descifrada
    let descifrado = '';

    //Recorrer el array
    codigo.forEach(numero => {

        //Convertir numero a letra
        let letra = String.fromCharCode(parseInt(numero) + 64);

        //Actualizar variable principal con la letra correspondiente al numero
        descifrado += letra;

    });

    //Devolver resultado
    return descifrado;
};

console.log(decodificarMensaje([8, 15, 12, 1]));