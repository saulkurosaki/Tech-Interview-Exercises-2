
//Ejercicio24: Crea una función a la cual le pasemos un array de nombres de archivo y nos devuelva un array
//             con esos mismos archivos, pero si hay alguno duplicado, debe estar numerado con un (numero de repeticiones)
//             como hacen los sistemas operativos, pero con sus respectivos tipos de archivos.

// Ejemplos:
// renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
// Devuelve: 
// [ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']

const renombrarArchivos = (ficheros) => {

    //Recorriendo cada archivo y devolviendo un array nuevo
    return ficheros.map((fichero, indice) => {

        //Crear nuevo array filtrado que contenga los archivos originales, menos el que estamos recorriendo
        let filtrados = ficheros.slice(0, indice).filter(ficheroFiltro => fichero === ficheroFiltro);

        //Si no hay repetidos devolver el archivo actual, y si si hay repetidos agregamos numeración
        let resultado = fichero;

        if(filtrados.length !== 0){
            let ficheroPartido = fichero.split('.');

            resultado = ficheroPartido[0] + '(' + filtrados.length + ').' + ficheroPartido[1];
        };

        return resultado;

    });

};

console.log(renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]));