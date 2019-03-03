var idade = 25;
console.log(typeof idade);

var preco = 14.99;
console.log(typeof preco);

//Inteiro ou decimal, o tipo será number.

var x = 0.3 - 0.2;
console.log(x);

var a = (0.3 * 10 - 0.2*10) / 10;
console.log(a);

var y = 10;
console.log(y);
console.log(typeof y);

//Passando o Y para binário
console.log(y.toString(2));

//Passando o Y para hexadecimal
console.log(y.toString(16));

//Infinito
var i = 10 / 0;
console.log(i);
console.log(typeof i);

// - Infinito
var j = -10 / 0;
console.log(j);
console.log(typeof j);

// NaN
var z = 10 / 'algaworks';
console.log(z);
console.log(typeof z);

// A string é convertida em número...
var p = 10 / '2';
console.log(p);
console.log(typeof p);

