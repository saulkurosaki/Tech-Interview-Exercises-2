
//Ejercicio57: Crea una función que convierta cualquier frase a una SEO slug.
 
// Una seo slug es un fragmento de url optimizado para posicionamiento web:
// cursos-de-victor-robles-web
 
// Ejemplos:
// transformarURL("Cursos de Victor Robles WEB");
 
// Devuelve:
// cursos-de-victor-robles-web

const transformarURL = (titulo) => {

    //Convertir a minúsculas
    const tituloMinusculas = titulo.toLowerCase();

    //Remplazar los espacios con guiones con un replace
    // const slug = tituloMinusculas.replace(/ /g, '-');

    //Separar la frase en palabras y unirlas con guiones después
    const palabras = tituloMinusculas.split(' ');
    const slug = palabras.join('-');

    //Devolver la seo slug
    return slug;
};

console.log(transformarURL("Cursos de Victor Robles WEB"));