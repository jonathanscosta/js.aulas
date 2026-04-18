let lista = [];
let contador = 0;

while (true) {
    let opcao = Number(prompt("1.Adicionar\n2.Remover\n3.Visualizar\n4.Atualizar\n5.Sair"))

    if (opcao === 1) {
        let lista_de_compras = prompt("qual item deseja adicionar a lista? ")
        lista.push(lista_de_compras)

    } else if (opcao === 2) {
        let excluir = prompt(`qual item deseja excluir ${lista}`)

        let indice = lista.indexOf(excluir); 

        if (indice !== -1) {
            lista.splice(indice, 1); 
            console.log(`item ${excluir} removido com sucesso`)
        }

    } else if (opcao === 3) {
        for (let i = 0; i < lista.length; i++) {
            contador = i+1;
            console.log(`${contador} - ${lista[i]}`);
        }

    } else if (opcao === 4){
        let lista_de_compras = prompt("qual item deseja adicionar a lista? ")
        lista.push(lista_de_compras)
        console.log(`item ${lista_de_compras} adicionado com sucesso`)
    }
    else if (opcao === 5) {
        console.log("Sair da lista");
        break
    }else{
        alert("opção inválida")
    }
}