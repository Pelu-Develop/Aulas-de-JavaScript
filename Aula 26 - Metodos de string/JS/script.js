/* O objeto String também possui métodos muito uteis
Que vão nos auxiliar a manusear textos nos nossos softwares
Os metodos de string também auxiliam na sua modificação
Podemos por exemplo deixar a fonte em caixa alta ou baixa com JS */

// "length", verifica a quantidade de caracteres na minha string

var nome = "Pedro";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// "indexOf", é um metodo que identifica com a base o indice, a letra na possição
// no caso abaixo, tem a string "pedro" e com o metodo, quisemos o que estar na terceira posição, logo o "d"

console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de roma";

/* identifica quando começa a palavra roeu, no caso na setima posição */
console.log(frase.indexOf("roeu"));

// "slice", recorta uma parte de uma frase, separando a parte removida

var roeu = frase.slice(7,11);

console.log(roeu)

// "replace", é usado para trocar uma palavra da string por outra

var novaFrase = frase.replace("roeu","teste")

console.log(novaFrase);

// "toLowerCase e toUpperCase", modifica o texto para tudo caixa baixa ou alta

var frase = "Esta é a frase que vamos modificar"

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

// "trim", remove espaços desnecessarios, porem não apaga espaços entre palavras, como no caso abaixo

var nome = "         Pedro Lucas       " ;

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// "split", tranforma uma frase ou texto num array, exemplo pratico abaixo. 

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// "lastIndexOf", é como se fosse o indexOf, porem é no casos que a palavra aparece meis de uma vez e eu não quero pegar a primeira

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.IndexOf("teste"));



