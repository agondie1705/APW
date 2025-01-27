function mp()
        {
            let resultado;
            let numero1=parseInt(prompt("Introduzca el primer número"))
            let numero2=parseInt(prompt("Introduzca el segundo número"))
            let numero3=parseInt(prompt("Introduzca el tercer número"))

                if(numero1<numero2 && numero1<numero3)
                {
                        resultado=numero1        
                }
                else
                {
                    if(numero2<numero1 && numero2<numero3)
                    {
                        resultado=numero2
                    }
                    else
                    {
                        resultado=numero3
                    }
                }
             return "el menor de los numeros es: " +resultado
                    
        }