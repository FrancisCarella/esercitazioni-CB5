const express = require(`express`);

function somma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function sottrazione(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function divisione(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function moltiplicazione(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

const app = express();
app.use(express.static(`public`));

app.listen(3000, () => {
  console.log("Server in esecuzione sulla porta 3000");
});

//calcolatrice
app.get("/calcolatrice", function(req, res){
    res.sendFile("calcolatrice.html", {root: __dirname+"/src/resources"});
});

//SOMMA
app.get("/pagina_somma", function (req, res) {
  res.sendFile("somma.html", { root: __dirname + "/src/resources" });
});
app.get("/somma", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  let risultato = somma(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send("" + risultato);
});

//SOTTRAZIONE
app.get("/pagina_sottrazione", function (req, res) {
  res.sendFile("sottrazione.html", { root: __dirname + "/src/resources" });
});
app.get("/sottrazione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  let risultato = sottrazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send("" + risultato);
});

//MOLTIPLICAZIONE
app.get("/pagina_moltiplicazione", function (req, res) {
  res.sendFile("moltiplicazione.html", { root: __dirname + "/src/resources" });
});
app.get("/moltiplicazione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  let risultato = moltiplicazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send("" + risultato);
});

//DIVISIONE
app.get("/pagina_divisione", function (req, res) {
  res.sendFile("divisione.html", { root: __dirname + "/src/resources" });
});
app.get("/divisione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  let risultato = divisione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send("" + risultato);
});



