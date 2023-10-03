
//Ejercicio18: Dado un array de usuarios, mostrar solo los que tengan mas de 20 años
//             y en su nombre tengan la letra "o" y "n"

// const usuarios = [
//     { nombre: 'Antonio', edad: 20 },
//     { nombre: 'Juan', edad: 23 },
//     { nombre: 'Pepe', edad: 12 },
//     { nombre: 'Raul', edad: 28 },
//     { nombre: 'Paco', edad: 38 },
//     { nombre: 'Jason', edad: 56}
//   ];

// Ejemplos:
// filtrarUsuarios(usuarios);

// Devuelve: 
// [
//     { nombre: 'Antonio', edad: 20 },
//     { nombre: 'Jason', edad: 56}
// ]

const filtrarUsuarios = (usuarios) => {

    //Usar la función filter
    const filtrado = usuarios.filter(({ nombre, edad }) => {

        //Devolver como validos los que cumplen las 3 condiciones
        return edad >= 20 && nombre.toLowerCase().includes('o') 
                          && nombre.toLowerCase().includes('n');

    });

    return filtrado;
};

const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56 }
];

console.log(filtrarUsuarios(usuarios));