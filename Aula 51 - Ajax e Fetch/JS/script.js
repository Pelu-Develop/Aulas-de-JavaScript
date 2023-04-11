/* O AJAX uma técnica muito utilizada para melhorar a experiencia do usuário em sites e aplicativos web */
/* Com ele podemos fazer requisições em servidores de API sem precisar recarregar a pagina */

/* Um meio nativo de realizar requisições a APIs com JavaScript
Podemos utilizar com Promise ou async/await
Se a requisição for GET é preciso passar apenas a URL do recurso que estamos resgatando da API
Caso seja outro verbo, podemos configurar a requisição com: method, body e headers
O fetch é muito utilizado com frameworks/libs como: React,Vue e Angular */

const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Get id from URL

// "URLSearchParams" A propriedade searchParams da interface URL retorna um objeto URLSearchParams permitindo acesso ao GET decodificando os argumentos que contém na URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Get all posts

// "async" transforma a linha numa função assíncrona
async function getAllPosts() {
  // "await" nesse caso estar esperando uma reposta do fetch
  const response = await fetch(url);

  console.log(response);

  //   Transforma a reposta em um array de objetos
  const data = await response.json();

  console.log(data);

  // Esconde o elemento de carregamento
  loadingElement.classList.add("hide");

  // Estamos usando o map para passar por cada elemento da nosso array de objetos
  data.map((post) => {
    // Criando elementos
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    /* Usando o innerText para colocar os dados do fetch que fizemos dentro do HTML */
    title.innerText = post.title;
    body.innerText = post.body;

    // Colocando o texto dentro da tag "a", e colocando atributos dentro da tag link
    link.innerText = "Ler";
    link.setAttribute("href", "post.html?id=" + post.id);
    console.log(link);
    // Colocando os elementos dentro da div
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    postsContainer.appendChild(div);
  });
}

// Get individual post

async function getPost(id) {
  // eu crio uma away com todas a Promise que eu quero executar, até os dois fetch
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  console.log(responseComments);

  /* Pegando os dados do Post */
  const dataPost = await responsePost.json();

  /* Pegando os dados do Comments */
  const dataComments = await responseComments.json();

  loadingElement.classList.add("hide");

  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  console.log(dataComments);

  dataComments.map((comment) => createComment(comment));
}

function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);

  commentsContainer.appendChild(div);
}

// Post a comment
async function postComment(comment) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  createComment(data);
}

if (!postId) {
  getAllPosts();
} else {
  getPost(postId);

  // Add Event to comment form

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let comment = {
      email: emailInput.value,
      body: bodyInput.value,
    };

    console.log(comment);

    comment = JSON.stringify(comment);

    postComment(comment);
  });
}
