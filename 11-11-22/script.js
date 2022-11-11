let index = 1;

const bodyEl = document.querySelector("main");

const cardEl = document.createElement("div");
const imgEl = document.createElement("img");
const idEl = document.createElement("p");
const nameEl = document.createElement("h1");
const typeEl = document.createElement("p");

const btnNext = document.querySelector(".btn-next");
const btnPrevious = document.querySelector(".btn-previous");

const createPokemonCard = (data) => {
  cardEl.className = "card";
  cardEl.classList.add(`bg-${data.types[0].type.name}`); //Classe per assegnare il background-color

  imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);

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

  nameEl.textContent = data.name;

  typeEl.className = "pokemon-type";
  typeEl.textContent = `Type: ${data.types[0].type.name}`;

  cardEl.append(imgEl, idEl, nameEl, typeEl);
  bodyEl.appendChild(cardEl);
};

btnNext.addEventListener("click", () => {
  index++;
  pokeItem(index);
});

btnPrevious.addEventListener("click", () => {
  index--;
  pokeItem(index);
});

const pokeItem = async (i) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let data = await response.json();
  createPokemonCard(data);
};

pokeItem(index);
