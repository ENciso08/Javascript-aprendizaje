/**
 
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
 pe. miFuncion(5) devolverá 120


 */

//  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

   const randomNumber = () => console.log(Math.round(Math.random()*100)+500);
   randomNumber()






//  Programa una función que reciba un número y evalúe si es capicúa o no 

const capicua = (numero = 0) => {
    if (!numero) return console.info("No es un número");
    if(typeof numero !== "number")return console.error(`el valor ${numero} No es un numero`);
    
    numero = numero.toString()
    let numeroToString =numero.split('').reverse().join('');

    return (numero === numeroToString)
        ? console.log(`Sí es capicúa: ${numero}, porque se lee ${numeroToString}`)
        : console.log(`No es capicúa: ${numero}, porque se lee ${numeroToString}`);
}

capicua(2002)
capicua(2.6)
capicua(20.9)






//  Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
// pe. miFuncion(5) devolverá 120

const factorial = (n = undefined)=> {
    if (n === undefined) return console.error("No es un numero");;
    if(typeof n !== "number") return console.log(`El valor ${n} ingresado No es un numero`);
    if(n === 0) return console.error("El numero no puede ser 0");
    if(Math.sign(n)=== -1) return console.error("El numero no puede ser negativo");

    let factorial= 1;
    for (let i = n; i > 1; i--) {
        factorial *=i;
        
    }

    return console.log(`El factorial ${n} es ${factorial}`);
}
factorial(6)
factorial(0)
factorial("")