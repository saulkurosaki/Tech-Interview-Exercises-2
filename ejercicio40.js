
//Ejercicio40: Crea una función que convierta un numero romano a decimal

// Ejemplos:
// romanoAEntero("XVIII")   // 18
// romanoAEntero("CXX")     // 120

const romanoAEntero = (romano) => {

    //Crear objeto con numeros romanos y sus correspondiente valores numéricos

    const tablaRomanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    //Crear variable para almacenar resultado
    let resultado = 0;

    //Recorrer numero romano letra a letra
    for(let i = 0; i < romano.length; i++){

        //Si la letra actual es la ultima o el valor del siguiente carácter, es menor o igual al del actual,
        //añadimos el valor al resultado
        if(i === romano.length - 1 || tablaRomanos[romano[i + 1]] <= tablaRomanos[romano[i]]){

            resultado += tablaRomanos[romano[i]];

        }else{

            //Si no, restar el valor del carácter actual al resultado
            resultado -= tablaRomanos[romano[i]];

        };

    };

    //Devolver resultado
    return 'El numero Romano: "' + romano + '", en decimal es: "' + resultado + '"';
};

console.log(romanoAEntero("XVIII")); //18
console.log(romanoAEntero("CXX")); //120