//function declaration

function somar(a, b){
	console.log('Arguments ->', arguments); // Mostra os valores relativos as suas posições.
	return a + b;
}

// function expression

var subtrair = function(a, b){
	return a - b;
}

var soma = somar(5, 3);
console.log('5 + 3 =', soma);

var subtracao = subtrair(5, 3);
console.log('5 - 3 =', subtracao);

//DICA: Sempre declarar a função antes de chamá-la!!!

console.log('typeof subtrair', typeof subtrair);
