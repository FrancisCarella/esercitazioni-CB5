import products from "./products.js";

// GENERATORE CARD: PRENDE GLI ELEMENTI (TITLE, URL ETC) E MI CREA LE CARD
const createCard = (title, imgUrl, description, category, parent) => {
  const cardEl = document.createElement("div");

  cardEl.className = "card";

  // title
  const titleEl = document.createElement("h1");
  titleEl.textContent = title;

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", category);

  // paragraph
  const parEl = document.createElement("p");
  parEl.textContent = description;

  cardEl.append(titleEl, imgEl, parEl);
  parent.appendChild(cardEl);
};

const mostpopularEl = document.querySelector(".most-popular");
const bestSellerEl = document.querySelector(".best-seller");

const headerMostPop = document.createElement("h1");
const headerBestSell = document.createElement("h1");

headerMostPop.style = "background-color: red; color:white; padding:10px";
headerMostPop.textContent = "Most popular";
headerBestSell.style = "background-color: yellow; color:black; padding:10px";
headerBestSell.textContent = "Best seller";

mostpopularEl.appendChild(headerMostPop);
bestSellerEl.appendChild(headerBestSell);

products
  .filter((product) => product.price <= 50)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      bestSellerEl
    );
  });

products
  .filter((product) => product.price >= 50)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      mostpopularEl
    );
  });
