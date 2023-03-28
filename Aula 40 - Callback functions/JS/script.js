/* A função de callback é um recurso muito ineressante e também amplamente utilizando em JS
Permite executar uma função edepois de uma determinada ação
Condeito fundamental para entender a parte assíncrona do JS */

function exibir (num) {
    console.log("a operação resultou em:" + num);
}

function soma(a,b,callback) {
    var op = a + b;
    callback(op);
}

function multiplicação(a,b,cb) {
    var op = a * b;
    cb(op);
}

soma(2,2,exibir);

multiplicação(2,4,exibir);