/* São instruções que podem determinar o fluxo de uma aplicação
Amplamentes utilizados, deixam os softwares dinâmicos
Exemplos são: if,else if,else 
Operador de Comparação, exemplos: =,<,>*/

/* Condicional IF
Executa um bloco de código se a instrução for verdadeira
Se for falsa, segue o código normalmente
Lembrando que: true e false são do tipo Boolean */

var idade = 16;
var idadeMinima = 18;

console.log("Antes do if");

/* Com base o que estar no "()", o if vai executar o codigo dele ou não */
if (idade > idadeMinima) {
    console.log("Pode fazer a carteira de habilitação");
};

/* Pode ter mais de um if uma seguida da outra */
if (idade > 15) {
    console.log("Precisa esperar 3 anos ainda");
}

console.log("depois do if");