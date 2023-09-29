
//Ejercicio1: Dado un Array de superheroes de Marvel, haz un programa que pueda
//mostrar la información de cada uno.
//Y añade la capacidad de buscar la información de varios superheroes a la vez.

//Ejemplo: mostrarInformacionSuperheroe('Iron Man')
//Salida: 
//Nombre real = Tony Stark
//Poderes = Tecnología avanzada y Movilidad Aérea
//Equipo = Los Vengadores


const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnología avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido arácnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};

const mostrarInformacionSuperheroe = (aka) => {

    let result;

    if(aka in infoSuperheroes){

        const hero = infoSuperheroes[aka];
        
        console.log('\n' + '######## ' + aka.toUpperCase() + ' ########');
        console.log('Nombre Real: ' + hero.nombreReal);
        console.log('Poderes: ' + hero.poderes.join(', '));
        console.log('Equipo: ' + hero.equipo);
        console.log('######################');

    }else{
        console.log('\n' + aka + ' no existe en la base de datos');
    };

};

const mostrarInformacionSuperheroes = (akas) => {

    akas.forEach(nombre => {

        mostrarInformacionSuperheroe(nombre);

    })

};


mostrarInformacionSuperheroe('Spider-Man');
mostrarInformacionSuperheroes(['Iron Man', 'Thor', 'Joker']);