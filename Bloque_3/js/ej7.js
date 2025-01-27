function mostrarDeportes() 
{
    const deportes=[];
    if(document.getElementById('futbol').checked) 
    {
        deportes.push('Fútbol');
    }
    if(document.getElementById('basket').checked) 
    {
        deportes.push('Básket');
    }
    if(document.getElementById('tenis').checked) 
    {
        deportes.push('Tenis');
    }
    document.getElementById('seleccion').textContent = `Deportes seleccionados: ${deportes.join(', ')}`;
}