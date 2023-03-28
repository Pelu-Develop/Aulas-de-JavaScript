/* Recurso para salvar dados no navegador, que persiste aós o recarregamento da página ou ao fechar a aba
Capacidade máxima de 10mb
Os dados são salvos no computador do usuário
Estes dados não possuem tempo de expiração, mas podem ser removidos
Os dados ficam na aba Application do Dev tools */

/* Recurso similar ao localStorage
Capacidade máxima de 5mb
Os dados são salvos no computador do usuário
Os dados expiram quando a aba é fechada */

// 1 - inserir dado
localStorage.setItem("name", "Pedro");

// 2 - restart sem perder dados

// 3 - resgatar item

const name = localStorage.getItem("name");

console.log(name);

// 4 - resgate de item que não existe

const lastName = localStorage.getItem("lastname");

console.log(lastName);

if (!lastName) {
    console.log("Sem sobrenome!");
}

// 5 - remover item

localStorage.removeItem("name");

console.log(name);

// 6 - limpar todos os itens

localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

/* console.log(typeof localStorage.getItem("a")); */

localStorage.clear();

// 7 - session storage

sessionStorage.setItem("number", 123);

// 8 - reiniciar e perder dados, quando fecha o navegador ou aba, ele reseta os dados

const n = sessionStorage.getItem("number");

console.log(n);

/* sessionStorage.removeItem("number") */

sessionStorage.clear();

// 9 - salvar objetos

const person = {
    name: "Pedro",
    age: 27,
    job: "Programdor",
};
// da erro passando dessa maniera o objeto, tem que passar para JSON
/* localStorage.setItem("person", person); */

localStorage.setItem("person", JSON.stringify(person));

const getperson = localStorage.getItem(person);

console.log(getperson);

const personObject = JSON.parse(getperson);

console.log(typeof personObject);

console.log(personObject.job);
