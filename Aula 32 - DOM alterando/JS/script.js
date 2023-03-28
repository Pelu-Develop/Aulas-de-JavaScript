/* Podemos alterar o texto de qualquer elemento de forma facil com JavaScript
Posteriormente poderemos atrelar esta ação com algum evento */

// selecionar elemento

var title = document.querySelector("#title");

console.log(title);

// innerHTML

title.innerHTML = "Testando o texto alterado";

// textContent -> mais ultilizado, recomendado e performatico

var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent"