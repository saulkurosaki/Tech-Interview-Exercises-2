
//Ejercicio47: Crea un simulador de piedra, papel o tijera.
//             El resultado podrá ser: "Jugador 1", Jugador 2" o "Empate".
 
// Ejemplos:
 
// quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]); 
// // Devuelve: "Jugador 2"
 
// quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// // Devuelve: "Empate"
 
// quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// // Devuelve "Jugador 1"

const quienGana = (partidas) => {

    let contadorJugador1 = 0;
    let contadorJugador2 = 0;

    for(let partida of partidas){

        const jugada1 = partida[0];
        const jugada2 = partida[1];

        if(jugada1 === jugada2) continue;

        //Comprobar si gana el jugador 1, el 2 o es un empate
        if((jugada1 === 'PIEDRA' && jugada2 === 'TIJERA') || 
           (jugada1 === 'PAPEL' && jugada2 === 'PIEDRA') ||
           (jugada1 === 'TIJERA' && jugada2 === 'PAPEL')
        ){
            contadorJugador1++;
        }else{
            contadorJugador2++;
        };

    };

    if(contadorJugador1 > contadorJugador2) return 'Gana el Jugador 1!!!';
    if(contadorJugador1 < contadorJugador2) return 'Gana el Jugador 2!!!';
    if(contadorJugador1 === contadorJugador2) return 'EMPATE';
};

console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]));
console.log(quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]));
console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]));