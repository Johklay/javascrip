// let info = [ 'John Klayverton', 'John', 'Klayverton', '@jonkla'];

// let [ nomeCompleto, nome, sobrenome, instagram] = info;

// use , (virgula) caso deseje pular algum item
//let [ nomeCompleto, ,sobrenome, instagram] = info;

// console.log(nomeCompleto, sobrenome, instagram);

//Desconstrução direto de uma função

// function criar () {
//     let a = [1,2,3]
//     return a;
// }

// let numeros = criar();

// let [a,b,c] = numeros;

// console.log(a,b,c);


//economizar variaveis

function criar () {
    return [1,2,3];
}

let [a,b,c] = criar();

console.log(a,b,c);