/* Funções são blocos de códigos reutilizáveis
Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código
Função precisa ser invocada para ser executada */


/* Sintaxe da function, primeiro vem a palavra reservada Function
Depois colocaos as nome da Função
Entre os parentes é opcional, mas colocariamos os parametros
e abre chaves */
function primeiraFuncao () {

    console.log ("Hello Word");

}

/* A função só é execultada no codigo caso ela seja chamada, como é no caso abaixo
colocasse o nome da função e depois os parenteses */
primeiraFuncao ();

/* Podemos adicionar parametros a nossa função, na qual vai alocar a informação que iremos colocar na parte em que a invocamos */
function dizerNome (nome) {

    console.log("O nome é " + nome);
}

/* Nesse caso, estamos mandando para a nossa função a informação que o primeiro parametro se chama "Pedro" logo ele vai colocar no codigo o dado */
dizerNome("Pedro");
dizerNome("João");
dizerNome("Gabrielle");

/* Podemos colocar uma variavel para dentro de uma função invocada */
var nomeDoBancoDeDados = "Reinaldo";

dizerNome(nomeDoBancoDeDados);

function soma( a, b ) {
    var soma = a + b;

    /* essa palavra reservada vai mandar de volta para a função chamada o que estar no parenteses */
    return soma; 
}

var somaUm = soma( 5,10)

console.log(somaUm);

var somaDois = soma (15,15)

console.log(somaDois);


