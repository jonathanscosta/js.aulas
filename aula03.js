// Lista para armazenar os nomes
let nomes = [];

// 1️⃣ Coleta de dados com while (true)
while (true) {
    let entrada = prompt("Digite um nome (ou 'sair' para encerrar):");

    if (entrada.toLowerCase() === "sair") {
        break; // encerra o loop
    }

    nomes.push(entrada);
}

// 2️⃣ Processamento com for (exibindo com índices)
console.log("Lista de nomes com índices:");
for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1}: ${nomes[i]}`);
}

// 3️⃣ Exibição com for...of (mensagem personalizada)
console.log("Mensagens de boas-vindas:");
for (let nome of nomes) {
    console.log(`Bem-vindo(a), ${nome}!`);
}