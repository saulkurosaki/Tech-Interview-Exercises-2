
//Ejercicio51: Crea una funcion que dibuje un diamante de asteriscos.

// Ejemplos:
// generarDiamante(5);
 
// Devuelve: 
//   *
//  *** 
// *****
//  *** 
//   *  

const generarDiamante = (tamaño) => {

    //Definir variable resultado
    let fila = '';

    //Forzar que el tamaño que sea impar
    if(tamaño % 2 === 0) tamaño--;

    //Calcular la mitad del diamante
    const mitad = Math.floor(tamaño / 2);

    //Recorrer filas del diamante
    for(let filaActual = 0; filaActual < tamaño; filaActual++){

        //Calcular numero de espacios
        const espacios = Math.abs(mitad - filaActual);

        //Imprimir espacios
        for(let espacioActual = 0; espacioActual < espacios; espacioActual++){
            fila += ' ';
        };

        //Imprimir asteriscos
        for(let asteriscoActual = 0; asteriscoActual < (tamaño - (espacios * 2)); asteriscoActual++){
            fila += '*';
        };

        //Imprimir espacios finales
        for(let espacioActual = 0; espacioActual < espacios; espacioActual++){
            fila += ' ';
        };

        fila += '\n';

    };

    return fila;
};

console.log(generarDiamante(5));
console.log();
console.log(generarDiamante(7));