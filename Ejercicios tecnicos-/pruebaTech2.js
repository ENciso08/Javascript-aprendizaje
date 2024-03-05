/**
 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


 */



//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const inverse =(invertir ="")=>(!invertir)? console.info("not a string"): console.log(invertir.split("").reverse().join(""));

 inverse("Anita lava la tina");
 inverse("")


// Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarRep = ( cadena ="",texto="") => {
    if(!cadena)return console.info("No ingresaste un texto largo");
    if(!texto) return console.log("No data to validate!");

    let i = 0,
    contador =0;

    while (i!==-1) {
        i =cadena.indexOf(texto,i);
        if(i!==-1){
            i++;
            contador++;
        }
    }

    return console.info(`la palabra ${texto} se repite ${contador} veces`)
     
}


 contarRep("Hola mundo , adios  mundo, comoo mundo, es un mundo de cabeza dura, el mundo","mundo")




// Programa una función que valide si una palabra o frase dada,
//  es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const palindromo = (palabra ="")=>{
    if(!palabra) return console.info("No ingresaste una frase");
    palabra.toLocaleLowerCase();
    let alReves = palabra.split('').reverse('').join('');

    return (palabra === alReves) 
    ?console.log(`Si es palindromo ${palabra}. Palabra al reves ${alReves}`)
    :console.log(`No es palindromo ${palabra}. Palabra al reves ${alReves}`)

     
}


palindromo("ana");
palindromo("romano");
palindromo("")


// Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


const eliminarCaracteres = (texto ="", patron ="")=>
(!texto)
? console.log("No hay texto")
:(!patron)
? console.log("no ingresaste un patron de caracteres")
:console.info(texto.replace(new RegExp(patron,"ig"),""))


eliminarCaracteres();
eliminarCaracteres("Prueba");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","[a-z]")