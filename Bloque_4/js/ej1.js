function alerta(clave)
        {
            // clave2=document.getElementById(clave).value
            if(clave.value.length<7 || clave.value.length>20)
            {
                alert("la clave debe tener entre 7 y 20 caracteres");
                control.focus();    
            }
        }
