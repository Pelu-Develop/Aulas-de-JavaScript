/* No JavaScript podemos ter vários escopos
O global, que é iniciado em toda a aplicação
E os locais, que podem existir em varias instruções como as funções */

/* essa var estar no escopo global */
var x = 1;

console.log(x);

function teste() {
    /* Essa variavel abaixo estar no escopo local */
    var z = 0;

    console.log(z);

/* Variaveis que estão no escopo global podem ser acessadas dentro das funções */
    console.log(x);
}

/* Variaveis dentro do escopo local, não podem ser acessadas fora da funções */
/* console.log(z); */

teste();

function testando() {
    /* Variaveis locais não se misturam, logo que podem ter variaveis com o mesmo nome */
    var z = 5;

    console.log(z);
}

testando();

/* O "if" não muda de escopo */
if(true) {
    var p = 1;
}

console.log(p);

