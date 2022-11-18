import { GET, POST, DELETE, PATCH } from "./api.js";
import { c, q } from "./utils.js";
const url = "http://localhost:3000/pokemon";

let id;

const form = document.forms.pokemonInsert;
const element = form.elements;
const container = q(".pokemon_container");

const ul = q(".pokemon_list");

//FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: id + 1,
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

//FORM CHECK INPUT
const input = document.querySelector("input");
input.addEventListener("keyup", checkInput);
function checkInput() {
  if (!/^[a-z0-9]*$/i.test(this.value))
    alert("Carattere non consentito!"), location.reload();
}

// Form Patch
const formPatch = document.forms.pokemonEdit;
const elementsFP = formPatch.elements;

formPatch.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = elementsFP.id.value;

  const data = {
    name: elementsFP.pkmName.value,
    type: elementsFP.pkmType.value,
  };

  PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});

//CARD LIST
window.onload = GET(url).then((res) =>
  res.map(
    (pkm) =>
      (ul.innerHTML += `<li>#${pkm.id} - ${pkm.name} - Type: ${pkm.type}</li>`)
  )
);

//CARD CREATION
const createCard = (res, parent) => {
  const cardEl = c("div");
  const imgEl = c("img");
  const idEl = c("p");
  const nameEl = c("h1");
  const typeEl = c("p");
  const btnDelEl = c("button");
  const btnEditEl = c("button");

  cardEl.className = "card";
  cardEl.classList.add(
    `bg-${res?.type[0].toLowerCase().trim() + res?.type.slice(1)}`
  ); //Classe per assegnare il background-color

  idEl.className = "pokemon_id";
  imgEl.className = "pokemon_img";
  nameEl.className = "pokemon_name";
  typeEl.className = "pokemon_type";
  btnEditEl.className = "pokemon_edit";
  btnDelEl.className = "pokemon_delete";

  btnDelEl.addEventListener("click", () => {
    DELETE(url, res.id).then(() => location.reload());
  });

  const elementsPatch2 = formPatch.elements;

  btnEditEl.addEventListener("click", () => {
    elementsPatch2.id.value = res.id;
    elementsPatch2.pkmName.value = res.name;
    elementsPatch2.pkmType.value = res.type;
    q("#edit-form").scrollIntoView({
      behavior: "smooth",
    });
  });

  idEl.textContent = "# " + res.id;
  nameEl.textContent = res.name;
  typeEl.textContent = `Type: ${res.type}`;
  // imgEl.setAttribute("src", `https://picsum.photos/200?${res?.id}`);
  imgEl.setAttribute(
    "src",
    `./img/${res?.name[0].toLowerCase() + res?.name.slice(1)}.svg`
  );
  imgEl.addEventListener("error", function (event) {
    event.target.src = `./img/avatar_placeholder.png`;
    event.onerror = null;
  });
  btnEditEl.textContent = "edit";
  btnDelEl.textContent = "delete";

  cardEl.append(imgEl, idEl, nameEl, typeEl, btnEditEl, btnDelEl);
  parent.append(cardEl);
};

window.onload = GET(url).then((res) => {
  id = res[res.length - 1].id;
  res.map((res) => {
    createCard(res, container);
  });
});
