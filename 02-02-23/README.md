### Esercizio 02/02/23

- [ ] Sulla base della lezione del giorno, creare un componente `Galleria` da aggiungere al vostro progetto, da inserire all'interno della pagina principale (`/`). La seguente dovrà presentare almeno tre immagini, disposte utilizzando il componente `<Image />` di Next.js.

### Avanzato

Data una libreria grafica a piacere (es. confetti, visto a lezione) procedere alla creazione di elementi di personalizzazione dinamica lato user (esempio la input type range). Applicare queste personalizzazione ai valori delle props che la libreria mette a disposizione (es. della lezione fatto su `numberOfPieces`)


-----------


### Esercizio 01/02/2023

Sulla base della lezione del giorno:

- [x] inizializzare un nuovo progetto in Next.js, che utilizzerete per le esercitazioni di tutta la settimana
- [x] installare i pacchetti necessari (SASS)
- [x] ripulire da file e cartelle non necessarie
- [x] creare una pagina statica che presenti una lista di persone (fittizzie, recuperabili da api o create pur un mock vostro via variabile)
- [x] creare una pagina dinamica relativa alla persona, che al momento non vada a stampare alcun risultato, ma che presenti un solo `<h1>` con textContent il valore che passate tramite query alla URL (es. pagina `/users/Pippo` avrà un `h1` con il testo `Pippo`)

### Avanzato

- [x] Leggere la documentazione relativa al SSR e provare ad effettuare nella pagina relativa agli utenti una chiamata SSR, al cui click su ogni singolo utente apra una pagina statica relativa che ne mostri i contenuti.


-----------


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
