var nome = 'Rodrigo'; // NOME é uma variável global

var capitalizar = function() {
	// NOME é uma variável local à função captalizar.
	var nome = 'Rodrigo'.toUpperCase();
}

capitalizar();
console.log('Nome:', nome);

var capitalizar2 = function() {
	nome = 'Rodrigo'.toUpperCase();
}

capitalizar2();
console.log('Nome2:', nome);

// DICA: evite declarar variável global!!!