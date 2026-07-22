// Selecionando elementos do HTML
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
const limparLista = document.getElementById("limparLista");

// Evento de envio do formulário
formulario.addEventListener("submit", function(event){

    // Evita recarregar a página
    event.preventDefault();

    // Capturando os valores
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;

    // Validação
    if(
        nome === "" ||
        senha === "" ||
        telefone === "" ||
        dataNascimento === "" ||
        email === ""
    ){
        console.error("Preencha todos os campos.");
        return;
    }

    // Criando novo elemento
    const usuario = document.createElement("div");

    usuario.classList.add("usuario");

    usuario.innerHTML = `
        <h3>${nome}</h3>
        <p><strong>Senha:</strong> ${senha}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
        <p><strong>E-mail:</strong> ${email}</p>
    `;

    // Adicionando à lista
    lista.appendChild(usuario);

    // Limpa o formulário
    formulario.reset();

});

// Botão limpar lista
limparLista.addEventListener("click", function(){

    lista.innerHTML = "";

});