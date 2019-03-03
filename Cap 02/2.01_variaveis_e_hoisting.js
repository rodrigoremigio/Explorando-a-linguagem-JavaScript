var percentualImposto = 0.15;
var valor = 100;
var totalImposto = valor * percentualImposto;

console.log('Total de imposto a pagar', totalImposto);



// HOISTING: Mesmo a variável VALOR sendo declarada depois da fórmula a expressão funciona por causa do HOISTING.
// Ele "leva pra cima" qualquer DECLARAÇÃO de variável que ele encontrar
// O hosting deixaria o código assim:
// var percentualImposto, valor, totalImposto;
// valor = 100;
// totalImposto = valor * percentualImposto;
// console.log('Total de imposto a pagar', totalImposto);
