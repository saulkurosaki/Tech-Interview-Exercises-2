
//Ejercicio42: Dado un nombre de superheroes, crear una función que sea capaz de 
//             ordenarlos por su nombre real o por su nombre de superheroe.

let informacionSuperheroes = {
    "Superman": {
        "nombreReal": "Clark Kent",
        "afiliacion": "DC Comics",
        "poderes": ["vuelo", "super fuerza", "super velocidad", "rayos x"]
    },
    "Spider-Man": {
        "nombreReal": "Peter Parker",
        "afiliacion": "Marvel Comics",
        "poderes": ["telarañas", "agilidad", "sensores arácnidos"]
    },
    "Batman": {
        "nombreReal": "Bruce Wayne",
        "afiliacion": "DC Comics",
        "poderes": ["inteligencia", "habilidades físicas sobresalientes", "ricos recursos"]
    },
    "Iron Man": {
        "nombreReal": "Tony Stark",
        "afiliacion": "Marvel Comics",
        "poderes": ["armadura de hierro", "inteligencia", "ricos recursos"]
    },
    "Wonder Woman": {
        "nombreReal": "Diana Prince",
        "afiliacion": "DC Comics",
        "poderes": ["super fuerza", "vuelo", "resistencia sobrenatural"]
    },
    "Thor": {
        "nombreReal": "Thor Odinson",
        "afiliacion": "Marvel Comics",
        "poderes": ["martillo mágico", "vuelo", "trovador"]
    },
    "The Flash": {
        "nombreReal": "Barry Allen",
        "afiliacion": "DC Comics",
        "poderes": ["super velocidad", "manipulación del tiempo"]
    },
    "Captain America": {
        "nombreReal": "Steve Rogers",
        "afiliacion": "Marvel Comics",
        "poderes": ["super fuerza", "agilidad", "resistencia sobrenatural", "escudo indestructible"]
    },
    "Green Lantern": {
        "nombreReal": "Hal Jordan",
        "afiliacion": "DC Comics",
        "poderes": ["anillo mágico", "manipulación de la energía"]
    },
    "Hulk": {
        "nombreReal": "Bruce Banner",
        "afiliacion": "Marvel Comics",
        "poderes": ["super fuerza", "resistencia sobrenatural", "transformación en Hulk"]
    },
};

const ordenarSuperheroes = (opcion) => {

    //Reformatear objeto
    let personajes = [];

    for (const nombreSuperheroe in informacionSuperheroes) {

        const info = informacionSuperheroes[nombreSuperheroe];

        personajes.push({
            nombre: nombreSuperheroe,
            nombreReal: info.nombreReal,
            poderes: info.poderes,
        });

    };

    //Ordenar Alfabéticamente Ascendente
    personajes.sort((a, b) => {
        if (a[opcion] < b[opcion]) return -1;
        if (a[opcion] > b[opcion]) return 1;
        return 0;
    });



    return personajes;
};

console.log(ordenarSuperheroes('nombreReal'));