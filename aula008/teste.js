const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;


const alturaAoQuadrado = alturaEmM * alturaEmM;
resultadofinal =  peso / alturaAoQuadrado;
const anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${resultadofinal}`)
console.log(`Ele nasceu em', ${anoNascimento}`)
console.log('Ele está no peso ideal')