import {
  addizione,
  sottrazione,
  divisione,
  moltiplicazione,
} from "./calcolatrice.js";

import { qs, ce, GET } from "./utils.js";

// import styles from "../css/style.css";

import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
  const my_url = url.parse(req.url, true).pathname;
  const params = url.parse(req.url, true).query;
  const { param1, param2 } = params;
  console.log(param1, param2);
  switch (my_url) {
    case "/home":
      res.write("Bella raga, benvenuti nella mia nuova Buenohome!");
      break;
    case "/calcolatrice":
      const dataCalc = fs.readFileSync("./html/calcolatrice.html");
      res.write(dataCalc.toString());
      break;
    case "/addizione":
      const dataAdd = fs.readFileSync("./html/addizione.html");
      res.write(dataAdd.toString());
      res.write(`${addizione(param1, param2)}`);
      break;
    case "/sottrazione":
      const dataSot = fs.readFileSync("./html/sottrazione.html");
      res.write(dataSot.toString());
      res.write(`${sottrazione(param1, param2)}`);
      break;
    case "/moltiplicazione":
      const dataMol = fs.readFileSync("./html/moltiplicazione.html");
      res.write(dataMol.toString());
      res.write(`${moltiplicazione(param1, param2)}`);
      break;
    case "/divisione":
      const dataDiv = fs.readFileSync("./html/divisione.html");
      res.write(dataDiv.toString());
      res.write(`${divisione(param1, param2)}`);
      break;
    case "/style.css":
      const style = fs.readFileSync("./style.css");
      res.write(style.toString());
      break;
    default:
      res.write(
        "<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Buenohome<a></p>"
      );
  }
  res.end();
});

server.listen(3000);
