function censop(){
    let sexo, mas=0, fem=0, personas=0, edad=0, documento=0, adultos=0;
    do 
    {
        documento=parseInt(prompt("introduzca el número de documento(ponga un cero para acabar)"))
        if(documento!=0)
        {
                sexo=prompt("introduzca su sexo(con mas o fem)")
                edad=parseInt(prompt("introduzca la edad de la persona"))
                personas++
            if (sexo=="mas")
            {
                mas++
                    if (16<edad<65)
                    {
                        adultos++
                    }
            }
            else    
            {
                fem++
            }
        }
    } while (documento!=0);
        return "personas censadas: "+personas+"<br> hombres: "+mas+"<br> mujeres: "+fem+"<br> personas entre 16 y 65 años: "+adultos;
    } 