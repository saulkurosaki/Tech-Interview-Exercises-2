
//Ejercicio34: Crea una función a la cual le pase un array y me devuelva un objeto
//             con los elementos agrupados.

// Ejemplos:
// agrupar([7.2, 5.3, 7.4], Math.floor)  
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }

// agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length') 
// Devuelve: { 3: ['uno', 'dos'], 4: ['tres], 6: ['cuatro'] }

// agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad') 
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }

const agrupar = (datos, claveAgrupacion) => {

    //Declarar objeto vacio para llenar resultados
    let resultado = {};

    //Recorrer todos los elementos del array de datos
    datos.forEach(dato => {

        //Evaluar si la claveAgrupacion es una función o una propiedad
        let propiedad = typeof claveAgrupacion === 'function' 
                                                    ? claveAgrupacion(dato) 
                                                    : dato[claveAgrupacion];

        //Comprobar si el valor no existe y crear un elemento dentro del objeto
        if(!resultado[propiedad]){
            resultado[propiedad] = [];
        };

        //Agregar elemento al array correspondiente
        resultado[propiedad].push(dato);

    });

    //Devolver resultado
    return resultado;
};

console.log(agrupar([7.2, 5.3, 7.4], Math.floor));
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }

console.log(agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length'));
// Devuelve: { 3: ['uno', 'dos'], 4: ['tres], 6: ['cuatro'] }

console.log(agrupar([{ nombre: "victor", edad: 33 }, { nombre: "paco", edad: 44 }], 'edad'));
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }