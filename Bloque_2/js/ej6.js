function tabladem() {
    let num=parseInt(prompt('Ingrese un valor del 1 al 10:', '')); resultado="";
    
    for (let multiplicacion=1 ; multiplicacion<=12 ; multiplicacion++) 
    {
        let producto=num*multiplicacion;
        resultado+=num+" x "+multiplicacion+" = "+producto;
        if(multiplicacion<12) 
        {
            resultado += "<br>";
        }
    }
    return resultado;
}