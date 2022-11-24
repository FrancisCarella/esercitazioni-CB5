1. da terminale digita **npm init**
2. Procediamo con l'installazione di Boostrap: npm i boostrap
3. Procediamo con l'installazione di Express: npm i express
4. Lasciamo da parte lodash per fare un esempio, ovvero come è indicata la sua installazione e la sua versione sul sito:
   npmjs.com/package/lodash
5. Ad esempio per installare la versione desiderata di lodash digitare npm i lodash@4.17.20 (antecedente rispetto alla attuale 4.17.21). Potrebbero però esserci delle vulnerabilità e infatti ne vengono individuate due. Per vedere quali sono uso il comando npm audit (comando suggerito anche dal terminale). In questo modo vado a vedere quali sono le vulnerabilità e decido se aggiornare o meno.
6. Uso il comando npm audit fix per forzare l'aggiornamento (comando che forza a livello globale).
7. Su package.json spunterà a questo punto un simbolo ^, che indica il corretto esito dell'update. Su package-lock.json vedremo infatti che la versione ad esempio di lodash, è aggiornata alla 4.17.21.
8. Installiamo nodemon tramite il comando **npm i nodemon --save-dev**
9. Creiamo a questo punto il file index.js, la cartella src e la cartella public. Su public ci andranno tutte le risorse accessibili dall'esterno (css, js frontend), mentre su scr i file accessibili lato server.
10. Creiamo anche le relative sottocartelle, inserendo in public anche le cartelle css, js e html.
11. Avviamo a questo punto il server aggiungendo nel file package.json le righe seguenti alla voce script:
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon ./index.js"
e digitando **npm start** per avviare nodemon.
12. Se tutto funziona correttamente, digitiamo ctrl+c e incominciato a scrivere sul file index.js.
13. Popoliamo il file index.js nel modo seguente:
```
const express = require(`express`);

const app = express();

app.get(`/pagina_somma`, function (req, res) {
    res.sendFile(`somma.html`, {root: __dirname+"/src/html"})
});
```
14. Copiamo o creiamo nella cartella src/html i file calcolatrice, divisione, moltiplicazione, somma e sottrazione (tutti html).
15. Aggiungiamo alla riga 5:
```
app.listen(3000, ()=>{
console.log("Server in esecuzione sulla porta 3000")
});
```
res.sendFile(`somma.html`, {root: __dirname+"/src/html"})Sostituisce res.write, res.delete ecc prima dell'uso di express. Racchiude tutto. prende due parametri: il nome del file da allegare e un oggetto json con il percorso del file. In questo caso root (perscorso) prende __dirname che, attraverso node, comprende che in dirname deve prendere il percorso assoluto fino alla cartella di progetto. si aggiungono poi i percorsi interni alla cartella di progetto: in questo caso /src/html per arrivare alla cartella html interna a src nella cartella 24-11-22
16. Apriamo Postman e verifichiamo la il funzionamento del tutto.
17. Carichiamo il nostro css sulla cartella omonima e inseriamo alla riga 4 il seguente:
```
const app = express();
app.use(express.static(`public`));
```
18. Creiamo in public/js il file utils.js e riportiamo la seguente funzione: 
```
function func_somma() {
    const fai_somma = async () => {
        const url = "http://localhost:3000/somma?param1=2&param2=3";
        console.log("Async start");
        const res = await fetch(url);
        alert(res);
        return await res.json();
    }
    let result =  fai_somma(); 
}

```
19. Badiamo che nel file somma.html sia riportata nel body:
```
<script type="text/javascript" src="js/utils.js"></script>
```
verifico che in console su source risulti la cartella js. 
20. Nel button somma di somma.html aggiungo:
```
?
```
21. Nel file index.js aggiungo dopo app.listen:
```
app.get('/pagina_somma', function (req, res) {
    res.sendFile('somma.html',{root: __dirname+"/src/html"})
});

app.get('/somma', function (req, res) {
    let param1 = req.params.param1;
    let param2 = req.params.param2;
    console.log("parametro 1:" + param1, "parametro 2:" + param2);
    res.send(somma(param1, param2).toString());
});
```