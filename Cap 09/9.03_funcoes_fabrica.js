var criarCarroDaVW = function(nome, placa){
	return {
		nome: nome,
		placa: placa,
		fabricante: 'VW'
	};
}

var fox = criarCarroDaVW('Fox', 'AAA-1111');
var gol = criarCarroDaVW('Gol', 'AAA-2222');
console.log('Fox:', fox);
console.log('Gol:', gol);