let id;
let actorList = [];

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
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

const actUrl = "http://localhost:3000/attori/";
const container = document.querySelector(".attori, .registi");
const input = document.querySelector("input");
const actorName = document.querySelector(".actorName");
const actorSurname = document.querySelector(".actorSurname");
const actorYob = document.querySelector(".actorYob");
const addBtn = document.querySelector(".add-btn");
const form = document.forms.actorInsert;
const element = form.elements;
const formPatch = document.forms.actorEdit;
const elementsFP = formPatch.elements;

// CREAZIONE CARD
const createCard = (items) => {
  for (let item of items) {
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("div");
    const idEl = document.createElement("h1");
    const infoEl = document.createElement("div");
    const nameEl = document.createElement("h4");
    const surnameEl = document.createElement("h4");
    const dateEl = document.createElement("p");
    const btnDelEl = document.createElement("button");
    const btnEditEl = document.createElement("button");

    cardEl.className = "card";
    idEl.className = "id";
    infoEl.className = "card-info";
    imgEl.className = "img";
    nameEl.className = "nome";
    surnameEl.className = "cognome";
  btnEditEl.className = "actor_edit";
  btnDelEl.className = "actor_delete";

    idEl.textContent = item.id;
      imgEl.setAttribute("src", `https://picsum.photos/200?${item?.id}`);
      imgEl.setAttribute("alt", "image");
    nameEl.textContent = item.nome.toUpperCase();
    surnameEl.textContent = item.cognome.toUpperCase();
    btnDelEl.textContent = "delete";
     btnEditEl.textContent = "edit";
    dateEl.textContent = item.data_nascita;

    cardEl.append(imgEl, nameEl, surnameEl, btnEditEl, btnDelEl);
    container.append(cardEl);

    // DELETE
    const DELETE = async (url, id) => {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ id: id }),
      });
      return await res.json();
    };
    // ON CLICK EVENT --> DELETE
    btnDelEl.addEventListener("click", (e) => {
      const url = "http://localhost:3000/attore";
      const id = item.id;
      DELETE(url, id).then(() => location.reload());
    });
  }
};

// FETCH URL
fetch(actUrl)
  .then((res) => res.json())
  .then((res) => createCard(res));

// POST
const POST = async (url, body_message) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
};

// FUNCTION CREATE ACTOR
function createActor(body_message) {
  const url = "http://localhost:3000/attore";
  return POST(url, body_message);
}

// EVENT ON CLICK --> ADD
addBtn.addEventListener("click", (e) => {
  const actor = {
    nome: actorName.value,
    cognome: actorSurname.value,
    data_nascita: actorYob.value,
  };

  createActor(actor).then((message) => {
    console.log("Post andata a buon fine!");
  });
});

// SEARCH BAR
GET(url).then((data) => {
  actorList = data.filter((item) => item.id <= 10);
  actorList.map(item);
});

inputEl.addEventListener("input", (e) => {
  const searchString = e.target.value;

  container.replaceChildren();

  actorList
    .filter((item) => item?.actorName.toLowerCase().includes(searchString))
    .map((item) => createCard(item, container));
});