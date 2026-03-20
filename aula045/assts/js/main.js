const timer = document.getElementById('timer')
const iniciar = document.getElementById('iniciar')
const pausar = document.getElementById('pausar')
const zerar = document.getElementById('zerar')
let segundos = 0;
let intervalo = null;

iniciar.addEventListener('click', function (){
    console.log('iniciar')

    if (intervalo === null){

    
    intervalo = setInterval(function(){

        segundos = segundos + 1

        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const seg = segundos % 60;

        timer.innerText = String(horas).padStart(2,"0") + ":" + String(minutos).padStart(2,"0") + ":"+ String(seg).padStart(2,"0");
    }, 1000)

}

});

pausar.addEventListener('click', function(){
        clearInterval(intervalo);
        intervalo = null;

});

zerar.addEventListener('click', function(){
    clearInterval(intervalo);
    intervalo = null;

    segundos = 0;
    timer.innerText = '00:00:00';
});

