/* const { get } = require("lodash");

function func_somma() {
  const fai_somma = async () => {
    const url = "http://localhost:3000/somma?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_somma();
}

function func_sottrazione() {
  const fai_sottrazione = async () => {
    const url = "http://localhost:3000/sottrazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_sottrazione();
}

function func_moltiplicazione() {
  const fai_moltiplicazione = async () => {
    const url = "http://localhost:3000/moltiplicazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_moltiplicazione();
}

function func_divisione() {
  const fai_divisione = async () => {
    const url = "http://localhost:3000/divisione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_divisione();
}
*/ 

const formElement = document.forms.formEl.elements;

const resEl = document.querySelector("h2")

const GET = async (url) => { 
    await fetch(url)
        .then((res) => res.json())
        .then((data) => resEl.textContent = `${data}`);
    }

const btn1 = formElement.btnSom;

btn1.addEventListener("click", (e) => {
  e.preventDefault()
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    GET(url);
});

const btn2 = formElement.btnSot;

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
  GET(url);
});

const btn3 = formElement.btnMol;

btn3.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
  GET(url);
});

const btn4 = formElement.btnDiv;

btn4.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;
  GET(url);
});