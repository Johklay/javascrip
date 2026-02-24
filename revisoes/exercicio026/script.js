const entradaTexto = document.getElementById('texto')
const botao = document.getElementById('botao')
const resultado = document.getElementById('resultado')

botao.addEventListener('click', function(){
    resultado.innerText = entradaTexto.value
})