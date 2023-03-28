/* Podemos alterar os atributos via JS e DOM
Por exemplo: alterar o atributo alt de uma imagem
Ou até um src de uma imagem
Todos os atributos podem ser alterados via JS */

// adicionado atributos

var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("class", "testando-atributo");

console.log(subtitle);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

var span = document.querySelector("p span");

span.setAttribute("id", "testando-colocar-id");

// removendo atributos

var lista = document.querySelector("#lista");

lista.removeAttribute("id");