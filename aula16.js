const API = "https://ghibliapi.vercel.app/films";

const filmeContainer = document.getElementById("filme");
const pesquisar = document.getElementById("pesquisar");

let filmes = [];

async function pegarFilmes() {

    const response = await fetch(API);

    filmes = await response.json();

    renderFilmes(filmes);

}

function renderFilmes(lista) {

    filmeContainer.innerHTML = "";

    lista.forEach(filme => {

        filmeContainer.innerHTML += `

        <div class="card">

            <img src="${filme.image}" alt="${filme.title}">

            <h2>${filme.title}</h2>

            <p>${filme.description}</p>

            <span>Ano: ${filme.release_date}</span>

            <button onclick="favoritoFilme('${filme.id}')">
                Favoritar
            </button>

        </div>

        `;

    });

}

function favoritoFilme(id){

    const filme = filmes.find(filme => filme.id === id);

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const existe = favoritos.some(filme => filme.id === id);

    if(existe){
        alert("Filme já está nos favoritos.");
        return;
    }

    favoritos.push(filme);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    alert("Filme adicionado aos favoritos.");

}

if(pesquisar){

    pesquisar.addEventListener("input", ()=>{

        const valor = pesquisar.value.toLowerCase();

        const filtrar = filmes.filter(filme =>

            filme.title.toLowerCase().includes(valor)

        );

        renderFilmes(filtrar);

    });

}

function loadFavoritos(){

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    renderFilmes(favoritos);

}

if(window.location.pathname.includes("favoritos.html")){

    loadFavoritos();

}else{

    pegarFilmes();

}