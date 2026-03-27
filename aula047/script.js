//FUNÇÃO TRADICIONAL

function saudacao() {
  console.log("Olá!");
}

saudacao();

//FUNÇÃO COM PARÂMETRO

function saudacao(nome) {
  console.log("Olá, " + nome);
}

saudacao("John");


//FUNÇÃO COM RETORNO

function soma(a, b) {
  return a + b;
}

//para usar

let resultado = soma(5, 3);
console.log(resultado);


//FUNÇÃO ANÔNIMA

const saudacao = function() {
  console.log("Oi!");
}

//ARROW FUNCTION

const soma = (a, b) => {
  return a + b;
}

//forma curta

const soma = (a, b) => a + b;


///function → tem seu próprio this
//arrow function → NÃO tem this próprio

//EXEMPLO PRATICO SIMPLES

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarIdade(20));