//https://jsonplaceholder.typicode.com/posts

// TIPOS DE STATUS

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/pos2ts').then((response) => {
        console.log(`Status: ${response.status}`)
        return response.json();
    })
    .then((json) => {
        alert(`Título do primeiro posts: ${json[0].title}`);
    })
    .catch( (error) => {
        alert('Deu problema na requisição seu buro')
        console.log(error);
    })
    .finally(() =>{
        alert('Deu tudo certo')
    })
}

document.querySelector('#botao').addEventListener('click', clicou);