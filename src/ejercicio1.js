
//Ejercicio 1

function multiplicacion(a, b)
{   
    let result = 0;

    for(let i = 1; i <= 10; i++)
    {
        result = a * i;
        console.log(`${a} X ${i} = ${result}`);
    }

    if(b == 0)
    {
        return 'salir'
    }
    else{
        multiplicacion(b, 0)  
    }
}

multiplicacion(5, 10);