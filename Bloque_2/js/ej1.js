function traductor(tra)
        {
        switch (tra) 
                {
            case 'gato':
                traduccion=('la traduccion de gato es: cat');
                break;
            case 'perro':
                traduccion=('la traduccion de perro es: dog');
                break;
            case 'mesa':
                traduccion=('la traduccion de mesa es: table');
                break;
            case 'casa':
                traduccion=('la traduccion de casa es: house');
                break;
                default:
                traduccion=("las palabras a traducir deben estar entre casa,mesa,gato y perro")

                }
                return traduccion
            }