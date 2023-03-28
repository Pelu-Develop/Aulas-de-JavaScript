/* Caso a instrução de if seja negativa, podemos adicionar else
Que será a outra condicional a ser executada
Podemos então criar uma bifurcação no código
Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de código */

var nome = "Xavier";

if(nome == "Pedro") {
    console.log("O nome dele é Pedro");

    /* O else if é uma segunda verificação, se o primeiro if for negativo, ele vai no else if e executa caso agora seja verdadeira
    A variavel nome é Matheus e o else if estar verificando se nome tem o valor de Matheus, logo ele execulta o codigo dele
    Caso o else execulte, o codigo else no final não é execultado */
} else if (nome == "Matheus") {
    console.log("O nome dele é Matheus");

    /* O else if pode ser usado quantas vezes quiser */
} else if (nome == "Xavier") {
    console.log("O nome dele é Xavier");
    
    /* Quando colocamos o else, ele execulta caso o if ligado a ele for negativo,
Nesse caso, a variavel nome é Matheus, e o if verificou sé a variavel era Pedro e viu que não era
Então mandou um sinal negativo e o else execulta esse sinal */
} else {
    console.log("Ele possui outro nome");
}

var idade = 19;

/* Pode ter um "if" e um "else if" não necessariamente precisa de uma "else" */
if (idade > 20) {
    console.log("Ele pode entrar na festa");
} else if (idade >= 18) {
    console.log("Só pode entrar com autorização");
}