//Objeto do tipo carro
var golf  = {cor: 'prata', modelo: 'TDI', fabricante: 'VW'}

console.log('GOLF:', golf);
console.log(typeof golf);

console.log('Cor do Golf:', golf.cor);

//pintando o Golf
golf.cor = 'branco';
console.log('Nova cor do Golf:', golf.cor);
console.log('Modelo:', golf['modelo']); //Forma dinâmica

// Adicionando uma nova propriedade
golf.peso = 1500;
console.log('GOLF:', golf);

console.log('Potência:', golf.potencia);

golf.ligar = function() {
	console.log('Ligando o carro!');
};
console.log('GOLF:', golf);

golf.ligar();

var civic = {
	cor: 'branco',
	modelo: 'SI',
	fabricante: 'Honda',
	liga: function(){
		console.log('Ligando o carro');
	}
}

console.log('CIVIC:', civic);