const bodyEl = document.querySelector("main");

const createPokemonCard = (data) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.classList.add(`bg-${data.types[0].type.name}`);//Classe per assegnare il background-color

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);

  const idEl = document.createElement("p");
  idEl.className = "pokemon-id";
  idEl.textContent = "# " + createId(data.id);
  function createId(id){
    if (!id) return null;//!id così scritto indica che non esiste
    if (id < 10) {return `00${id}`}//se è minore di 10 ritorna 00id
    else if (id < 100) {return `0${id}`}
    return id
  }

  const nameEl = document.createElement("h1");
  nameEl.textContent = data.name;

  const typeEl = document.createElement("p");
  typeEl.className = "pokemon-type";
  typeEl.textContent = `Type: ${data.types[0].type.name}`;

  /*switch (typeEl.textContent) {
    case `Type: grass`:
      cardEl.style.background = "#DEFDE0";
      break;
    case `Type: electric`:
      cardEl.style.background = "#FCF7DE";
      break;
    case `Type: water`:
      cardEl.style.background = "#DEF3FD";
      break;
    case `Type: ground`:
      cardEl.style.background = "#f4e7da";
      break;
    case `Type: rock`:
      cardEl.style.background = "#d5d5d4";
      break;
    case `Type: fairy`:
      cardEl.style.background = "#fceaff";
      break;
    case `Type: poison`:
      cardEl.style.background = "#98d7a5";
      break;
    case `Type: bug`:
      cardEl.style.background = "#f8d5a3";
      break;
    case `Type: dragon`:
      cardEl.style.background = "#97b3e6";
      break;
    case `Type: dragon`:
      cardEl.style.background = "#97b3e6";
      break;
    case `Type: psychic`:
      cardEl.style.background = "#eaeda1";
      break;
    case `Type: flying`:
      cardEl.style.background = "#F5F5F5";
      break;
    case `Type: fighting`:
      cardEl.style.background = "#E6E0D4";
      break;
    case `Type: normal`:
      cardEl.style.background = "#F5F5F5";
      break;
    case `Type: fire`:
      cardEl.style.background = "#FDDFDF";
      break;
    case `Type: grass`:
      cardEl.style.background = "#DEFDE0";
      break;
    case `Type: ghost`:
      cardEl.style.background = "#705898";
      break;
    case `Type: ice`:
      cardEl.style.background = "#98d8d8";
      break;
    default:
      cardEl.style.background = "#fff";
  }*/

  cardEl.append(imgEl, idEl, nameEl, typeEl);
  bodyEl.appendChild(cardEl);
};

/*fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((response) => response.json())
  .then((pokemon) => {
    pokemon.results.forEach((element) =>
      fetch(element.url).then((response) =>
        response.json().then((pokemon) => createPokemonCard(pokemon))
      )
    );
  });*/

for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)//alt+96
    .then((res) => res.json())
    .then((res) => createPokemonCard(res));
}