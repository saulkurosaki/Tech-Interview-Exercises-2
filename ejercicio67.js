
//Ejercicio67: Dada una frase devuelve la longitud de la última palabra que tenga más de 4
//             caracteres y que contenga la vocal A.
 
// Ejemplos:
// longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')

const longitudUltimaPalabra = (frase) => {

    let split = frase.split(' ');
    let palabrasMayores = [];

    for(let palabra of split){

        if(palabra.length > 4 && palabra.includes('a')){

            palabrasMayores.push(palabra);

        };

    };

    let resultado = palabrasMayores[palabrasMayores.length - 1]

    return 'La longitud de la palabra "' + resultado + '" es de: "' + resultado.length + '" caracteres';
};

console.log(longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy'));