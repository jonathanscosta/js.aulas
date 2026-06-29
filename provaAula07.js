
let nomes = [];

let opcao = "";

while (opcao !== "6") {

    opcao = prompt(
        "MENU\n" +
        "1 - Adicionar nome\n" +
        "2 - Filtrar nomes por letra\n" +
        "3 - Buscar um nome\n" +
        "4 - Transformar nomes em MAIÚSCULAS\n" +
        "5 - Verificar se todos os nomes têm mais de 3 caracteres\n" +
        "6 - Sair\n\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {

        case "1":
            let novoNome = prompt("Digite um nome:");
            nomes.push(novoNome);

            console.log("Lista atualizada:");
            console.log(nomes);

            alert("Nome adicionado com sucesso!");
            break;

        case "2":
            let letra = prompt("Digite a letra inicial:").toLowerCase();

            let filtrados = nomes.filter(nome =>
                nome.toLowerCase().startsWith(letra)
            );

            console.log("Nomes filtrados:");
            console.log(filtrados);

            alert("Veja o resultado no console.");
            break;

        case "3":
            let busca = prompt("Digite o nome que deseja procurar:");

            let encontrado = nomes.find(nome =>
                nome.toLowerCase() === busca.toLowerCase()
            );

            if (encontrado) {
                console.log("Nome encontrado:", encontrado);
                alert("Nome encontrado: " + encontrado);
            } else {
                console.log("Nome não encontrado.");
                alert("Nome não encontrado.");
            }
            break;

        case "4":
            let maiusculos = nomes.map(nome =>
                nome.toUpperCase()
            );

            console.log("Nomes em maiúsculas:");
            console.log(maiusculos);

            alert("Veja o resultado no console.");
            break;

        case "5":
            let todos = nomes.every(nome =>
                nome.length > 3
            );

            console.log("Todos possuem mais de 3 caracteres? " + todos);

            alert("Resultado: " + todos);
            break;

        case "6":
            alert("Programa encerrado.");
            break;

        default:
            alert("Opção inválida!");
    }
}