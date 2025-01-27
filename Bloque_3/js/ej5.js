function mostrarPrecio() {
    const precios = {
        "jamon y queso": 10.00,
        "muzzarella": 8.00,
        "morrones": 9.50
    };
    const selectPizza = document.getElementById("piza");
    const precio = precios[selectPizza.value];
    document.getElementById("precio").value = `€ ${precio.toFixed(2)}`;
}