/* O click é ativado quando o usuário clica em um elemento em que atrelamos o evento
Após a ação podemos fazer as modificações e alterações no HTML/CSS que quisermos */


// inserir click

var btn = document.querySelector("#btn2");

console.log(btn);

btn.addEventListener("click", function() {
    console.log("clicou");

    console.log(this)

    this.style.color = "red";
});

// click afetando outros elementos

var title = document.querySelector("#title");

title.addEventListener("click", function() {
    console.log("teste");

    var subtitle = document.querySelector(".subtitle");

    /* subtitle.style.display = "none"; */
})

// double click

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function () {
    console.log("click duplo");
});