const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", buscarUsuarios);

async function buscarUsuarios() {

    resultado.innerHTML = "<p class='carregando'>Carregando...</p>";

    try {

        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!resposta.ok) {
            throw new Error("Erro na requisição.");
        }

        const usuarios = await resposta.json();

        resultado.innerHTML = "";

        usuarios.forEach(usuario => {

            const card = document.createElement("div");
            card.classList.add("usuario");

            const nome = document.createElement("h2");
            nome.textContent = usuario.name;

            const email = document.createElement("p");
            email.textContent = `E-mail: ${usuario.email}`;

            const cidade = document.createElement("p");
            cidade.textContent = `Cidade: ${usuario.address.city}`;

            const empresa = document.createElement("p");
            empresa.textContent = `Empresa: ${usuario.company.name}`;

            card.appendChild(nome);
            card.appendChild(email);
            card.appendChild(cidade);
            card.appendChild(empresa);

            resultado.appendChild(card);

        });

    } catch (erro) {

        resultado.innerHTML =
        `<p class="erro">Erro ao buscar os dados. API não está respondendo.</p>`;

        console.error(erro);

    }

}