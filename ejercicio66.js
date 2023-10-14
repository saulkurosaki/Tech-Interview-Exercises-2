
//Ejercicio66: Crea una función que pueda filtrar la información de los superhéroes por afiliación. 
//             Puedes hacer que la función tome una afiliación como parámetro 
//             y muestre la información de los superhéroes que pertenecen a esa afiliación.
 
// Ejemplos:
// filtrarPorAfiliacion('Crimen organizado')

const personajesDC = {
    'Superman': {
        nombreReal: 'Clark Kent',
        poderes: ['Superfuerza', 'Vuelo', 'Vision laser', 'Invulnerabilidad'],
        afiliacion: 'Justice League',
    },
    'Batman': {
        nombreReal: 'Bruce Wayne',
        poderes: ['Inteligencia sobresaliente', 'Maestro en artes marciales', 'Estratega profesional'],
        afiliacion: 'Justice League',
    },
    'Wonder Woman': {
        nombreReal: 'Diana Prince',
        poderes: ['Superfuerza', 'Agilidad Sobresaliente', 'Invulnerabilidad', 'Herramientas encantadas'],
        afiliacion: 'Justice League',
    },
    'Flash': {
        nombreReal: 'Barry Allen',
        poderes: ['Supervelocidad', 'Agilidad Sobresaliente'],
        afiliacion: 'Justice League',
    },
    'Aquaman': {
        nombreReal: 'Arthur Curry',
        poderes: ['Comunicación con animales marinos', 'Resistencia al agua', 'Superfuerza'],
        afiliacion: 'Justice League',
    },
    'Green Lantern': {
        nombreReal: 'Hal Jordan',
        poderes: ['Anillo de poder', 'Creación de objetos de energía'],
        afiliacion: 'Justice League',
    },
    'Cyborg': {
        nombreReal: 'Victor Stone',
        poderes: ['Tecnología avanzada', 'Fuerza sobrehumana', 'Resistencia al daño'],
        afiliacion: 'Justice League',
    },
    'Joker': {
        nombreReal: 'Unknown',
        poderes: ['Manipulación psicológica', 'Inteligencia sobresaliente'],
        afiliacion: 'Crimen organizado',
    },
    'Harley Quinn': {
        nombreReal: 'Harleen Quinzel',
        poderes: ['Agilidad sobresaliente', 'Expertise en artes marciales'],
        afiliacion: 'Crimen organizado',
    },
    'Penguin': {
        nombreReal: 'Oswald Chesterfield Cobblepot',
        poderes: ['Inteligencia sobresaliente', 'Manipulación'],
        afiliacion: 'Crimen organizado',
    },
    'Riddler': {
        nombreReal: 'Edward Nygma',
        poderes: ['Inteligencia sobresaliente', 'Manipulación'],
        afiliacion: 'Crimen organizado',
    },
};

const filtrarPorAfiliacion = (afiliacion) => {

    let resultados = [];

    for(let personaje in personajesDC){
        
        if(personajesDC[personaje].afiliacion === afiliacion){
            resultados.push({
                nombre: personaje,
                nombreReal: personajesDC[personaje].nombreReal,
                poderes: personajesDC[personaje].poderes,
            })
        };

    };

    return resultados;
};

console.log(filtrarPorAfiliacion('Crimen organizado'));