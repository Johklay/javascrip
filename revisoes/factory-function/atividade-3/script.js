// function criaPessoa (nomeCompleto) {
//     const nome = nomeCompleto.split(" ")
//     const primeiroNome = nome.shift()
//     const sobrenome = nome.join(" ")

//     return{
//         nome, 
//         primeiroNome,
//         nomeCompleto,
//         sobrenome,

//        mostrarNome(){
//         console.log(this.nomeCompleto)
//        },

//        nomeFormatado() {
//        return `${this.sobrenome}, ${this.primeiroNome}`

//        }
       
//     }
// }

// const p1 = criaPessoa ("John Klayverton de Souza Silva")

// p1.mostrarNome()
// console.log(p1.nomeFormatado())

function criaPessoa (nomeCompleto) {
    const nome = nomeCompleto.split(" ")
    const primeiroNome = nome.shift()
    const sobrenome = nome.pop()

    return{
        nome, 
        primeiroNome,
        nomeCompleto,
        sobrenome,

       mostrarNome(){
        console.log(this.nomeCompleto)
       },

       nomeFormatado() {
       return `${this.sobrenome}, ${this.primeiroNome}`

       }
       
    }
}

const p1 = criaPessoa ("John Klayverton de Souza Silva")

p1.mostrarNome()
console.log(p1.nomeFormatado())