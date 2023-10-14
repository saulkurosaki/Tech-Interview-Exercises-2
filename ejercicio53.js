
//Ejercicio53: Crea una funcion para encontrar la longitud del mayor subconjunto de caracteres que no se repiten.

// Ejemplos:
// encontrarSubcadenaSinRepetir("abcabcbb")  // abc, 3
// encontrarSubcadenaSinRepetir("bbbbb")     // b, 1
// encontrarSubcadenaSinRepetir("pwwkew")    // wke, 3

const encontrarSubcadenaSinRepetir = (texto) => {

    //Crear variable para guardar subcadena mas larga sin repetir
    let subcadenaSinRepetir = '';

    //Crear variable para guardar la subcadena actual que estamos revisando
    let subcadenaActual = '';

    //Recorrer cada letra del texto
    for(let caracter of texto){

        //Si el caracter ya esta en la subcadena actual, la reiniciamos - vaciamos
        if(subcadenaActual.indexOf(caracter) !== -1) subcadenaActual = '';

        //Añadir el caracter a la subcadena actual
        subcadenaActual += caracter;

        //Comprobar longitud de subcadena
        if(subcadenaActual.length > subcadenaSinRepetir.length){
            subcadenaSinRepetir = subcadenaActual;
        };

    };

    return [subcadenaSinRepetir, subcadenaSinRepetir.length];
};

console.log(encontrarSubcadenaSinRepetir("abcabcbb"));
console.log(encontrarSubcadenaSinRepetir("bbbbb"));
console.log(encontrarSubcadenaSinRepetir("pwwkew"));