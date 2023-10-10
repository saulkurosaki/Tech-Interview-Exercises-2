
//Ejercicio46: Crea una función a la que le pasemos una note, y nos de una calificación:

// 0-3: Deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

// Ejemplos:
// calificar(8.2) // Notable

const calificar = (nota) => {

    let resultado = 'Deficiente';

    switch (true) {
        case (nota >= 0 && nota < 3):
            resultado = 'Deficiente';
            break;

        case (nota >= 3 && nota < 5):
            resultado = 'Insuficiente';
            break;

        case (nota >= 5 && nota < 6):
            resultado = 'Suficiente';
            break;

        case (nota >= 6 && nota < 7):
            resultado = 'Bien';
            break;

        case (nota >= 7 && nota < 9):
            resultado = 'Notable';
            break;

        case (nota >= 9 && nota <= 10):
            resultado = 'Sobresaliente';
            break;

        default:
            break;
    }

    return resultado;
};

console.log(calificar(8.2));