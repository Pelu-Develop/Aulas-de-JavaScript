/* Como voce pode perceber muitos tipos de dados tem métodos e propriedades
Podemos criar também os nossos objetos com propriedades e métodos para auxiliar nos nosso programas */

let pessoa = {
  nome: "Pedro",
  idade: 26,
  /* Estamos colocando um metodo personalizado dentro do nosso objeto */
  falar: function () {
    console.log("Ola, tudo bem?");
  },
  /* Criamos um metodo que faz uma operação, no caso os parametros vai receber dados da parte que ela é invocada */
  soma: function (a) {
    return a + this.idade;
  },
};

console.log(pessoa);
console.log(pessoa.nome + " " + pessoa.idade);

/* estamos invocando o nosso metodo */
pessoa.falar();

/* invocando o metodo e passando os dados da operação */
var soma = pessoa.soma(10);

console.log("Essa é a sua idade daqui a 10 anos: " + soma);
