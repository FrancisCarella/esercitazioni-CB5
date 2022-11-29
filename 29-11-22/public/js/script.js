const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const container = document.querySelector(".attori");

const url = "http://localhost:3000/attori";

const createCard = (res) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const idEl = document.createElement("p");
  const nameEl = document.createElement("p");
  const surnameEl = document.createElement("h1");
  const dateEl = document.createElement("p");

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

  cardEl.append(imgEl, nameEl, surnameEl, dateEl);
  container.append(cardEl);
};

window.onload = GET(url).then((res) => res.map((res) => createCard(res)));
