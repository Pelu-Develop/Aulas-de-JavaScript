/* Doias outros operadores de comparação existem no JavaScript: === e!==
A função é comparar valor e tipo de dado*/

var numero = "5";

/* No caso abaixo, o "===" alem de verificar o valor estar verificando o tipo
No caso o que estar locado na varivael numero é uma string e o que estar comparando abaixo é com um numero */
if (numero === 5) {
    console.log("O numero é 5");
} else {
    console.log("Não faz parte do mesmo tipo");
}

/* Nesse caso, o "!==" estar verificando se são diferentes os tipos
Como constatou que são de diferente os tipos, a mensagem aparace no console */
if (numero !== 5) {
    console.log("Não são do mesmo tipo");
}