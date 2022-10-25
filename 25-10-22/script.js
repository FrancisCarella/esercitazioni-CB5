//--DICHIARAZIONI VARIABILI
function myFunction() {
  let userName = prompt("Ciao! Come ti chiami?");

  let number1 = prompt(
    "Benvenuto sul mio portale, " +
      userName +
      "! Ora ti mostrerò una piccola magia. Scegli un numero a piacere:"
  );
  let number2 = prompt("Perfetto. Ora scegli un altro numero a piacere:");
  let operator = prompt(
    "Bravissimo. Infine scegli una delle seguenti operazioni matematiche: \n- addizione\n- sottrazione\n- moltiplicazione\n- divisione"
  );

  //--OPERATORI CONDIZIONALI 

  if (
    operator.toLowerCase() === "addizione" &&
    !isNaN(number1) &&
    !isNaN(number2)
  ) {
    console.log(parseInt(number1) + parseInt(number2));
    alert(
      `Benissimo ${userName}. Ecco la magia: il risultato di ${number1} + ${number2} è..... ${
        parseInt(number1) + parseInt(number2)
      }!`
    );
  } else if (
    operator.toLowerCase() === "sottrazione" &&
    !isNaN(number1) &&
    !isNaN(number2)
  ) {
    console.log(parseInt(number1) - parseInt(number2));
    alert(
      `Benissimo ${userName}. Ecco la magia: il risultato di ${number1} - ${number2} è..... ${
        parseInt(number1) - parseInt(number2)
      }!`
    );
  } else if (
    operator.toLowerCase() === "moltiplicazione" &&
    !isNaN(number1) &&
    !isNaN(number2)
  ) {
    console.log(parseInt(number1) * parseInt(number2));
    alert(
      `Benissimo ${userName}. Ecco la magia: il risultato di ${number1} x ${number2} è..... ${
        parseInt(number1) * parseInt(number2)
      }!`
    );
  } else if (
    operator.toLowerCase() === "divisione" &&
    !isNaN(number1) &&
    !isNaN(number2)
  ) {
    console.log(parseInt(number1) / parseInt(number2));
    alert(
      `Benissimo ${userName}. Ecco la magia: il risultato di ${number1} ÷ ${number2} è..... ${
        parseInt(number1) / parseInt(number2)
      } con il resto di ${parseInt(number1) % parseInt(number2)}!`
    );
  } else {
    alert(
      `Ahi ahi, qualcosa è andato storto! Clicca nuovamente sul bottone e ripeti la procedura facendo attenzione ad inserire un numero valido e una operazione tra quelle proposte.`
    );
    console.log("operazione non valida");
  }
}
