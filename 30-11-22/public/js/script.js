const url = "http://localhost:3000/attori";

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const PATCH = async (URL, id, body) => {
  return await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

let id;
let actorList = [];

const inputEl = document.querySelector(".search-input");
const container = document.querySelector(".attori");
const input = document.querySelector("input");
const form = document.forms.actorInsert;
const element = form.elements;
const formPatch = document.forms.actorEdit;
const elementsFP = formPatch.elements;

//FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: element.actorName.value,
    surname: element.actorSurname.value,
    date: element.actorDate.value,
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
input.addEventListener("keyup", checkInput);
function checkInput() {
  if (!/^[a-z0-9]*$/i.test(this.value))
    alert("Carattere non consentito!"), location.reload();
}

// FORM PATCH
formPatch.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameSurnameActor = elementsFP.nome.valuee;

  const items = {
    name: elementsFP.actorName.value,
    surname: elementsFP.actorSurname.value.value,
    date: element.actorDate.value,
  };

  PATCH(url, nameSurnameActor, items)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});

// SEARCH BAR
GET(url).then((data) => {
  actorList = data.filter((res) => res.id <= 10);
  actorList.map(res);
});

inputEl.addEventListener("input", (e) => {
  const searchString = e.target.value;

  container.replaceChildren();

  actorList
    .filter((res) => res?.nome.toLowerCase().includes (searchString))
    .map((res) => createCard(res, container))
});

//CARD ACTOR CREATOR
const createCard = (res) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const idEl = document.createElement("p");
  const nameEl = document.createElement("p");
  const surnameEl = document.createElement("h1");
  const dateEl = document.createElement("p");
  const btnDelEl = document.createElement("button");
  const btnEditEl = document.createElement("button");

  cardEl.className = "card";
  imgEl.className = "img";
  idEl.className = "id";
  nameEl.className = "nome";
  surnameEl.className = "cognome";
  dateEl.className = "data";

  idEl.textContent = res.id;
  imgEl.setAttribute("src", `https://picsum.photos/200?${res?.id}`);
  imgEl.setAttribute("alt", "image");
  nameEl.textContent = res.nome;
  surnameEl.textContent = res.cognome;
  dateEl.textContent = res.data_nascita;
  btnEditEl.className = "actor_edit";
  btnDelEl.className = "actor_delete";

  btnDelEl.addEventListener("click", () => {
    DELETE(url, res.id).then(() => location.reload());
  });

  const elementsPatch2 = formPatch.elements;

  btnEditEl.addEventListener("click", () => {
    elementsPatch2.actorName.value = res.nome;
    elementsPatch2.actorSurname.value = res.cognome;
    elementsPatch2.actorDate.value = res.data_nascita;
    document.querySelector("#edit-form").scrollIntoView({
      behavior: "smooth",
    });
  });

  nameEl.textContent = res.nome;
  surnameEl.textContent = res.cognome;
  imgEl.setAttribute("src", `https://picsum.photos/200?${res?.id}`);
  btnEditEl.textContent = "edit";
  btnDelEl.textContent = "delete";
  

  cardEl.append(imgEl, nameEl, surnameEl, btnEditEl, btnDelEl);
    container.append(cardEl);
};

window.onload = GET(url).then((res) => res.map((res) => createCard(res)));

