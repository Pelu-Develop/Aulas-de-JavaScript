/* Outra possibilidade do JS e o DOM é criar elementos
O texto de um elemento é considerado um nó na arvore do DOM
OU seja, temos que criar o texto do elemento tambem */

// inserindo elemento no body

var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteudo do paragrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserindo dentro de uma div ou container

var container = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("Esse é o conteudo do meu container"));

console.log(el);

container.appendChild(el);