var acessorios = {som: 'Pioneer', banco: 'couro'};

var ligar = function(){
	console.log('Ligando o carro...');
}

var golf = ['Golf', 4, acessorios, ligar];

console.log(golf);

console.log(golf[2].som);
golf[3]();


