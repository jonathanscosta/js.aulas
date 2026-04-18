let tarefas = [];


const adicionarTarefa = function () {
    let nome = prompt("Digite a tarefa:");
    tarefas.push(nome);
};


const listarTarefas = () => {
    if (tarefas.length === 0) {
        console.log("Lista vazia.");
    } else {
        tarefas.forEach((tarefa, indice) => {
            console.log(`${indice} - ${tarefa}`);
        });
    }
};


function executarOperacao(callback) {
    callback();
}


const removerTarefa = function () {
    let indice = Number(prompt("Digite o índice para remover:"));
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
    } else {
        console.log("Índice inválido.");
    }
};

const atualizarTarefa = function () {
    let indice = Number(prompt("Digite o índice para atualizar:"));
    if (indice >= 0 && indice < tarefas.length) {
        let nova = prompt("Digite a nova tarefa:");
        tarefas[indice] = nova;
    } else {
        console.log("Índice inválido.");
    }
};

const concluirTarefa = function () {
    let indice = Number(prompt("Digite o índice para concluir:"));
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice] = "✅ " + tarefas[indice];
    } else {
        console.log("Índice inválido.");
    }
};

// 🔁 Loop principal
while (true) {
    let opcao = Number(prompt(
        "1. Adicionar\n2. Listar\n3. Remover\n4. Atualizar\n5. Concluir\n6. Sair"
    ));

    if (opcao === 1) {
        adicionarTarefa();

    } else if (opcao === 2) {
        listarTarefas();

    } else if (opcao === 3) {
        executarOperacao(removerTarefa);

    } else if (opcao === 4) {
        executarOperacao(atualizarTarefa);

    } else if (opcao === 5) {
        executarOperacao(concluirTarefa);

    } else if (opcao === 6) {
        console.log("Saindo...");
        break;

    } else {
        console.log("Opção inválida.");
    }
}