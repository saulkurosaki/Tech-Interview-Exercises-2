
//Ejercicio24: Crea una función a la cual le pasemos un array de nombres de archivo y nos devuelva un array
//             con esos mismos archivos, pero si hay alguno duplicado, debe estar numerado con un (numero de repeticiones)
//             como hacen los sistemas operativos.

// Ejemplos:
// renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
// Devuelve: 
// [ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]

const renombrarArchivos = (ficheros) => {

    //Recorriendo cada archivo y devolviendo un array nuevo
    return ficheros.map((fichero, indice) => {

        //Crear nuevo array filtrado que contenga los archivos originales, menos el que estamos recorriendo
        let filtrados = ficheros.slice(0, indice).filter(ficheroFiltro => fichero === ficheroFiltro);

        //Si no hay repetidos devolver el archivo actual, y si si hay repetidos agregamos numeración
        return filtrados.length === 0 ? fichero : fichero + '(' + filtrados.length + ')';

    });

};

console.log(renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]));