//SetInterval, executa varias vezes em um tempo determinado

// let timer;

// function comecar() {
    
//     timer = setInterval(showTime, 1000);
// }
// function parar() {
//     clearInterval(timer);
// }

// function showTime () {
//     let d = new Date();

//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     let txt = h +':' +m+ ':' +s;

//     document.querySelector('.demo').innerHTML = txt;
// }

//////////////////////////////////////////////////////////

//SetTimeOut, executa apenas uma vez 

let timer;

function comecar(){
    timer = setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'Rodou'
}, 2000);
}

function parar(){
    clearTimeout(timer);
}
