
//Ejercicio63: Crea una funcion para conseguir las sumas acumuladas de un array de numeros.

// Ejemplos:
// sumasAcumuladas([1, 2, 3, 4])   // [1, 3, 6, 10] 
 
// (se calcula como: [1, 1+2, 1+2+3, 1+2+3+4])

const sumasAcumuladas = (numeros) => {

    let resultado = [];
    let suma = 0;

    for(let numero of numeros){

        suma += numero;

        resultado.push(suma);

    };

    return resultado;
};

console.log(sumasAcumuladas([1, 2, 3, 4]));