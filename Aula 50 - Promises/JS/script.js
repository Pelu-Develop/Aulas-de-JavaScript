/* Promises são como promessas da vida real, ela está esperando algum retorno
Para criar uma promessa instanciamos a classe Promise
Que leva dois argumentos resolve (solução) e reject (erro)
Para encadear mais processos utilizamos o método then
Alguns recursos de JS (Fetch API) e bibliotecas retornam Promises */

// Criação de promessa

const myPromise = new Promise((resolve, reject) => {
  // Maneira de criação da Promise
  const nome = "Pedro";

  if (nome === "Pedro") {
    // Verificação da Promise, dependendo do dado, vai me retornar um resolve ou um reject
    resolve("Usuário Pedro Encontrando!");
  } else {
    reject("O usuário Pedro não foi encontrando ");
  }
});

myPromise.then((data) => {
  // O then é caso o retorno da minha promise seja resolve, e a função só desencadeia com o método nele
  console.log(data);
});

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Pedro";

  if (nome === "Pedro") {
    resolve("Usuário Pedro Encontrando!");
  } else {
    reject("O usuário Pedro não foi encontrando ");
  }
});

myPromise2
  .then((data) => {
    // Caso retorne um resolve, será executado o then
    return data.toLowerCase();
  })
  .then((stringModificada) => {
    console.log(stringModificada);
  });

// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Matheus";

  if (nome === "Pedro") {
    resolve("Usuário Pedro Encontrando!");
  } else {
    reject("O usuário Pedro não foi encontrando ");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // Caso retorne um reject, será executado o catch
    console.log("Aconteceu um erro " + err);
  });

// Resolver várias promessas

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 ok!");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  resolve("P2 ok!");
});
const p3 = new Promise((resolve, reject) => {
  resolve("P3 ok!");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

// Varias promessas com race

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 ok!");
  }, 2000);
});
const p5 = new Promise((resolve, reject) => {
  resolve("P5 ok!");
});
const p6 = new Promise((resolve, reject) => {
  resolve("P6 ok!");
});

const resolveAll2 = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});

//Fetch request na API do GitHub
//Fetch API

const userName = "Pelu-Develop";

fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(typeof data);
    console.log(data);
    console.log(`O nome do usuário é: ${data.name}`);
  })
  .catch((err) => {
    console.log(`Houve algum erro: ${err}`);
  });
