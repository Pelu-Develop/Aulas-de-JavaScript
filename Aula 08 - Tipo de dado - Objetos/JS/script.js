/* Funcionam como um array associativo de outras linguagens
Podemos criar propriedades com chave e valor
A ideia é guardar um conjunto de valores para utilizar posteriormente
Sempre temos que colocar uma "," quando fomos adicionar mais chaves no objeto */

/* A sintaxe de objetos é "{}" */
var obj = {
    /* exemplo abaixo chave = nome,valor = Pedro Lucas */
    nome: "Pedro Lucas",
    idade:26,
    profissao:"Programador",
    estarComDor: true,
};

console.log(obj);

console.log(typeof obj);

/* Como acessar uma chave do objeto */
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

/* Eu posso tambem concatenar a chave de um objeto */
console.log("O meu nome é " + obj.nome);

/* Podemos alterar os valores da chave do obejto */
obj.nome = "Pedro Lucas Carolino Felix";

console.log(obj.nome);
console.log(obj);

obj.graduacao = true;

console.log(obj);

