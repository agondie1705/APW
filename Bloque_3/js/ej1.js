function vectores() {
    let numeros = new Array(8);
    let total = 0;
    let sumaMas36 = 0;
    let cuentaMas50 = 0;

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(prompt("Introduzca un número:"));
    }

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
        if (numeros[i] > 36) {
            sumaMas36 += numeros[i];
        }
        if (numeros[i] > 50) {
            cuentaMas50++;
        }
    }

    document.write("Suma total: " + total + "<br>");
    document.write("Suma de números mayores a 36: " + sumaMas36 + "<br>");
    document.write("Cantidad de números mayores a 50: " + cuentaMas50 + "<br>");
}
