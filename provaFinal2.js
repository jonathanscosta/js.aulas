

const todas = document.getElementById("todas");
const pendentes = document.getElementById("pendentes");
const concluidas = document.getElementById("concluidas");
const limparConcluidas = document.getElementById("limparConcluidas");




let filtroAtual = "todas";




function exibirTarefas() {

    listaTarefas.innerHTML = "";


    let tarefasFiltradas = tarefas;


    if (filtroAtual === "pendentes") {

        tarefasFiltradas = tarefas.filter(
            tarefa => !tarefa.concluida
        );

    }


    if (filtroAtual === "concluidas") {

        tarefasFiltradas = tarefas.filter(
            tarefa => tarefa.concluida
        );

    }



    tarefasFiltradas.forEach((tarefa) => {


        const item = document.createElement("li");

        item.classList.add("tarefa");


        if (tarefa.concluida) {

            item.classList.add("concluida");

        }



        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = tarefa.concluida;



        checkbox.addEventListener("change", () => {

            alternarConclusao(tarefa.id);

        });



        const texto = document.createElement("span");

        texto.classList.add("texto");

        texto.textContent = tarefa.titulo;



        const areaBotoes = document.createElement("div");

        areaBotoes.classList.add("acoes");



        const botaoEditar = document.createElement("button");

        botaoEditar.classList.add("editar");

        botaoEditar.innerHTML =
        '<i class="fa-solid fa-pen"></i>';



        botaoEditar.addEventListener("click", () => {

            editarTarefa(tarefa.id);

        });



        const botaoExcluir = document.createElement("button");

        botaoExcluir.classList.add("excluir");

        botaoExcluir.innerHTML =
        '<i class="fa-solid fa-trash"></i>';



        botaoExcluir.addEventListener("click", () => {

            removerTarefa(tarefa.id);

        });



        areaBotoes.appendChild(botaoEditar);

        areaBotoes.appendChild(botaoExcluir);



        item.appendChild(checkbox);

        item.appendChild(texto);

        item.appendChild(areaBotoes);



        listaTarefas.appendChild(item);


    });


    atualizarContador();

}





function alternarConclusao(id) {


    tarefas = tarefas.map(tarefa => {


        if (tarefa.id === id) {

            tarefa.concluida = !tarefa.concluida;

        }


        return tarefa;


    });


    salvarLocalStorage();

    exibirTarefas();

}





function removerTarefa(id) {


    tarefas = tarefas.filter(
        tarefa => tarefa.id !== id
    );


    salvarLocalStorage();

    exibirTarefas();

}





function editarTarefa(id) {


    const tarefa = tarefas.find(
        tarefa => tarefa.id === id
    );


    const novoTitulo = prompt(
        "Editar tarefa:",
        tarefa.titulo
    );


    if (
        novoTitulo !== null &&
        novoTitulo.trim() !== ""
    ) {


        tarefa.titulo = novoTitulo.trim();


        salvarLocalStorage();

        exibirTarefas();


    }

}





limparConcluidas.addEventListener(
"click",
() => {


    tarefas = tarefas.filter(
        tarefa => !tarefa.concluida
    );


    salvarLocalStorage();

    exibirTarefas();


});





todas.addEventListener("click", () => {

    filtroAtual = "todas";

    alterarFiltroAtivo(todas);

    exibirTarefas();

});



pendentes.addEventListener("click", () => {

    filtroAtual = "pendentes";

    alterarFiltroAtivo(pendentes);

    exibirTarefas();

});



concluidas.addEventListener("click", () => {

    filtroAtual = "concluidas";

    alterarFiltroAtivo(concluidas);

    exibirTarefas();

});




function alterarFiltroAtivo(botao) {


    document
    .querySelectorAll(".filtros button")
    .forEach(btn => {

        btn.classList.remove("ativo");

    });


    botao.classList.add("ativo");


}