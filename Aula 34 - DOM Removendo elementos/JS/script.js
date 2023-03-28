/* Remover elementos tambem é muito facil com JavaScript
Temos como remover o elemento diretamente e tambem um elemento filho */

// Removendo elemento filho

var container = document.querySelector("#container");

var p = document.querySelector("#container p");

container.removeChild(p);

// remover o elemento

var subtitle = document.querySelector(".subtitle");

subtitle.remove();