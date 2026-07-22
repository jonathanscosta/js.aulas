

const formTarefa = document.getElementById("formTarefa");
const inputTarefa = document.getElementById("inputTarefa");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");
const totalTarefas = document.getElementById("totalTarefas");



let tarefas = [];



function carregarLocalStorage() {

    const tarefasSalvas = localStorage.getItem("tarefas");

    if (tarefasSalvas) {

        tarefas = JSON.parse(tarefasSalvas);

    }

}


function salvarLocalStorage() {

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

}



function atualizarContador() {

    totalTarefas.textContent = `Total de tarefas: ${tarefas.length}`;

}



function exibirTarefas() {

    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa) => {

        const item = document.createElement("li");

        item.classList.add("tarefa");

        item.innerHTML = `
        
            <input type="checkbox">

            <span class="texto">${tarefa.titulo}</span>

            <div class="acoes">

                <button class="editar">

                    <i class="fa-solid fa-pen"></i>

                </button>

                <button class="excluir">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;

        listaTarefas.appendChild(item);

    });

    atualizarContador();

}



formTarefa.addEventListener("submit", function(event) {

    event.preventDefault();

    mensagem.textContent = "";

    const titulo = inputTarefa.value.trim();

    if (titulo === "") {

        mensagem.textContent = "Digite uma tarefa.";

        return;

    }

    const novaTarefa = {

        id: Date.now(),

        titulo: titulo,

        concluida: false

    };

    tarefas.push(novaTarefa);

    salvarLocalStorage();

    exibirTarefas();

    inputTarefa.value = "";

    inputTarefa.focus();

});



carregarLocalStorage();

exibirTarefas();