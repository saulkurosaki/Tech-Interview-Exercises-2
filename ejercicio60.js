
//Ejercicio60: Programa que calcule el beneficio de un producto despues de restarle:
//             -20% de descuento
//             -21% de iva
//             -15% de irfp

//Precio final para el publico: Incluye IVA, despues del IVA tendré que pagar el irfp restante
const calcularBeneficio = (precio) => {

    //Calcular descuento y el iva
    const descuento = precio * 0.2;
    const precioConDescuento = parseFloat(precio - descuento);
    const iva = precioConDescuento * 0.21;
    const irfp = parseFloat(precioConDescuento - iva) * 0.15;

    //Calcular beneficio
    const beneficio = precioConDescuento - iva - irfp;

    return beneficio;
};

console.log(calcularBeneficio(995));