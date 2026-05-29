//https://jsonplaceholder.typicode.com/posts

// Métodos de envio
// GET, POST, PUT, DELETE

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    })
    .then((json) => {
        alert(`Título do primeiro posts: ${json[0].title}`);
    })
    .catch( (error) => {
        alert('Deu problema na requisição seu buro')
    })
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    .then( (response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json);
    });
}


document.querySelector('#botao').addEventListener('click', clicou);

document.querySelector('#inserir').addEventListener('click', inserir);
