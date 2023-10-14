
//Ejercicio65: Dado un array de objetos de usuarios, con nombre y fecha,
// crea una función que los ordene por fecha.

// Ejemplos:
// ordenarPorFecha(usuarios)

// // Devolver solo nombre

const usuarios = [
    {
        nombre: "Juan",
        fecha: new Date(1984, 7, 10),
    },
    {
        nombre: "Paco",
        fecha: new Date(2017, 8, 12),
    },
    {
        nombre: "Pepe",
        fecha: new Date(1991, 12, 6),
    },
];

const ordenarPorFecha = (array) => {

    array.sort((a, b) => b.fecha - a.fecha);

    return array.map(el => el.nombre);
};

console.log(ordenarPorFecha(usuarios));