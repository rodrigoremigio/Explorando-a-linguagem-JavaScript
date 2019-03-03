var x = 'AlgaWorks';
console.log(x);
console.log(typeof x);

var y = "JavaScript";
console.log(y);
console.log(typeof y);

// Pode ser usadas aspas simples ou duplas.

// Propriedade "length". Conta a quantidade de caracteres.
// NÃO É FUNÇÃO!!!
console.log(x.length);

var a = 'AlgaWorks';
var b = 'AlgaWorks';

// Comparando variáveis
console.log(a === b);
console.log(a == b);

// Conta a quantidade de letra a qual a palavra começa.
var msg = 'Seja bem vindo a AlgaWorks';
console.log(msg.indexOf('vindo'));
console.log(msg.lastIndexOf('a'));

// Pegar a palavra "arte".
var s = 'A arte de programar'
console.log(s.substring(2, 6));
// Pegar a palavra "arte" de trás pra frente.
console.log(s.slice(-17, -13));
// Abaixo ele vai exibir 4 caracteres a partir da posição 2.
console.log(s.substr(2, 4));

// Subtituir
var m = 'Seja bem vindo, <nome>';
console.log(m.replace('<nome>', 'Rodrigo'))

// Maiúsculas e minúsculas
var nome = 'Rodrigo'
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// Concatenação
var e = 'Olá,' + ' ' + 'Ricardo';
console.log(e);
console.log(e.charAt(5));

