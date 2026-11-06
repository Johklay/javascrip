const addTarefas = document.getElementById("adicionar-tarefa");
const entradaTexto = document.querySelector("input[type='text']");


function addTarefa() {
    addTarefas.addEventListener("click", function() {

        const tarefa = entradaTexto.value.trim();
        if (tarefa) {
            const li = document.createElement("li");
            li.innerText = tarefa;

            document.getElementById("lista-tarefas").appendChild(li);

            entradaTexto.value = "";
        }

        /*const buttonApagar = document.createElement("button");
        buttonApagar.innerHTML = "Apagar";
        li.appendChild(buttonApagar);*/
        

        marcarTarefa();
    });
}



function marcarTarefa() {
    const tarefas = [...document.querySelectorAll("#lista-tarefas li")];
    tarefas.forEach(function(tarefa) {
        tarefa.addEventListener("click", function() {
            tarefa.classList.toggle("marcada");
        });
    });
}

function apagarTarefas() {
    const apagarTarefas = document.getElementById("apagar-tarefas");
    apagarTarefas.addEventListener("click", function(){

    })
}

addTarefa();
