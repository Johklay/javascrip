
function adicionarProduto (nome, preco) {
    return {
        nome,
        preco,
        emEstoque : true
    }
}

let produto = adicionarProduto("camiseta", 50)

if(produto.preco >= 40){
    console.log('Produto disponivel')
}else{
    console.log('Fora de estoque')
}

function verificarProduto (produto) {
    if(produto.emEstoque) {
        console.log(`${produto.nome} em estoque`)
    } else {
        console.log(`${produto.nome} fora de estoque`)
    }
}

function aplicarDesconto (produto, desconto) {
    let valorDesconto = produto.preco *desconto/100

    produto.preco = produto.preco - valorDesconto 
    
    

}


console.log(produto);
verificarProduto(produto);
console.log(produto, 'antes')
aplicarDesconto(produto, 10);
console.log(produto, 'depois')