let pessoa = {
    nome:'John',
    sobrenome: 'Klayverton',
    idade: 89,
    social: {
        facebook: 'Jonklay',
        instagram: {
            url: '@jonkla',
            seguidores: 1000
        }
    },
};

function pegarNomeCompleto({nome, sobrenome}) {

    return `${nome} ${sobrenome}`;


}

console.log(pegarNomeCompleto(pessoa))


// let {nome, sobrenome, idade} = pessoa;

// console.log(nome, sobrenome, idade);


// let {nome, idade, social:{instagram} } = pessoa;

// console.log(nome, idade, instagram);