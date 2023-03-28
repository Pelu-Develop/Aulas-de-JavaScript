/* O mouseover é ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento
Temos tambem o envento mouseout que é quando o ponteiro sai do elemento */

// evento do mouseover

var title = document.querySelector("#title");

window.onload = function() {

    title.style.backgroundColor = "blue";
}

title.addEventListener("mouseover", function() {

    this.style.backgroundColor = "yellow";

})

// evento de mouseout
title.addEventListener("mouseout", function(){

    this.style.backgroundColor = "red";

})

// afetar outro elemento com mouseover

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {

    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");

});

subtitle.addEventListener("mouseout", function() {

    var legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");

});
