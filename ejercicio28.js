
//Ejercicio28: Crea una función que me diga si un número es armstrong o no.
 
// Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
// Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
// Si la cifra es de 4 dígitos, se eleva a 4, y si es de 5 a 5.
 
// Ejemplos:
// esArmstrong(371)  // Devuelve: true

const esArmstrong = (numero) => {

    //Convertir numero a cadena de texto
    numero = numero.toString();

    //Calcular la longitud de la cadena
    let tamaño = numero.length;

    //Crear variable para acumular la cifra del calculo del los cubos de los dígitos
    let suma = 0;

    //Recorrer cada carácter del texto y actualizar variable acumuladora
    for(let i = 0; i < tamaño; i++){
        suma += Math.pow(parseInt(numero[i]), tamaño);
    };

    //Devolver resultado
    return parseInt(numero) === suma ? 'El numero: "' + numero + '" SI es un numero Armstrong' : 'El numero: "' + numero + '" NO es un numero Armstrong';
};

console.log(esArmstrong(371));
console.log(esArmstrong(547));