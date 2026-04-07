// Entrada de dados
let idade = Number(prompt("Digite sua idade:"));
let status = prompt("Digite seu status (registrado / não registrado):").toLowerCase();

// Operador ternário
let tipoUsuario = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log("Classificação:", tipoUsuario);

// Switch para status
switch (status) {
    case "registrado":
        console.log("Bem-vindo de volta!");
        break;

    case "não registrado":
    case "nao registrado": // caso o usuário não use acento
        console.log("Por favor, complete seu registro.");
        break;

    default:
        console.log("Status desconhecido.");
}

// Operadores lógicos para acesso
if (idade >= 18 && status === "registrado") {
    console.log("Acesso completo liberado!");
} else if (idade < 18 || status !== "registrado") {
    console.log("Acesso limitado.");
}