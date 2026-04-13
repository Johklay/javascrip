function criaCarrinho () {
    return {
        produtos: [],

        addProduto(nome, preco) {
            this.produtos.push({nome, preco})
        },

        total() {
            let total = 0;

            for (let produto of this.produtos) {
                total += produto.preco
            }

            return total

        },

         removeProduto(nome) {
                this.produtos = this.produtos.filter(produto=> produto.nome !== nome)
            }
    }
}

const carrinho = criaCarrinho()

carrinho.addProduto("Camiseta", 50)
carrinho.addProduto("Calça", 80)
carrinho.removeProduto ("Camiseta")

console.log(carrinho.produtos)
console.log(carrinho.total())