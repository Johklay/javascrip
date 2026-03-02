function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTextoak;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTextoeak;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;

        default:
        diaSemanaTexto = '""';
}
}   


const data = new Date('1987-04-27 00:00:00')
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)




console.log(diaSemana, diaSemanaTexto);