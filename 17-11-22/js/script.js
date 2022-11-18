import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "cardimg";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "cardtitle";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  productsList.map((product) => createCardEl(product, cardList));
});

inputEl.addEventListener("input", (e) => {
  const searchString = e.target.value;

  cardList.replaceChildren();

  productsList
    .filter(product => product?.title.includes(searchString))
    .map(product => createCardEl(product, cardList))

});

// <------- SPIEGAZIONE ------->
  /* // <-- ESERCIZIO PARZIALE -->
    inputEl.addEventListener("input", (e) => { 
    keyup or change or input
    const searchString = e.target.value;
    const filteredProd = productsList.filter((prod) => {
    return prod.title.includes(searchString);
    });
    console.log(filteredProd); //restituzione del filtro in console.log ma senza riuscire nel mostrarlo a schermo
  */ // <-- END ESERCIZIO PARZIALE -->

  /* // <-- ESERCIZIO COMPLETO -->
    console.log("non filtered", productsList) // restituisce la lista prodotti per via del get
    console.log("filtered" , productsList.filter((product) => product?.title.includes(searchString))); // restituisce i prodotti filtrati
    productsList.filter((product) => product?.title.includes(searchString)).map((product) => createCardEl(product, cardList)); // fino a qui ottengo però che le card si aggiungano alle già esistenti, creando doppioni
    cardList.replaceChildren(); //occorre aggiungere questa api prima del map
  */ // <-- END ESERCIZIO COMPLETO -->
// <------- END SPIEGAZIONE ------->