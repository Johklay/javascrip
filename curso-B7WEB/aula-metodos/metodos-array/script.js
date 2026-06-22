// Junta os valores do array separados por virgula em string

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// let res = lista.toString();

// console.log(res);


// Transforma o array em string, separando os elementos pelo item que selecionou (' - ')

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// let res = lista.join('-');

// console.log(res);

// Procura um item especifico no array e ele diz onde está 

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// let res = lista.indexOf('Corante');

// console.log(res);


//Remove o ultimo item do array

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista.pop();

// let res = lista;

// console.log(res);

//Remove o primeiro item do array

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista.shift();

// let res = lista;

// console.log(res);

//Adiciona novo item ao array

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista.push('açucar');

// let res = lista;

// console.log(res);


// Altera/cria e substitui o item utilizando o indice do item

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista[0] = 'Ovos' ;

// let res = lista;

// console.log(res);

//Mostra a quantidade de item no seu array utilizando lenght

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista[lista.length] = 'Ovos' ;

// let res = lista;

// console.log(res);

//********************************************************************


//Remover item do array utilizando splice

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista.splice(1, 1);

// let res = lista;

// console.log(res);

//Junta arrays um com o outro/ concatena arrays

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']
// let lista2 = ['Forma', 'Forno', 'Liquidificador', 'Prato']

// let res = lista.concat(lista2);

// console.log(res);

//Ordena o array em ordem alfabetica 

// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista.sort();

// let res = lista;

// console.log(res);


// Ordena o array em ordem descrecente, ao contrario
// let lista = ['Ovo', 'Farinha', 'Corante', 'Leite']

// lista.sort();
// lista.reverse();

// let res = lista;

// console.log(res);

//----------------------------------------------------------------------------------------------------

//Mapeia o array e gera um novo array

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.map(function (item) {
//     return item * 2;
// })

// // for (let i in lista) {
// //     lista2.push(lista[i] * 2);
// // }
 
// let res = lista2;

// console.log(res);

// Vai rodar a função e vai retornar false ou true

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.filter(function (item) {
//     if(item < 20) {
//         return true;
//     } else{
//         return false;
//     }
// });

 
// let res = lista2;

// console.log(res);

// vai verificar se é true ou false mas não vai gerar um novo array, exemplo: se todos os itens forem maior que 10 vai retornar apenas true se nao retorna false

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.every(function (item) {
//     // if(item > 3) {
//     //     return true;
//     // }else{
//     //     return false;
//     // }

//     return (item > 3) ? true : false;
// });

 
// let res = lista2;

// console.log(res);


//Vai procuarar algo especifico no array e vai retornar o primeiro item com as condições definidas por vc 

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.find(function (item) {
//     return (item == 16) ? true : false;

// });

 
// let res = lista2;

// console.log(res);

// Retorna o index\Posição do item

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.findIndex(function (item) {
//     return (item == 16) ? true : false;

// });

 
// let res = lista2;

// console.log(res);

// exemplo real 

let lista = [
    {id: 1, nome:'Bonieky', sobrenome:'Lacerda'},
    {id: 2, nome:'John', sobrenome:'Klayverton'},
    {id: 3, nome:'J.K', sobrenome:'Sker'}
];

let pessoa = lista.find(function(item){
    return (item.sobrenome == 'Sker') ? true : false;
});

 
let res = pessoa;

console.log(res);