import { q, getId, GET } from "./utils.js";


const postId = q(".post-id");
const userAvatar = q(".user-avatar");
const postTitle = q(".post-title");
const userId = q(".user-id");
const postBody = q(".post-body");
const btnPrev = q(".btn-prev");
const btnNext = q(".btn-next");
const loader = q(".loader");
const card = q(".card");
const btns = q(".btns");


// GLOBAL VARIABLES
const url = "https://jsonplaceholder.typicode.com/posts";
let index = 1;

// BTN EVENT LISTENERS
btnPrev.addEventListener("click", (e) => {
  let instruction = e.target.textContent;
  getPost(instruction);
});

btnNext.addEventListener("click", (e) => {
  let instruction = e.target.textContent;
  getPost(instruction);
});

const getPost = (instruction) => {

  loader.classList.toggle("display-none");
  card.classList.toggle("display-none");
  btns.classList.toggle("display-none");

  if (!instruction) {
    instruction = 1;
  } else {
    instruction = instruction.toLowerCase();
  }

  switch (instruction) {
    case "prev":
      index = index - 1;
      break;
    case "next":
      index = index + 1;
      break;
    default:
      index = instruction;
  }

  GET(`${url}/${index}`)
    .then((res) => {
      postId.textContent = `Post n° ${getId(res?.id)}`;
      postTitle.textContent = res?.title[0].toUpperCase() + res?.title.slice(1); //Inserimento del titolo con la prima lettera maiuscola
      userId.textContent = `User ${getId(res?.id)}`;
      postBody.textContent = res?.body[0].toUpperCase() + res?.body.slice(1); //Inserimento del testo con la prima lettera maiuscola
      userAvatar.setAttribute(
        "src",
        `https://picsum.photos/200?${getId(res?.id)}` //Inserimento del titolo con la prima lettera maiuscola
      );

      if (index <= 1) {
        btnPrev.disabled = true;
        btnPrev.classList.add("disabled");
      } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove("disabled");
      }

      if (index >= 10) {
        btnNext.disabled = true;
        btnNext.classList.add("disabled");
      } else {
        btnNext.disabled = false;
        btnNext.classList.remove("disabled");
      }
    })
    .finally(() => {
      loader.classList.toggle("display-none");
      card.classList.toggle("display-none");
      btns.classList.toggle("display-none");
    });
};

window.onload = getPost();
