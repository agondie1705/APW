function repetidor() {
    let acumulador = 0;
    let V;
    do {
        V = parseInt(prompt("Introduce los numeros que quieres sumar si pones 9999 se acaba la accion"));
        if (V !== 9999) {
            acumulador += V;
        }
    } while (V !== 9999);
    
    let resultado = "la acumulacion es de: " + acumulador;
    
    if (acumulador > 0) {
        resultado += " y es mayor que 0";
    } else if (acumulador < 0) {
        resultado += " y es menor que 0";
    } else {
        resultado += " y es igual a 0";
    }
    
    document.write(resultado);
}