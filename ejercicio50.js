
//Ejercicio50: Crea una funcion que dada una temperatura la pase a grados celsius of a fahrenheit.

// Ejemplos:
// convertirTemperatura('29°C')  // Devuelve: "84.20°F"
// convertirTemperatura('77°F')  // Devuelve: "25.00°C"

const convertirTemperatura = (temperatura) => {

    //Separar la temperatura del formato
    // const formato = temperatura.slice(-1);
    const formato = temperatura.slice(-1);
    const valor = parseFloat(temperatura.slice(0, -2));

    //Comprobar si la temperatura tiene el formato correcto
    if(formato !== 'C' && formato !== 'F') return 'Formato Incorrecto';
    if(isNaN(valor)) return 'Formato Incorrecto';

    //Según si son grados celsius o fr...
    if(formato === 'C'){
        const gradosF = (valor * 9 / 5 + 32).toFixed(2);
        return gradosF + '°F';
    }else{
        const gradosC = ((valor - 32) * 5 / 9).toFixed(2);
        return gradosC + '°C';
    };

};

console.log(convertirTemperatura('29°C'));
console.log(convertirTemperatura('77°F'));