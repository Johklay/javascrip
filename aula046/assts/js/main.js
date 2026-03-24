const button = document.getElementById('button')
const input = document.getElementById('input')
const lista = document.getElementById('lista')

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

tarefas.forEach (function(tarefa){

 const li = document.createElement ('li') 
    li.innerText = tarefa
   
    const buttonApagar = document.createElement('button')
    buttonApagar.innerText = 'Apagar'

  buttonApagar.addEventListener('click', function(){
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(t => t !== tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    li.remove();

});
    lista.appendChild(li)
    li.appendChild(buttonApagar)
    });


button.addEventListener('click', function(){
    const valorTarefa = input.value
    const tarefas = JSON.parse (localStorage.getItem('tarefas')) || []; 
    tarefas.push(input.value)
    localStorage.setItem('tarefas',  JSON.stringify(tarefas))

    const li = document.createElement ('li') 
    li.innerText = input.value 
   
    const buttonApagar = document.createElement('button')
    buttonApagar.innerText = 'Apagar'

    buttonApagar.addEventListener('click', function(){
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(t => t !==valorTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    li.remove();
});

    li.appendChild(buttonApagar);
    lista.appendChild(li);
    input.value = ''

});


