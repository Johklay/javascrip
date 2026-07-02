//STRING-PADEND => 5********
//Adiciona caracteres no INÍCIO da string até atingir o tamanho informado.

let telefone = '5';

console.log( telefone.padEnd(9, '*'))

////////////////////////////////////////////////////////////

//STRING-PADSTART => ********5
//Adiciona caracteres no FINAL da string até atingir o tamanho informado.


let numeroTelefone = '5';

console.log( telefone.padStart(9, '*'))

///////////////////////////////////////////////////////////

//EXEMPLO PRATICO

let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*')

console.log('Este é o seu cartão?' + cartaoMascarado)