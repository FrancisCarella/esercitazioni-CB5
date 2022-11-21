///////////// SVOLGIMENTO CON IF

/* --- STEP 1 --- */
//Creo una costante "myArgs" e la imposto sulle proprietà process.argv: conterrà gli argomenti che l'utente inserirà nella riga di comando.
const myArgs = process.argv;
/* --- STEP 2 --- */
//Creo un altro const 'argv' e lo imposto su 'argvs' con il metodo slice(2) al fine di eliminare dalla rica di comando i primi due argomenti inseriti, ovvero "node" e "calc.js".
const argv = myArgs.slice(2);
/* --- STEP 3 --- */
//Imposto gli argomenti rimanenti all'interno dell'array 'argv' su tre costanti diverse.
const operation = argv[0];
const number1 = parseInt(argv[1]);
const number2 = parseInt(argv[2]);
const ctrl = !isNaN(number1) && !isNaN(number2);
/* --- STEP 3 --- */
//Imposto i vari if per le 4 operazioni
if (operation.toLowerCase() === "somma" && ctrl) {
  console.log(
    `La ${operation} di ${number1} e ${number2} è ${number1 + number2}`
  );
}
if (operation.toLowerCase() === "sottrazione" && ctrl) {
  console.log(
    `La ${operation} di ${number1} e ${number2} è ${number1 - number2}`
  );
}
if (operation.toLowerCase() === "moltiplicazione" && ctrl) {
  console.log(
    `La ${operation} di ${number1} e ${number2} è ${number1 * number2}`
  );
}
if (operation.toLowerCase() === "divisione" && ctrl) {
  if (number2 == 0) {
    console.log("Errore, operazione non valida");
  } else {
    console.log(
      `La ${operation} di ${number1} e ${number2} è ${
        number1 / number2
      } con il resto di ${number1 % number2}`
    );
  }
}