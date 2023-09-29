
//Ejercicio6: Dado un año actual, crea un programa que me muestre
//            los años bisiestos que habrá en 30 años

const bisiestos = (año) => {
    //Tener variable con limite de años
    const limite = 30;

    //Bucle que se ejecute tantas veces como años limite tengamos
    for (let i = 0; i < limite; i++) {

        //Comprobar si el dia 29 de Febrero existe en el año actual
        const fecha = new Date(año, 1, 29).getMonth();

        if(fecha === 1){
            console.log(año + ' Bisiesto');
        };

        año++;

    };

    //Si si existe, mostrar como año bisiesto
};

bisiestos(2023);