
//Ejercicio20: Crea una función que ordene un array de objetos, en base a las propiedades que le pase por parametro.

// const usuarios = [
//     { nombre: 'Antonio', edad: 20 },
//     { nombre: 'Juan', edad: 23 },
//     { nombre: 'Pepe', edad: 12 },
//     { nombre: 'Raul', edad: 28 },
//     { nombre: 'Paco', edad: 38 },
//     { nombre: 'Jason', edad: 56}
//   ];


// Ejemplos:
// ordenarObjetos(usuarios, "edad");

const ordenarObjetos = (datos, propiedad) => {

    return datos.sort((a, b) => {

        if(typeof a[propiedad] == 'number'){
            return a[propiedad] - b[propiedad];
        }else if(typeof a[propiedad] == 'string'){
            return a[propiedad].localeCompare(b[propiedad]);
        };

    });

};

const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56 }
];

console.log(ordenarObjetos(usuarios, "edad"));
console.log(ordenarObjetos(usuarios, "nombre"));