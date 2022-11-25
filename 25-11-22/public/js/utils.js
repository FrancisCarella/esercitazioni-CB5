const GET = async (url) => { 
    await fetch(url)
        .then((res) => res.json())
        .then((data) => resEl.textContent = `${data}`);
    }

const formElement = document.forms.formEl.elements;

const resEl = document.querySelector("h2");

const btn1 = formElement.btnSom;
const btn2 = formElement.btnSot;
const btn3 = formElement.btnMol;
const btn4 = formElement.btnDiv;

//if (false) {
  // Not reachable
//}

if (btn1) {
  btn1.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    GET(url);
  });
}

if (btn2) {
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
  GET(url);
});
}

if (btn3) {
btn3.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
  GET(url);
});
}

if (btn4) {
  btn4.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;
    GET(url);
  });
}