const botao = document.getElementById("btnCarregar");
const listaUsuarios = document.getElementById("listaUsuarios");
const mensagemErro = document.getElementById("mensagemErro");

botao.addEventListener("click", carregarUsuarios);

async function carregarUsuarios() {

    listaUsuarios.innerHTML = "";
    mensagemErro.textContent = "";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Erro na requisição.");
        }

        const usuarios = await response.json();

        usuarios.forEach(usuario => {

            const item = document.createElement("li");

            item.innerHTML = `
                <strong>${usuario.name}</strong><br>
                ${usuario.email}
            `;

            listaUsuarios.appendChild(item);

        });

    } catch (erro) {

        mensagemErro.textContent =
            "Erro ao carregar os usuários, tente novamente mais tarde.";

        console.error(erro);

    }

}