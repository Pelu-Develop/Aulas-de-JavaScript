/* Estas estruturas servem para repetir n vezes uma operação
Por exemplo: repetir uma determinada lógica em cada elemento de um array
As estruturas mais comuns são: while e for
Obs: Tomar cuidado com o loop infinito */

/* O while é a estrutura de repetição mais simples do JavaScript
A ideai é que se repita algo até atingir tal condição
While -> Enquanto */

var x = 0;

/* Estrutura de repetição dele, no parentese esclarece até quando ele irar se repetir
no caso abaixo, ele irar se repetir enquanto x é menor ou igual a 5 */
while(x <= 5) {

    console.log ("Testando repetição " + x);

    // incrementador

    /* x++ é uma maneira simples de incrementar uma variavel,
    no caso abaixo, seria o mesmo de fazer x = x + 1 
    Essa função estar incrementando o valor de 5 um por um, quando ele chegar a 6, vai fazer a função while parar*/
    x++;
}

var arr = ["teste", "testando", "a", "b" ];
var y = 0;

/* O exemplo abaixo, estou apresentando todos os elementos do array pela estrutura de repetição
Caso não usasse o while seria "console.log(arr[0]),console.log(arr[1]...") */
while(y <= 3) {
    console.log(arr[y]);
    y++;
}

var palavra = "Pedro";
var i = 0;

/* Nesse caso, o JavaScript vai printar cada letra da palavra Pedro no console */
while (i < 5) {

    console.log(palavra[i]);

    i++;

}

var y = 0;

while(y <= 10) {
    /* Switch é como se fosse if, só que mais organizado, usado junto o while, caso uma variavel especifica apareca, ele execulta um codigo predeterminado */
    switch(y) {
        case 2:
            console.log("O numero é o 2");
            break
        case 4:
            console.log("numero é o 4 ")
            break
        default:
            console.log("O numero não é o 2 nem o 4");
    }

    y++
}