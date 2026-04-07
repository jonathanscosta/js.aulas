// Entrada de dados
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

// Operações básicas
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

// Exibindo resultados
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);

// Usando operadores de atribuição
let resultado = num1;

resultado += num2; // soma
console.log("Usando += :", resultado);

resultado -= num2; // volta ao valor original
console.log("Usando -= :", resultado);

resultado *= num2; // multiplicação
console.log("Usando *= :", resultado);

resultado /= num2; // divisão
console.log("Usando /= :", resultado);

resultado %= num2; // resto
console.log("Usando %= :", resultado);2