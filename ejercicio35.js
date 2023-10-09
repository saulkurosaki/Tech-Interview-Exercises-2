
//Ejercicio35: Crea un programa que dados dos arrays de lenguajes Front-End y Back-End y dado un parametro
//             que sea un array con los nombres de dos lenguajes, nos diga si son compatibles o no.

//             Solo pueden ser compatibles los lenguajes Front con uno de Back.

const sonCompatibles = (lenguaje1, lenguaje2) => {

    //Definir dos array con lenguajes Front y Back
    const frontend = ['HTML', 'HTML5', 'XHTML', 'CSS', 'CSS3', 'JAVASCRIPT'];
    const backend = ['PHP', 'PYTHON', 'RUBY', 'NODE', 'C#', 'RUST', 'PERL', 'GO', 'GOLANG', 'JAVA'];

    if(typeof lenguaje1 === 'object'){
        let copia = lenguaje1;
        lenguaje1 = copia[0];
        lenguaje2 = copia[1];
    };

    //Comprobar si un lenguaje es Front y otro Back
    if(
        (frontend.includes(lenguaje1.toUpperCase()) && backend.includes(lenguaje2.toUpperCase()))
        || (frontend.includes(lenguaje2.toUpperCase()) && backend.includes(lenguaje1.toUpperCase()))
    ){
        return 'Los dos lenguajes de programación SI son compatibles';
    }else{
        return 'Los dos lenguajes de programación NO son compatibles';
    };

};

console.log(sonCompatibles(['html', 'php']));
console.log(sonCompatibles(['php', 'python']));