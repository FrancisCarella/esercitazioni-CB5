function myFunction() {
  alert("Perché hai cliccato? Il bottone è in ferie, guarda la console!");
}
//ESERCIZIO PARTE 1
//definirò a e b come numeri e c come operatore
function calc(a, b, c) {
  let output = 0;
  //uso il costrutto try...catch per ipotizzare la situazione in cui venga inserito 0 come divisore, divisione di fatto impossibile (eccetto la restituzione del valore infinito). Se non si verifica alcune errore, catch(error) verrà ignorato, altrimenti verrà eseguito il codice all'interno del catch.
  try {
    //istruzione per gestire uno o più case
    switch (c) {
      case "+":
        result = a + b;
        return result;
      case "*":
        result = a * b;
        return result;
      case "-":
        result = a - b;
        return result;
      case "/":
        if (b === 0) {
          //comando per la gestione degli errori che genera un'eccezzione all'interno del costrutto try
          throw "Non posso dividere per 0!";
        } else {
          output = a / b;
        }
        return result;
    }
  } catch (error) {
    console.log("C'è un errore:", error);
  }
  return output;
}
console.log("ESERCIZIO PARTE 1");
console.log(calc(2, 0, "/"));
console.log(calc(4, 8, "*"));

//ESERCIZIO PARTE 2
const superHuman = {
  nome: "Francesco",
  cognome: "De Caro Carella",
  nickname: "Francis Carella",
  "poteri speciali": ["Rosso", "Simpatico", "Sportivo"],
  sposato: true,
};

const superHumanKeys = Object.keys(superHuman);
console.log("ESERCIZIO PARTE 2");
console.log(superHumanKeys);

//ESERCIZIO AVANZATO
// function calculatorBis(operator,numbers) {
//   if (operator.toLowerCase() === "addizione" &&
//     !isNaN(number1) &&
//     !isNaN(number2)
//   ) {

// }
//   }

console.log("ESERCIZIO AVANZATO");
