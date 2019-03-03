var ativo = true;
console.log(typeof ativo);

ativo = false;
console.log(typeof ativo);

// 0 sempre no JavaScript é false.

if (0) {
	console.log('0 é true');
} else {
	console.log('0 é false');
}

!0 // O ! inverte o valor booleano.

0 // No JavaScript 0 sempre é false.
'' // String vazia também é false.
NaN // Not a number também é false.
null // Null é false.
undefined // Undefined também é false.
false // O próprio false será false.

