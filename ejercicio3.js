
//Ejercicio: Dadas dos fechas, crea una función que me proporcione
//           la diferencia de días entre ellas.

//Ejemplo: diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023')  Salida: 23

const diferenciaDeDias = (fecha1, fecha2) => {

    //Dar el formato correcto a las fechas
    fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
    fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

    //Obtener la diferencia en milisegundos entre las dos fechas
    const diferenciaMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime());

    //Dividir la diferencia en milisegundos entre el numero de milisegundos que tiene un dia
    //y redondearla para sacar el numero de días
    const resultDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    return 'La diferencia entre las dos fechas son: ' + resultDias + ' días';
};

console.log(diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023'));
console.log(diferenciaDeDias('2023-12-1', '2023-12-27'));
console.log(diferenciaDeDias('2023/4/7', '2023/6/1'));