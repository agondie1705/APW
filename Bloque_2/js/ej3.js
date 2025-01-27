function acumulador()
{
    let sueldo=0 , sueldo1y3=0 , sueldomas3=0 , importe=0 , personas1y3=0 , personasmas3=0;

    for(let repetidor=1 ; repetidor<=5 ; repetidor++)
    {
    
        sueldo=parseInt(prompt("dime tu sueldo"))

        if(sueldo>=100 && sueldo<=300)
        {
            sueldo1y3+=sueldo;
            personas1y3 ++;
        }
        else(sueldo>=301)
        {
           sueldomas3+=sueldo;
           personasmas3= -personas1y3+5;
        }
        importe+=sueldo
    }
    
        document.write("el importe de la empresa es de: " +importe+ "<br>")
        document.write("estas son las cantidad de personas que tienen entre 100 y 300: "+personas1y3+ "<br>" )
        document.write("esta es la cantidad de personas que tienen mas de 300: " +personasmas3+ "<br>")
}     