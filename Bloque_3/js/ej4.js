function concatenar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var resultado = nombre + " " + apellido;
    document.getElementById('resultado').value = resultado;
}