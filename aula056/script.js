//Função cosntrutora

function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = function () {
        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log('Sou um método')
    }
}

const p1 = new Pessoa ('Luiz', 'Otavio')
const p2 = new Pessoa('Maria', 'Oliveira')

p1.metodo();