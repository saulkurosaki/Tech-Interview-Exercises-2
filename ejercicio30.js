
//Ejercicio30: Dado un array de numeros, permitir los numeros duplicados un máximo
//             de 2 veces y devolver la longitud del array

const eliminarDuplicados = (numeros) => {

    //Objeto acumulador
    const contador = {};

    //Recorrer array y contar las apariciones de cada numero
    for(let numero of numeros){

        if(contador[numero] === undefined){
            contador[numero] = 1;
        }else{
            contador[numero]++;

            if(contador[numero] >= 3) contador[numero] = 2;
        };

    };

    const resultado = Object.values(contador).reduce((acumulador, valor) => {
        return acumulador + valor;        
    }, 0);

    return resultado;
};

console.log(eliminarDuplicados([4, 4, 4, 2, 2, 3])); // 5
console.log(eliminarDuplicados([6, 6, 2, 2, 2, 3])); // 5
console.log(eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9])); // 6