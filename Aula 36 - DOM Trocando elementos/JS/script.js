/* Podemos também trocar um elemento no DOM
Ou seja, substituir uma tag por outra e de modo bem facil */

// criar um elemento

var criandoElemento = document.createElement("h3");

criandoElemento.classList = "testando-classe";

var texto = document.createTextNode("Textando a troca de elementos");

criandoElemento.appendChild(texto);

console.log(criandoElemento);

// selecionando o elemento que desejo trocar

let subtitle = document.querySelector(".subtitle");

console.log(subtitle);

// pegando o pai que o elemento trocado vai ficar, nesse caso o body

var body = document.querySelector("body");

// tambem pode ser feito de outra maneira, ".parentNode" é uma propriedade que pega o elemento pai.

var pai = subtitle.parentNode;

// trocando os elementos

pai.replaceChild(criandoElemento, subtitle);