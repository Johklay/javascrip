// 1. Spread em Arrays
// Copia ou junta arrays sem alterar os originais.

let frutas = ['Maçã', 'Banana'];
let maisFrutas = [...frutas, 'Uva'];

console.log(maisFrutas);
// ['Maçã', 'Banana', 'Uva']
// ==============================
// 2. Spread em Objetos
// Copia um objeto ou adiciona/atualiza propriedades.

let pessoa = {
    nome: 'John',
    idade: 22
};

let pessoaAtualizada = {
    ...pessoa,
    cidade: 'Goiânia',
    idade: 23
};

console.log(pessoaAtualizada);
// { nome: 'John', idade: 23, cidade: 'Goiânia' }
// ==============================
// 3. Spread em Funções
// Espalha os elementos de um array como argumentos da função.

function somar(a, b, c) {
    return a + b + c;
}

let numeros = [10, 20, 30];

console.log(somar(...numeros));
// 60