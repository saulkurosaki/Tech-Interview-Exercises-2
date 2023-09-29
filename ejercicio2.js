
//Ejercicio: Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
//           crear una función que la simplifique.

//Ejemplo: simplificarRuta("/home/") Salida: /home
//         simplificarRuta("/x/./y/../../z/") Salida: /z
//         simplificarRuta("/../") Salida: /
//         simplificarRuta("/home//pruebas/") Salida: /home/pruebas

const simplificarRuta = (ruta) => {

    //Crear variable pila para almacenar las partes de la ruta
    let pila = [];

    //Dividir la ruta en sus diferentes partes utilizando el separador /
    const partes = ruta.split('/');

    //Recorrer cada parte
    for(const parte of partes){

        //Si la parte es '..' quito el ultimo elemento de la pila
        if(parte === '..'){
            pila.pop();
        }

        //Si la parte es diferente a '.' a '..' o a un string vacio, guardar en la pila
        else if(parte !== '.' && parte !== ''){
            pila.push(parte);
        };

    }

    return '/' + pila.join('/');
};

// console.log(simplificarRuta('/home//pruebas/..'));
console.log(simplificarRuta("/home/"));
console.log(simplificarRuta("/x/./y/../../z/"));
console.log(simplificarRuta("/../"));
console.log(simplificarRuta("/home//pruebas/"));