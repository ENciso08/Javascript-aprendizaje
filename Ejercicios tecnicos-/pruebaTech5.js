/**
 
12) Programa una función que determine si un número es 
primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 */


// Programa una función que determine si un número es 
// primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


const esPrimo =(numero = undefined) =>{

    if (!numero) return console.info("No es un número valido");
    // typeOf nos ayuda a identificar el tipo de datos que estamos comparando 
    if(typeof numero !== "number") return console.log(`El valor ${numero} ingresado No es un numero`);

    let esPrimo = 2
    for (let i = esPrimo; i <= Math.floor(Math.sqrt(numero)); i++) {
        if(numero % esPrimo  === 0) return false
        
    }
    return true
}

esPrimo("w")
console.log(esPrimo(9))




// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

    const parOimpar = (numero = undefined) => {
        // isNaN comprueba si es un numero valido
        if (!numero || isNaN(numero)) return console.info("No es un número valido");
        (numero % 2 === 0) ?console.log(`${numero} es un numero par`): console.log(`${numero} es un numero impar`)


    }
    
    parOimpar(4)
    




    // 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

    const convertirTemperatura = (valor = undefined, unidad = "") => {

        if (!valor || unidad === undefined) return console.log("Pls add a valid information");
        
        let = result = (valor *9/5)+32 ||(valor - 32)*5/9
        if (unidad.toUpperCase()=== "C") return console.log(`${valor} ${unidad} = ${result} F`);
        if (unidad.toUpperCase()=== "F") return console.log(`${valor} ${unidad} = ${result} C`);
    }
convertirTemperatura(20,"C")
convertirTemperatura()