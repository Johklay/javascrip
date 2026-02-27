const hoje = new Date();
const dia= hoje.getDate();
const mes= hoje.getMonth() + 1;
const ano= hoje.getFullYear();
const diaSemana= hoje.getDay();

const horas= hoje.getHours();
const minutos= hoje.getMinutes();

console.log(`${dia}/${mes}/${ano} ${horas}:${minutos}  ${diaSemana}`)