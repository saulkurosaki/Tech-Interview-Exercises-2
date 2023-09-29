
//Ejercicio5: Dado un array de personas con nombre y apellido, crear una función
//            para ordenar el array por los apellidos en orden alfabético

const ordenarPorApellidos = (personas) => {
    //Crear una variable con un nuevo array de apellidos
    let apellidos = personas.map(persona => persona.split(' ')[1]);

    //Ordenar los apellidos
    apellidos.sort();

    //Crear un nuevo array con los nombres y apellidos ordenados
    const personasOrdenadas = apellidos.map(apellido => {
        //Encontrar el nombre y el apellido original correspondiente al apellido ordenado
        const nombreOriginal = personas.find(nombreCompleto => {
            return nombreCompleto.split(' ')[1] === apellido;
        });

        return nombreOriginal;
    });

    return personasOrdenadas;
};

console.log(
    ordenarPorApellidos([
        "Víctor Robles",
        "Antonio Alcántara",
        "Al Pacino",
        "Robert DeNiro",
        "Brad Pitt",
        "Sylvester Stallone"
    ])
);