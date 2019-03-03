var pessoa = 'JURÍDICA';

if (pessoa === 'FÍSICA'){
	// Define máscara de CPF: 000.000.000-00
	console.log('Selecionado pessoa física');
} else if (pessoa === 'JURÍDICA'){
	// Define máscara de CNPJ: 00.000.000/0000-00
	console.log('Selecionado pessoa jurídica');
} else {
	console.log('Tipo pessoa inválido');
}

var valor = 0;

if (!valor) {
	console.log('Valor deve ser maior que zero!');
}

var idade = 10;
if (idade > 0) {
	console.log('Daqui a 5 anos você terá', idade + 5, 'anos.');
}