

// function primeiraPalavra (frase) {
    
//     const partes = frase.split(" ")
//     const inicioPalavra = partes.shift()
   


//     return{
//          frase,
//          inicioPalavra,
//          resto: partes.join(" ")

//     }
// }

// const f1 = primeiraPalavra("Eu gosto de pizza")

// console.log(f1.inicioPalavra);
// console.log(f1.resto);

function criaFrase(frase) {

    const partes = frase.split(" ")
    const ultimo = partes.pop()

    return{
        frase,
        ultimo,
        inicio: partes.join(" ")
    }
}

const f1 = criaFrase("javascript é muito bom")

console.log(f1.inicio)
console.log(f1.ultimo)
