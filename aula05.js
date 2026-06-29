let tarefas = [];

while (true) {
    let opcao = Number(prompt(
        "1. Adicionar tarefa\n" +
        "2. Listar tarefas\n" +
        "3. Remover tarefa\n" +
        "4. Concluir tarefa\n" +
        "5. Sair"
    ));

    if (opcao === 1) {
        let nome = prompt("Digite a tarefa:");
        tarefas.push(nome);

    } else if (opcao === 2) {
        if (tarefas.length === 0) {
            console.log("Lista vazia.");
        } else {
            for (let i = 0; i < tarefas.length; i++) {
                console.log(`${i} - ${tarefas[i]}`);
            }
        }

    } else if (opcao === 3) {
        let indice = Number(prompt("Digite o índice da tarefa para remover:"));

        if (indice >= 0 && indice < tarefas.length) {
            tarefas.splice(indice, 1);
        } else {
            console.log("Índice inválido.");
        }

    } else if (opcao === 4) {
        let indice = Number(prompt("Digite o índice da tarefa para concluir:"));

        if (indice >= 0 && indice < tarefas.length) {
            tarefas[indice] = "✅ " + tarefas[indice];
        } else {
            console.log("Índice inválido.");
        }

    } else if (opcao === 5) {
        console.log("Saindo...");
        break;

    } else {
        console.log("Opção inválida.");
    }
}