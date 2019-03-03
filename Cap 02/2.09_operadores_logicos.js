var ativo = true;
var admin = false;

// && = "e"... Verifica se o "ativo" e o "admin" são "true".
console.log(ativo && admin);

// || = "ou"... Verifica se, pelo menos, um dos dois são "true".
console.log(ativo || admin);

if (ativo || admin) {
	console.log('Mostro algo na tela');
}
// O resultado dá "1" porque o "1" é true
console.log(ativo | admin);

// O resultado dá "0" porque o "0" é false
console.log(ativo & admin);

// O recomendando é utilizar os sinais duplos: "&&" e "||"