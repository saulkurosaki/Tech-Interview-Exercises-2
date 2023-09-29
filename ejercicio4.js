
//Ejercicio4: Crea el juego del ahorcado.
//            El usuario tendrá que ir adivinando y descubriendo las letras de una palabra secreta
//            y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
//            Utiliza el metodo de entrada de datos habitual de tu lenguaje. En JS usaremos la función prompt.

//Ejemplo: juegoDelAhorcado('victor')
//Salida: 
//       Adivina la letra: i
//       La palabra es: _i___
//       Te quedan 5 intentos

const juegoDelAhorcado = (palabraSecreta) => {
    //Crear variable palabra oculta con guiones bajos
    let palabraOculta = '_'.repeat(palabraSecreta.length)

    //Crear variable con el numero de intentos (5)
    let intentos = 5;

    //Bucle para pedir letras que se va a ejecutar mientras no se hayan
    //adivinado todas las letras y mientras aun queden intentos
    while(intentos > 0 && palabraOculta !== palabraSecreta){
        //Pedir una letra
        let letra = prompt('Adivina una letra');

        //Comprobar si la letra esta en la palabra para actualizar
        //la variable palabraOculta
        if(palabraSecreta.includes(letra)){
            //Actualizar la palabraOculta y meter la letra en la posición correcta

            for(let contadorLetras = 0; contadorLetras < palabraSecreta.length; contadorLetras++){

                if(letra === palabraSecreta[contadorLetras]){
                    //Convertir la palabra oculta en un array
                    let palabraOcultaArray = Array.from(palabraOculta);

                    //Seleccionar su indice y cambiarlo el guion bajo por la letra adivinada
                    palabraOcultaArray[contadorLetras] = letra;

                    //Unir el array en un string de nuevo
                    //Acuatizar la variable palabraOculta
                    palabraOculta = palabraOcultaArray.join('');
                };

            };
        }else{
            //Si no existe la letra en la palabra resto un intento
            intentos--;
        };

        //Mostrar el estado actual de la palabraOculta
        console.log('La palabra es: ' + palabraOculta);

        //Mostrar cuantos intentos quedan
        console.log('Te quedan: ' + intentos + ' intentos');
    };

    //Cuando salga del bucle
    //Si se han adivinado todas las letras, mostrar mensaje de victoria
    if(palabraOculta === palabraSecreta){
        console.log('Enhorabuena, has ganado!!, La palabra secreta era: ' + palabraSecreta + '!!');
    }else{
        console.log('Lo siento, has perdido. La palabra secreta era: ' + palabraSecreta + ' :(');
    };

};

const lanzarJuego = document.querySelector('#lanzarJuego');
lanzarJuego.addEventListener('click', () => juegoDelAhorcado('saulkurosaki'));