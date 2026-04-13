function criaCarrinho () {
    return {
        produtos: [],

        addProduto(nome, preco) {
            const produto = this.produtos.find(p => p.nome === nome)

            if (produto) {
                produto.quantidade ++
            } else {
                this.produtos.push({ nome, preco, quantidade: 1})
            }
        },

        total() {
            let total = 0;

            for (let produto of this.produtos) {
                total += produto.preco * produto.quantidade
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
carrinho.addProduto("Cueca", 25)
carrinho.removeProduto ("Camiseta")

console.log(carrinho.produtos)
console.log(carrinho.total())