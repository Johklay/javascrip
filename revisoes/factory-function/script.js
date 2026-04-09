// function criaPessoa (nomeCompleto) {
//     const partes = nomeCompleto.split(" ");
//     const primeiroNome = partes.shift();
//     const sobrenome = partes.join(" ");

//     return{
//         nomeCompleto,
//         primeiroNome,
//         sobrenome,

//         mostrarNome(){
//             console.log(this.primeiroNome);
//         }
//     };
// }

// const p1 = criaPessoa("John Klayverton")
// const p2 = criaPessoa("Maria de Souza")

// console.log(p1.nomeCompleto);
// console.log(p2.nomeCompleto);

function criaPessoa (nomeCompleto) {
    const partes = nomeCompleto.split(" ");
    const primeiroNome = partes.shift();
    const sobrenome = partes.join(" ");

    return{
        nomeCompleto,
        primeiroNome,
        sobrenome,

        mostrarNome(){
            console.log(this.primeiroNome);
        },

        iniciais(){
            const nomes = this.nomeCompleto.split(" ");
            const letras = [];
            
            for (let i= 0; i < nomes.length; i++){
            letras.push(nomes[i][0]);
            }
            
            console.log(letras.join("."))
            
        
        }
    };
}

const p1 = criaPessoa("John Klayverton")
const p2 = criaPessoa("Maria De Souza")

console.log(p1.nomeCompleto);
p1.iniciais();
console.log(p2.nomeCompleto);
p2.iniciais();

