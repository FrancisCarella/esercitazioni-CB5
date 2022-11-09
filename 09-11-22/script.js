const bodyEl = document.querySelector("main");

const createPokemonCard = (data) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.classList.add(`bg-${data.types[0].type.name}`); //Classe per assegnare il background-color

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);

  const idEl = document.createElement("p");
  idEl.className = "pokemon-id";
  idEl.textContent = "# " + createId(data.id);
  function createId(id) {
    if (!id) return null; //!id così scritto indica che non esiste
    if (id < 10) {
      return `00${id}`;
    } //se è minore di 10 ritorna 00id
    else if (id < 100) {
      return `0${id}`;
    } //se è minore di 10 ritorna 0id
    return id; //altrimenti ritorna id
  }

  const nameEl = document.createElement("h1");
  nameEl.textContent = data.name;

  const typeEl = document.createElement("p");
  typeEl.className = "pokemon-type";
  typeEl.textContent = `Type: ${data.types[0].type.name}`;

  cardEl.append(imgEl, idEl, nameEl, typeEl);
  bodyEl.appendChild(cardEl);
};

/*METODO 1 PER MOSTRARE I POKEMON
fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((response) => response.json())
  .then((pokemon) => {
    pokemon.results.forEach((element) =>
      fetch(element.url).then((response) =>
        response.json().then((pokemon) => createPokemonCard(pokemon))
      )
    );
  });*/

/*METODO 2 PER MOSTRARE I POKEMON (MIGLIROE MA LI CARICA A UNO A UNO)
for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) //alt+96
    .then((res) => res.json())
    .then((res) => createPokemonCard(res));
}*/

//METODO 3 PER MOSTRARE I POKEMON + LOADER CON PROMISE ALL(TOP)
const loadingEl = document.querySelector(".loading");

const urlArray = []; //array vuoto per gli item singoli

for (let i = 1; i <= 151; i++) {
  urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`); //pusho gli url nell'array
}

let request = urlArray.map((url) => {
  loadingEl.classList.add("loading-a"); //classe "attiva" per elemento loading
  return fetch(url).then((res) => res.json()); //array di promise mappando urlArray
});

Promise.all(request)
  .then((res) => res.map((r) => createPokemonCard(r)))
  .finally(() => loadingEl.classList.remove("loading-a")); //consumo l'array di promise, lo mappo per prendere i singoli oggetti così da creare le card e infine la classe "attiva" viene rimossa dall'elemendo loading che torna in display:none
