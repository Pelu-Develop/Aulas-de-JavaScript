/* é muito comum alterar CSS com JavaScript tambem
As regras de CSS ficam de forma inline
Substituindo a maioria das outras regras criadas */

// seleciona um elemento

var subtitle = document.querySelector(".subtitle");

// adiciona o estilo

subtitle.style.color = "red";

// caso tenha coisa que preciso colocar numa palavra só, como backgrond-color

subtitle.style.backgroundColor = "yellow";

// selecionar elemento

var paragrafo = document.querySelector("#paragrafo");

// adicionar varios estilos

paragrafo.style.cssText = "color: blue; background-color: pink; font-size: 50px";