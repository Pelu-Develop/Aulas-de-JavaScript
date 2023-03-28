/* Como era feito antigamente */
function Person(name) {
    this.name = name;
}

var person = new Person("Pedro");

console.log(person.name);

/* A nova maneira de se fazer é usando classe
é possivel trabalhar com metodos dentro da declaração das classes 
Com classes tambem fica disponivel get and set*/

/* A sintaxe é "class + (um nome para a classe)" abre chaves e depois "constructor(aqui pode ter um parametro)" e abre chaves */
class Person2 {
    constructor(name){
        this.name = this.caixaAlta(name)
    }

    caixaAlta(string) {
        return string.toUpperCase();
    }

    walk() {
        return this.name + " estar andando.";
    }
}

class Developer extends Person2 {
    constructor(name,codeLanguage) {
        super(name)
        this.codeLanguage = codeLanguage
    }

    code() {
        return this.name + " está codando em " + this.codeLanguage;
    }
}

var person2 = new Person2("pedro");

console.log(person2.name);
console.log(person2.walk());

let Gabi = new Developer("Gabi","CSS");
console.log(Gabi.code())

let Pedro = new Developer("Pedro","HTML,JavaScript");
console.log(Pedro.code());