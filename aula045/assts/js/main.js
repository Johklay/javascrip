const timer = document.getElementById('timer')
const iniciar = document.getElementById('iniciar')
let segundos = 0;
let intervalo = null;

function time (timer){
    timer.innerText = "10"

}


iniciar.addEventListener('click', function (){

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

