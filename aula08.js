
const aluno = {
    nome: "João",
    notas: [8, 7.5, 9],

    calcularMedia() {
        let soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
};


const { nome } = aluno;

console.log("Nome do aluno:", nome);


console.log("Média:", aluno.calcularMedia());


const novasNotas = [...aluno.notas, 10];


aluno.notas = novasNotas;

console.log("Notas atualizadas:", aluno.notas);

// Nova média
console.log("Nova média:", aluno.calcularMedia());