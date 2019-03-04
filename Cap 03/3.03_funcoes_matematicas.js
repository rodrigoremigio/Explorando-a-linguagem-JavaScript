//MATH

var menorNota = Math.min(3, 8, 2, 6, 4, 9);
console.log('Menor nota:', menorNota);

var maiorNota = Math.max(3, 8, 2, 6, 4, 9);
console.log('Maior nota:', maiorNota);

//Math.round arronda o valor

var temperatura = Math.round(22.3);
console.log('Temperatura:', temperatura, 'graus.');

var temperatura = Math.round(27.8);
console.log('Temperatura:', temperatura, 'graus.');

var temperatura = Math.round(30.5);
console.log('Temperatura:', temperatura, 'graus.');

//Math.random gera um valor aletório entre 0 e 1.

var valorAleatorio = Math.random();
console.log('Valor Aleatório:', valorAleatorio);

var numero = valorAleatorio * 60;
console.log('Número:', numero);

var numeroMega = Math.floor(numero) + 1; //Math.floor sempre arredonda para baixo.
console.log('Número da mega:', numeroMega);

