const container = document.querySelector('.container');



const elementos = [

    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 4'}
];

for(let i = 0; i < elementos.length; i++){
    const tag = elementos[i].tag;
    const texto = elementos[i].texto
    const elemento = document.createElement(tag);
   
    elemento.innerText = texto
    container.appendChild(elemento)
}
