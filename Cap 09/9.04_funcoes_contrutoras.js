// Função contrutora é bom sempre iniciar sempre com letra MAIUSCULA.

var Carro = function(nome, placa){
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
}

var fox = new Carro('Fox', 'AAA-1111');

console.log('Fox:', fox);