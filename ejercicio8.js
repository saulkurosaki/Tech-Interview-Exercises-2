
//Ejercicio8: Crea un algoritmo al cual le pase un numero entero y lo convierta a numero romano

const enteroARomano = (num) => {

    //Variable para guardar String Final
    let resultado = '';
    const numeroOriginal = num;

    //Listado de numeros romanos
    const caracteresRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    //El equivalente en numeros decimales
    const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    //Bucle para recorrer numeros decimales
    for(let i = 0; i < valoresDecimales.length; i++){

        //Bucle para iterar mientras el numero sea mayor o igual al numero decimal al que estoy recorriendo
        while(num >= valoresDecimales[i]){

            //Añadir el carácter romano al resultado
            resultado += caracteresRomanos[i];

            //Actualizar numero para restar el valor decimal que ya he agregado al resultado de numeros romanos
            num -= valoresDecimales[i];
            
        };

    };

    //Devolver resultado
    return 'El numero decimal: "' + numeroOriginal + '" En numeros romanos es: "' + resultado + '"';
};

console.log(enteroARomano(123));
console.log(enteroARomano(25));
console.log(enteroARomano(4623));
console.log(enteroARomano(10999));