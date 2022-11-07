import projects from "./portfolio.js";

// BUTTON SCROLL UP
const mybutton = document.getElementById("scroll-top");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

window.onscroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});

// PORTFOLIO SECTION
const PortTitEl = document.querySelector(".portfolio-title"); //Richiedo la creazione della constante x e di assegnare alla costante la classe y

const createCard = (title, imgUrl, description, category, parent) => {
  const cardEl = document.createElement("div");

  cardEl.className = "card";
  // title
  const titleEl = document.createElement("h2");
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

projects
  // .filter((project) => project.title === "Exemple6")
  .map((project) => {
    createCard(
      project.title,
      project.image,
      project.description,
      project.category,
      PortTitEl
    );
  });

// const headerPortTit = document.createElement("h1");

// headerPortTit.style = "background-color: black; color:white; padding:10px";
// headerPortTit.textContent = "PORTFOLIO";

// PortTitEl.appendChild(headerPortTit);
