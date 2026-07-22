const campoTitulo = document.getElementById("titulo");
const botaoAdicionar = document.getElementById("adicionar");
const listaNotas = document.getElementById("listaNotas");

// Recupera as notas do Local Storage
function obterNotas(){

    const notas = localStorage.getItem("notas");

    if(notas){
        return JSON.parse(notas);
    }

    return [];

}

// Salva as notas
function salvarNotas(notas){

    localStorage.setItem("notas", JSON.stringify(notas));

}

// Mostra as notas na tela
function mostrarNotas(){

    listaNotas.innerHTML = "";

    const notas = obterNotas();

    notas.forEach(function(nota){

        const item = document.createElement("li");

        item.textContent = nota.titulo;

        const botaoRemover = document.createElement("button");

        botaoRemover.textContent = "Remover";

        botaoRemover.addEventListener("click", function(){

            removerNota(nota.titulo);

        });

        item.appendChild(botaoRemover);

        listaNotas.appendChild(item);

    });

}

// Adiciona uma nota
botaoAdicionar.addEventListener("click", function(){

    const titulo = campoTitulo.value.trim();

    if(titulo === ""){

        alert("Digite um título.");

        return;

    }

    const notas = obterNotas();

    // Verifica se já existe uma nota com o mesmo título
    const existe = notas.some(function(nota){

        return nota.titulo === titulo;

    });

    if(existe){

        alert("Já existe uma nota com esse título.");

        return;

    }

    const novaNota = {

        titulo: titulo

    };

    notas.push(novaNota);

    salvarNotas(notas);

    mostrarNotas();

    campoTitulo.value = "";

});

// Remove uma nota
function removerNota(titulo){

    let notas = obterNotas();

    notas = notas.filter(function(nota){

        return nota.titulo !== titulo;

    });

    salvarNotas(notas);

    mostrarNotas();

}

// Carrega as notas quando a página abre
mostrarNotas();