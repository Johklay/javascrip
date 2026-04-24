//indice negativo -5       -4        -3         -2       -1
//indice          0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

//nomes.splice(indice atual, delete, elem1, elem2, elem3);

//pop
// const removidos = nomes.splice(3, -1);

//shift
// const removidos = nomes.splice(0, 1);

//push
// nomes.splice(nomes.length, 0, 'Luiz', 'John')

//unshift
nomes.splice(2, 0, 'Luiz', 'John')
console.log(nomes)
