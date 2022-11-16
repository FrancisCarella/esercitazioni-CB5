import { GET, POST, DELETE } from "./api.js";
import { c, q} from "./utils.js";
const url = "http://localhost:3000/pokemon";

let id;

const form = document.forms.pokemon;
const element = form.elements;
const container = q(".pokemon_container");

const ul = q(".pokemon_list");


//FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: id+1,
    name: element.pkmName.value,
    type: element.pkmType.value
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

//FORM LIST
window.onload = GET(url).then((res) =>
  res.map(
    (pkm) => (ul.innerHTML += `<li>#${pkm.id} ${pkm.name}, ${pkm.type}</li>`)
  )
);

//CARD CREATION
const createCard = (res, parent) => {
  const cardEl = c("div");
  const imgEl = c("img");
  const idEl = c("p");
  const nameEl = c("h1");
  const typeEl = c("p");
  const btnEl = c("button");

  cardEl.className = "card";
  cardEl.classList.add(`bg-${res?.type[0].toLowerCase().trim() + res?.type.slice(1)}`); //Classe per assegnare il background-color

  idEl.className = "pokemon_id";
  imgEl.className = "pokemon_img";
  nameEl.className = "pokemon_name";
  typeEl.className = "pokemon_type";
  btnEl.className = "pokemon_delete";

  btnEl.addEventListener("click", () => {
    DELETE(url, res.id).then(() => location.reload());
  });

  idEl.textContent = "# " + res.id;
  nameEl.textContent = res.name;
  typeEl.textContent = `Type: ${res.type}`;
  imgEl.setAttribute("src", `https://picsum.photos/200?${res?.id}`);
  imgEl.setAttribute("alt", "image");
  btnEl.textContent = "delete";

  cardEl.append(imgEl, idEl, nameEl, typeEl, btnEl);
  parent.append(cardEl);
};

//CARD LIST
// window.onload = GET(url).then((res) =>
//   res.map((res) => createCard(res, container))
// );

window.onload = GET(url).then((res) => {
  id = res[res.length-1].id;
  res.map((res) => {
    createCard(res, container);
  });
});