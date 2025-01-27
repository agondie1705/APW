function Datos() 
        {
            let Negativos=0 ; Positivos=0 ; MultiplosDe15=0; suma=0;
            
            for (let r=1; r<=10; r++) 
            {
                let numero=parseInt(prompt('Ingrese un numero entero ' + r + ':'));
                
                if(numero<0) 
                {
                    Negativos++;
                }
                else if(numero>0) 
                {
                    Positivos++;
                }

                if(numero %15===0) 
                {
                    MultiplosDe15++;
                }

                if(numero %2===0)
                {
                    suma+=numero;
                }
            }

            return  "los valores negativos son: " +Negativos+ "<br> los valores positivos son: " +Positivos+ "<br> los multiplos de 15 son: " +MultiplosDe15+ "<br> el resultado de la suma de enteros es: " + suma  
        }