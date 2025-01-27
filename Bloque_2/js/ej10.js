function cuatri()
        {
            let resultado ; 
            let fecha=new Date();
            let mes=fecha.getMonth();
            fecha=new Date();
            if (mes<4) 
            {
                resultado=('primer cuatrimestre del año ');
            } 
            else 
            {
                if (mes<8) 
                {
                    resultado=('segundo cuatrimestre del año');
                } 
                else 
                {
                    resultado=('tercer cuatrimestre del año');
                }
            }
            return resultado
        }