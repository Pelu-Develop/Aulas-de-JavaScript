/* Nas linguagens de programação existem os operadores logicos
Estes operadores realizam comparações para que seja retornado um true ou false
Decidindo então o fluxo da aplicação
Utilizamos principalmente nas instruções de condição e reptição, em conjunto dos operadores de comparação

O Operador lógico && é conhecido também como AND
Ele vai retornar true apenas se as duas expressões retornarem true
Qualquer outro resultado o operador lógico and reotrnará false*/

var idade = 16;
var nome = "pedro";

/* Nesse caso estamos adicionando condicionais para que o resultado possa retornar true
Se algumas delas estiver false, o resultado será false e não irar rodar
Nesse caso, a variavel nome é pedro mesmo e a variavel idade estar em 16, logo o resultado é true
se algulmas delas fosse negativo, tipo a varivavel nome fosse matheus, o resultado seria false */
if (nome == "pedro" && idade == 16) {
    console.log("O pedro pode entrar na aula de esgrima");
} else {
    console.log("Este não é o Pedro ou a idade estar incorreta");
}

if (1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if ((1 == 1 && 3 > 3) && true) {
    console.log("Passou");
} else {
    console.log("não passou")
}
