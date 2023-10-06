
//Ejercicio29: Dado un array de objetos de peliculas de los 80's y 90's
//             Crea dos funciones:
//             -Una que las filtre por genero
//             -Y otra que las filtre por la década en este formato (80s o 90s)

const peliculas = [
    { titulo: "Terminator", genero: "accion", añoLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", añoLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", añoLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", añoLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", añoLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", añoLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", añoLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", añoLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", añoLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", añoLanzamiento: 1998 }
];

const filtrarPorGenero = (peliculas, genero) => {

    return peliculas.filter(pelicula => genero === pelicula.genero);

};

const filtrarPorDecada = (peliculas, decada) => {

    return peliculas.filter(pelicula => {

        //Sacar el año de lanzamiento de la peli
        const añoLanzamiento = pelicula.añoLanzamiento;

        //Comprobar con condición el año de lanzamiento
        if(decada === '80s'){
            return añoLanzamiento >= 1980 && añoLanzamiento <= 1989;
        }else if(decada === '90s'){
            return añoLanzamiento >= 1990 && añoLanzamiento <= 1999;
        };

    });

};

console.log('Filtradas por Genero: ', filtrarPorGenero(peliculas, "accion"));
console.log('Filtradas por Decada: ', filtrarPorDecada(peliculas, "80s"));