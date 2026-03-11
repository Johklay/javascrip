//for in -> lê os índices ou chaves do objeto

const frutas = ['pera', 'maça', 'uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

console.log('-------------------------------')

//For of

for (let valor of frutas) {
    console.log(valor);
}
