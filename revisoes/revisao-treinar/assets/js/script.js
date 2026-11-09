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


            const buttonApagar = document.createElement("button");
            buttonApagar.innerText = "Apagar";

            buttonApagar.addEventListener("click", function(event) {
                event.stopPropagation();
                li.remove();
                atualizarContadores();
            });
            li.appendChild(buttonApagar);
        }

        marcarTarefa();
        atualizarContadores();
    });
}



function marcarTarefa() {
    const tarefas = [...document.querySelectorAll("#lista-tarefas li")];
    tarefas.forEach(function(tarefa) {
        tarefa.addEventListener("click", function() {
            tarefa.classList.toggle("marcada");

            atualizarContadores();
        });
    });
}

function atualizarContadores() {
    const tarefasConcluidas = document.querySelector(".tarefas-concluidas h2");
    const tarefasPendentes = document.querySelector(".tarefas-pendentes h2");
    const totalTarefas = document.querySelectorAll("#lista-tarefas li");

    const tarefasArray = [...totalTarefas];
   
    const concluidas = tarefasArray.filter(function(tarefa) {
        return tarefa.classList.contains("marcada");
    })

    tarefasConcluidas.innerText =  concluidas.length;
    tarefasPendentes.innerText = tarefasArray.length - concluidas.length;

}

addTarefa();

