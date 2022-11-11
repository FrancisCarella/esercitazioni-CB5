const spinner = document.querySelector(".lds-hourglass");

/**
 * Creo la funzione getAdvise
 */
function getAdvice() {
  //istruzioni funzione getAdvice
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" }) //Fetcho l'url e imposto il no-cache per ottenere una nuova frase ad ogni fetch
    .then((response) => response.json())
    .then((info) => {
      document.querySelector(".advice-text").innerHTML = info.slip.advice; //definisco il testo dell'advice e le sue proprietà descritte nella relativa classe
      document.querySelector(".advice-number").innerHTML = info.slip.id; //definisco il numero id dell'advice e le sue proprietà descritte nella relativa classe
    })
    .finally(() => spinner.classList.toggle(".lds-hourglass-active"))
    .catch((e) => console.log("Error:" + e));
}
/**
 * Invoco la funzione
 */
getAdvice();
/**
 * Definisco la costante del bottone e l'evento che deve scaturire dal suo azionamento, ovvero l'azione della funzione sopra descritta
 */
const btn = document.querySelector("#getAdvice");
btn.addEventListener("click", getAdvice);
