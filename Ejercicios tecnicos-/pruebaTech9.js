/*4) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/ 








/*Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/ 

    const ascendenteYdescendente =(arr = undefined)=>{
        // Validations
        if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio. No ingresaste un Array de numeros");
        if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
       
        // Validation in fuction, to check if the information is array or not 
        for (const num of arr) {
            if(typeof num !=="number") return console.log(`el valor ${num} no es un Array valido`);;
        }
        
        // Function ascendent and descendt


        const ascendent = arr.slice().sort((a,b)=> a-b);
        const descendt = arr.slice().sort((a,b)=> b-a);

        return console.log({"Ascendent" : ascendent,"Descendt" : descendt})

        
    }

    // ascendenteYdescendente([])
    // ascendenteYdescendente([""])
    // ascendenteYdescendente([true])
    // ascendenteYdescendente([1,2,3,4,5])




// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].


const borrarDuplicado = (arr = undefined) =>{
          // Validations
          if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio. No ingresaste un Array de numeros");
          if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
         
          // Validation in fuction, to check if the information is array or not 
          for (const num of arr) {
              if(arr instanceof Array) return console.log(`el valor ${num} no es un Array valido`);;
          }


          
}

