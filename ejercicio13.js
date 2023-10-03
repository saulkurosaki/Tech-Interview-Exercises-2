
//Ejercicio13: Crea una función que calcule el area de un cuadrado, rectángulo o un triangulo

const calcularAreaPoligono = (poligono) => {

    let resultado = 0;

    if(poligono.tipo === 'cuadrado' && poligono.lado){
        resultado = poligono.lado * poligono.lado;
    }else if(poligono.tipo === 'rectangulo' && poligono.base && poligono.altura){
        resultado = poligono.base * poligono.altura;
    }else if(poligono.tipo === 'triangulo' && poligono.base && poligono.altura){
        resultado = (poligono.base * poligono.altura) / 2;
    };

    return resultado;
};
console.log(calcularAreaPoligono({tipo: 'triangulo', base: 6, altura: 9}));
console.log(calcularAreaPoligono({tipo: 'cuadrado', lado: 6}));
console.log(calcularAreaPoligono({tipo: 'rectangulo', base: 6, altura: 9}));