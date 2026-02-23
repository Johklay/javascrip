const form = document.querySelector('form');

form.addEventListener('submit', function (event){
    event.preventDefault();

const pesoInput = document.getElementById('peso');
const alturainput = document.getElementById('altura')
const resultado = document.getElementById('resultado')

const peso = Number (pesoInput.value);
const altura = Number (alturainput.value);

console.log(peso);
console.log(altura);

const imc = peso / (altura * altura)

let nivel;

if(imc < 18.5) {
    nivel = 'Abaixo do peso';  
} else if (imc < 25){
    nivel = 'peso normal';
} else if (imc < 30) {
    nivel = 'Sobrepeso';
} else if (imc < 35) {
    nivel = 'Obesidade grau 1';
} else if (imc < 40) {
    nivel = 'Obesidade grau 2';
} else {
    nivel = 'Obesidade grau 3';
}

resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${nivel})`;

resultado.style.display = 'block';

})
