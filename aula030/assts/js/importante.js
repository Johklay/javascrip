/*const entradaData = document.getElementById('data')
const button = document.getElementById('botao') 

function zeroAEsquerda(num) {
    return num >=10 ? num : `0${num}`;
}


function mostrarData(){
    const data = new Date ();

    const diaSemana = data.getDay();
    const diaMes = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    let nomeDia

switch(diaSemana){
    case 0:
        nomeDia = "Domingo"
        break
    case 1:
        nomeDia = "Segunda-feira"
        break
    case 2:
        nomeDia = "Terça-feira"
        break
    case 3:
        nomeDia = "Quarta-feira"
        break
    case 4:
        nomeDia = "Quinta-feira"
        break
    case 5:
        nomeDia = "Sexta-feira"
        break
    case 6:
        nomeDia = "Sábado"
        break   

        default:
            nomeDia = "Dia invalido"

}

let nomeMes;

switch(mes){
    case 0:
        nomeMes = "Janeiro"
        break
    case 1:
        nomeMes = "Fevereiro"
        break
    case 2:
        nomeMes = "Março"
        break
    case 3:
        nomeMes = "Abril"
        break
    case 4:
        nomeMes = "Maio"
        break
    case 5:
        nomeMes = "Junho"
        break
    case 6:
        nomeMes = "Julho"
        break 
    case 7:
        nomeMes = "Agosto"
        break
    case 8:
        nomeMes = "Setembro"
        break
    case 9:
        nomeMes = "Outubro"
        break
    case 10:
        nomeMes = "Novembro"
        break
    case 11:
        nomeMes = "Dezembro"
        break
}
 entradaData.innerText = `${nomeDia}, ${diaMes} de ${nomeMes} de ${ano}  ${hora}:${min}:${seg}`;

 mostrarData();

}
 

NO HTML

 <section>
        <h1 class="container" id="data"> Lorem ipsum dolor sit amet consectetur adipisicing elit..</h1>
        <button id="botao">Aperte</button>
    </section>

Codigo com a função CLICK, para quando clicar, a hora ser mostrada*/




