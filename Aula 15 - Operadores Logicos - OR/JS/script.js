/* O operador lógico || é conhecido tambem como OR
Ele retorna true caso uma das operações retorne verdadeiro
O OR retorna false apenas se as duas expressões são falsas*/

var idade = 16;
var nome = "pedro";

/* O OR retorna com resultado true se algum dos criterios de comparação der resultado positivo
se os 2 resultarem em false, ai que o OR retorna com negativo */
if (nome == "pedro" || idade > 14) {
    console.log("Pode entrar na aula de esgrima");
} else {
    console.log("Não pode entrar");
}

/* os operadores logicos podem ser juntados */
if (nome == "pedro" && 15 > 20 || 10 == 10) {
    console.log("testando");
} else {
    console.log ("não estrou");
}