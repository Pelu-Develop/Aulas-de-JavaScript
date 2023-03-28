/* Fora de escopos locais o this sempre se refere ao objeto gloval window
Em objetos o this vai se referir a instância e pode acessar suas propriedades */

var teste = 5;

console.log(this.teste);
console.log(teste);

console.log(this);

/* alert("Ola")
this.alert("Ola 2") */

let pessoa = {
    nome: "Pedro",
    idade: 26,
    falar: function () {
      console.log("Ola, tudo bem?");
    },
    dizerNome: function () {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return "Sr. " + this.nome;
    }
}

  pessoa.dizerNome();

  console.log(pessoa.idade);

  pessoa.aniversario();
  pessoa.aniversario();
  pessoa.aniversario();

  console.log(pessoa.idade);

  var sds = pessoa.saudacao();

  console.log("Bem vindo, " + sds);