function imprimirPrimeraMitad(cadena) {
    let mitad = Math.floor(cadena.length / 2);
    console.log("Primera mitad de la cadena:", cadena.slice(0, mitad));
}

// Imprimir el último carácter
function imprimirUltimoCaracter(cadena) {
    console.log("Último carácter de la cadena:", cadena.charAt(cadena.length - 1));
}

// Imprimirlo en forma inversa
function imprimirInverso(cadena) {
    let cadenaInvertida = cadena.split('').reverse().join('');
    console.log("Cadena en forma inversa:", cadenaInvertida);
}

// Imprimir cada carácter del String separado con un guión
function imprimirConGuiones(cadena) {
    let cadenaConGuiones = cadena.split('').join('-');
    console.log("Cadena con guiones:", cadenaConGuiones);
}

// Imprimir la cantidad de vocales almacenadas
function contarVocales(cadena) {
    let vocales = "aeiouAEIOU";
    let cantidadVocales = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.indexOf(cadena[i]) !== -1) {
            cantidadVocales++;
        }
    }
    console.log("Cantidad de vocales en la cadena:", cantidadVocales);
}