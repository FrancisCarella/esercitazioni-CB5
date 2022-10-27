function myFunction() {
  //ESERCIZIO PARTE 1
  //creazione dell'Array con l'uso dell'identificatore const
  const Arr1 = ["Francesco", "De Caro Carella", "33", "Diploma"];
  //richiamo dell'array nella console
  console.log("ESERCIZIO PARTE 1");
  console.log(Arr1);

  //ESERCIZIO PARTE 2
  //sostituisco l'età con la data di nascita con la funzione splice in cui: 2 indica l'indice da cui partire - 0, 1, 2 etc - 1 indica la quantità di elementi da eliminare o in questo caso sostituire, la data è l'elemento in questo caso da inserire)
  Arr1.splice(2, 1, "11/07/1989");
  //uso il metodo di mutazione/sostituzione di un elemento selezionato
  Arr1[0] = Arr1[0].toUpperCase();
  Arr1[1] = Arr1[1].toUpperCase();
  //richiamo dell'array nella console
  console.log("ESERCIZIO PARTE 2");
  console.log(Arr1);

  //ESERCIZIO AVANZATO
  //uso il ciclo for per eseguire la stampa dell'elemento # per 7 volte, impostanto n a 0, impostandolo minore uguale a 6 così da non superare il 7 e decrementando di 1 il valore iniziale a ogni ciclo
  console.log("ESERCIZIO AVANZATO");
  let Arr2 = "#######";
  for (let n = 0; n <= 6; n++) {
    //uso la funzione slice e indico n come fine della selezione
    console.log(Arr2.slice(n));
  }
}
