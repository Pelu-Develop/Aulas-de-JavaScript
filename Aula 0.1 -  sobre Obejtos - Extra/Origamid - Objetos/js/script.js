/* Geralmente não ciramos dessa maneira */
/* A criação de um objeto vem da adição de "{}" */
let carro = {
    /* no caso abaixo estamos adiciando uma tag com um valor ao objeto */
    marca: "VW",
    preco: "1000",
    /* Nesse caso estamos criando um metodo */
    andar:function() {
        return  console.log("andou");
    }
}

/* Imprime no console todas as tags do objeto */
console.log(carro);

/* Metodo para entrar num obejto e selecionar uma tag */
console.log(carro.marca);

/* Nesse caso, estamos ativando uma função que estar dentro do objeto */
console.log(carro.andar());

/* tudo é objeto, até uma string que no final tem um "." que chama uma propriedade */
console.log("pedro".length);

function $(nome) {
    return {
        hide() {
            console.log("esconder o " + nome);
        }
    }
}

/* estou execultado 2 funções, uma dentro da outra */
$("Pedro").hide();



