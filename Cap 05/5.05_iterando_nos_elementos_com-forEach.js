var nomes = ['João', 'Pedro', 'Maria', 'José'];

for (var i = 0; i < nomes.length; i++){
	console.log('Nomes[', i, ']=', nomes[i]);
}

//Usando o forEach
nomes.forEach(function(elemento){
	console.log(elemento);
});
