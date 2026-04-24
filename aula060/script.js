//ARRAYS
//Indice            0         1        2      3        4


//Converter string em array

// const nome = 'John Klayverton john';
// const nomes = nome.split(' ');
const nomes =[ 'John', ' Klayverton', ' john' ]; 

//Array em string
const nome = nomes.join(' ');
console.log(nomes);

//fatiar os elementos/array
// const nomes = ['Eduardo', 'Maria', 'Joana', 'John', 'Lucas'];
// const novo = nomes.slice(1, -1);
// console.log(novo)


//Adicionar elementos no começo do array
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.unshift('João');
// nomes.unshift('John');
// console.log(nomes);

//Adicionar elementos no final do array
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.push('João');
// console.log(nomes);

//Remove o elemento do começo
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.shift();
// console.log(nomes, removido);


//Remove o elemento do final
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.pop();
// console.log(nomes, removido);

//Mostra a quantidade de elementos
//  const nomes = ['Eduardo', 'Maria', 'Joana'];
//  console.log(nomes.length)


//Valor por referencia
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes];
// novo.pop();
// console.log(nomes);
// console.log(novo);


// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes[2] = 'Joao';
// delete nomes[2];
// console.log(nomes);


//Funciona para string, Objetos, funções.
// const nomes = new Array ('Eduardo', 'Maria', 'Joana');