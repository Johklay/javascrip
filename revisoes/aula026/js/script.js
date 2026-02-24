const entradaNome = document.getElementById('nome')
const entradaSaida = document.getElementById('saida')
const botao = document.getElementById('button')

botao.addEventListener('click', function () {
    entradaSaida.innerText = entradaNome.value
})
