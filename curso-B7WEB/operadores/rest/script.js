//Operador rest
//junta vários valores em um array

// function adicionar (...numeros) {
//     console.log(numeros);
// }

// adicionar(5, 6, 7, 8, 9, 10);

/////////////////////////////////////////////////

let nome = ['John', 'João'];

function adicionar (nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]

    return novoConjunto;

}

let nomes = ['John', 'João'];

let outros = adicionar(nomes, 'Paulo', 'Maria', 'Rafa');

console.log(outros);
