/*const hoje = new Date();
const dia= hoje.getDate();
const mes= hoje.getMonth() + 1;
const ano= hoje.getFullYear();
const diaSemana= hoje.getDay();

const horas= hoje.getHours();
const minutos= hoje.getMinutes();

console.log(`${dia}/${mes}/${ano} ${horas}:${minutos} ${diaSemana}`)*/


const hoje = new Date();
const dataBrasil = formataData(hoje); 

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

/**
 * @param {Date} hoje
 */
function formataData(hoje) {
    const dia=  zeroAEsquerda (hoje.getDate());
    const mes=  zeroAEsquerda (hoje.getMonth() + 1);
    const ano=  zeroAEsquerda (hoje.getFullYear());
    const diaSemana=  zeroAEsquerda (hoje.getDay());

    const horas= zeroAEsquerda (hoje.getHours());
    const minutos= zeroAEsquerda (hoje.getMinutes());
    const segundos= zeroAEsquerda (hoje.getSeconds());
    
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos} ${diaSemana}`
}
console.log(dataBrasil);