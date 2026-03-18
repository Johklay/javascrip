function dobro (n){
    if(typeof n !== 'number'){
        throw new Error (' Valor precisa ser um número')
    }
    
    return n * 2
}

try {
    console.log(dobro(10))
    console.log(dobro("a"))
}catch (erro) {
    console.log("Erro:", erro.message)
}