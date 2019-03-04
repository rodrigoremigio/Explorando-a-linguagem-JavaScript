var joao = {
	nome: 'João',
	idade: 25,
	endereco: {
		logradouro: 'Av Brasil',
		numero: 100,
		complemento: 'Apto 202',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

console.log('Dados do João:', joao);

//removendo propriedades;

delete joao.idade;

console.log('Dados do João s/ idade:', joao);

delete joao.endereco.estado;

console.log('Dados do João s/ idade e estado:', joao);