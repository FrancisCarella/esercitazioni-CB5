import { c, q, GET, POST, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;
const container = q(".pokemon_container");

const ul = q(".pokemonList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    // id: uuidv4(),
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

window.onload = GET(url).then((res) =>
  res.map(
    (pkm) => (ul.innerHTML += `<li>#${pkm.id} ${pkm.name}, ${pkm.type}</li>`)
  )
);

const createCard = (res) => {
  const cardEl = c("div");
  const nameEl = c("h1");
  const typeEl = c("h2");
  const imgEl = c("img");

  cardEl.className = "card";
  nameEl.className = "pokemon_name";
  typeEl.className = "pokemon_type";
  imgEl.className = "img";

  nameEl.textContent = res.name;
  typeEl.textContent = res.type;
  imgEl.setAttribute("src", "avatar_placeholder.png");
  imgEl.setAttribute("alt", "image");

  cardEl.append(nameEl, typeEl, imgEl);
  container.append(cardEl);
  bodyEl.append(container);
};

window.onload = GET(url).then((res) => res.map((res) => createCard(res)));
