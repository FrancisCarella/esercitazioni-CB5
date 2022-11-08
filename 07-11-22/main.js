// Una tipica richiesta fetch consiste in 2 chiamate:

// let response = await fetch(url, options); // ritorna le response headers
// let result = await response.json(); // legge il body come JSON

// O la versione senza await:

// fetch(url, options)
//   .then(response => response.json())
//   .then(result => /* processa qui il result */)

// INFO PROFESSORE
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log("data:", data))
//   .catch((e) => console.log("error:" + e))
//   .finally((f) => console.log("done"));

function myFunction() {
  console.log(
    "%c SVOLGIMENTO - FILE USERS e FILE TODOS ",
    "background-color: #0011FF; color: #bada55; font-weight: bold;"
  );

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) // legge il body della risposta e lo interpreta come JSON
    .then((users) =>
      users.map((user) =>
        console.log(
          `Name: ${user.name} \nAddress: ${Object.values(
            user.address
          )} \nGeo: ${Object.entries(user.address.geo)} \nCity: ${
            user.address.city
          } \n-------------------`
        )
      )
    )
    .catch((error) => console.log("ERRORE:" + error))
    .finally(() => console.log("--- FATTO ---"));

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json()) // legge il body della risposta e lo interpreta come JSON
    .then((todos) =>
      todos.map((todo) =>
        console.log(
          `ID: ${todo.id} \nTitle: ${todo.title} \n-------------------`
        )
      )
    )
    .catch((error) => console.log("ERRORE:" + error))
    .finally(() => console.log("--- FATTO ---"));
}
