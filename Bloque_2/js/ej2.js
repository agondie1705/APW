function bucle()
{
let resultado=""
for(let bucle=8 ; bucle<500 ; bucle+=8)
{
    if(bucle==496)
    {
        resultado=resultado=resultado+bucle
    }
    else
    {
        resultado=resultado+bucle+"_"
    }
}
    return resultado
}