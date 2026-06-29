const aluno = {
  nome: "Carlos",
  idade: 18,
  notas: [7, 8, 6],

  calcularMedia() {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  }
};


const { nome, idade } = aluno;


aluno.notas = [...aluno.notas, 9];


function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}


console.log("Nome do aluno:", nome);
console.log("Idade do aluno:", idade);


console.log("Notas do aluno:");
for (let i = 0; i < aluno.notas.length; i++) {
  console.log(`Nota ${i + 1}:`, aluno.notas[i]);
}


const mediaFinal = aluno.calcularMedia();


console.log("Média final:", mediaFinal.toFixed(2));


const situacao = verificarSituacao(mediaFinal);
console.log("Situação:", situacao);