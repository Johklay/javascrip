try {
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')

try{
    console.log(b);
}catch{
    console.log('Deu erro')
}finally{
    console.log('também sou FINALLY')
}


} catch (e) {
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}