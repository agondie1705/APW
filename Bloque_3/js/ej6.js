
        function preciototal()
        {
            let seleccion = document.getElementById('pi');
            let precio = seleccion.value;
            let cantidad = document.getElementById('can').value;
            let total = precio*cantidad;
            document.getElementById('ptz').value = total;  
        }

      