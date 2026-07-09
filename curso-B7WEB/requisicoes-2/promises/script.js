//PROMISES

function pegarTemperatura() {
    return new Promise(function(resolve, reject){
        console.log("pegando temperatura...");

        setTimeout(function() {
            resolve('40c na sombra');
        }, 2000);
    });
}

//Codigo sincrono
//Usando a promise

let temp = pegarTemperatura();
temp.then(function(resultado){
    console.log('TEMPERATURA: '+resultado);
});

//Quando der errado
temp.catch(function(error){
    console.log('EITA DEU ERRO!!!')
})