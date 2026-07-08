//O que são requisições?

//Uma requisição (request) é um pedido que um programa faz para outro programa ou servidor.

// Seu navegador
//       │
//       │ Requisição
//       ▼
// Servidor
//       │
//       │ Resposta
//       ▼
// Seu navegador

//O que é JSON => JavaScript Object Notation 

// Apesar do nome ter "JavaScript", ele é usado em praticamente todas as linguagens de programação.

// O JSON serve para armazenar e trocar informações entre sistemas.

//JSON é um formato de texto para troca de dados. Ele segue regras específicas, como usar aspas duplas nas propriedades e strings.

// E o detalhe que mais entrega que algo é JSON:

// "chave": "valor"

// Se você vê as chaves com aspas duplas, provavelmente está olhando para JSON.

//exemplos de JSON no console do navegador

let pessoa = {
    nome: 'John',
    idade: 60,
    caracteristicas: ['Sorridente', 'inteligente', 'top']
};

//pessoa.nome 
// 'John' - saida

//pessoa.idade
// 60 - saida

//pessoa.caracteristicas: ['Sorridente', 'inteligente', 'top'] - saida


////////////////////////////////////////////////////////////

let pessoa = {
    nome: 'John',
    idade: 60,
    estetica: {
        altura: 200,
        peso: 10
    }
}

//pessoa.nome
// 'John' - saida

// pessoa.idade
// 60 - saida

// pessoa.estetica
// {altura: 200, peso: 10} - saida

// pessoa.estetica.peso
// 10 - saida

///////////////////////////////////////////////////////////

//JSON.parse - transforma um JSON (em formato de texto/string) em um objeto JavaScript.

// Transforma em objeto

let pessoa = JSON.parse('{"nome": "John", "idade": 90}');
//////////////////////////////////////////////////////////////
// JSON em formato de string
let texto = '{"nome":"John","idade":22}';

// Transformando JSON em objeto
let pessoa = JSON.parse(texto);

console.log(pessoa.nome);

Resultado:

John

////////////////////////////////////////////////////////////

//JSON.stringify

// E o contrário:

let pessoa = {
    nome: "John"
};

let json = JSON.stringify(pessoa);

//outro exemplo

//aqui é um objeto
JSON.stringify({nome: 'John', idade: 60});

//resultado do objeto em JSON
'{"nome":"John","idade":60}'

//Aqui faz com que o JSON volte a ser um objeto
JSON.parse('{"nome":"John","idade":60}')

// {nome: 'John', idade: 60}

//Objeto JavaScript → JSON.stringify() → JSON (string)

// \ (barra de escape)
// → permite usar caracteres especiais dentro de uma string.

// Ex:
// \" = aspas dentro de uma string
// \n = quebra de linha

////////////////////////////////////////////////////////////

//parse = ler/interpretar → JSON para objeto


//stringify = transformar em string → objeto para JSON