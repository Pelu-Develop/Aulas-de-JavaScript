/* São comumente utilizadps para verificação nas estruturas de condição
Temos os seguintes operadores: ==,!=,>,<,<=,>=
A partir de uma espressão de comparação podemos obter um true ou false */

var idade = 18;
var possuiCarro = 0;

/* A operação verifica se a variavel é maior ou igual ao valor
logo, se é maior ou igual a 18 */
if(idade >= 18) {
    console.log("Voce estar apto a fazer a carteira de habilitação");
}

/* A operação verifica se a variavel é menor ou igual ao valor
logo, se é menor ou igual a 17 */
if(idade <= 17) {
    console.log("Voce não estar apto a fazer a carteira de habilitação ");
}

/* O javascript entende o 0 como falso, logo essa instrução abaixo não irar rodar
se a variavel possuiCarro for 0 */
if(possuiCarro) {
    console.log("O usário ja pode andar de carro");
}

var nome = "Pedro";

/* A operação estar verificando se realmente corresponde ao valor
se nome for Pedro, essa parte do programa irar rodar 
Quando for usar o operador de comparação "==", lembrando se sempre colocar 2 iguais, se colocar só um,
ele estarar mudando o valor da variavel pra aquela correspondente, exemplo a seguir:
se colocar nome = "matheus" entre os parenteses do if, ele irar mudar a variavel nome para matheus, ocasionando no erro */
if (nome == "Pedro") {
    console.log("O seu nome é Pedro");
}

/* A operação estar verificando se a variavel é diferente da condição, se for diferente da variavel, ela irar executar o comando abaixo */
if (nome != "Matheus") {
    console.log("O seu nome não é Matheus");
}

/* A operação verifica se a variavel é maior que a outra, logo se 20 é maior que 10, se for verdadeiro ele executa a função */
if(20 > 10) {
    console.log("Passou");
}

/* A operação verifica se a variavel é menor que a outra, logo se 10 é menor que 20, se for verdadeira ele executa a função */
if(10 < 20) {
    console.log("Passou 2");
}



