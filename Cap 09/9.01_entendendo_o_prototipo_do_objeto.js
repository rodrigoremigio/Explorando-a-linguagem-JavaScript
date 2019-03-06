var dodge = {
	fabricante: 'Dodge'
}

var charger = {
	nome: 'Charger',
	placa: '01 DC 01',	
}

var ram = Object.create(dodge);
ram.nome = 'Ram';
ram.placa = '02 DR 02';
// var ram = {
//  	nome: 'Ram',
//  	placa: '02 DR 02',
// }

console.log('charger', charger);

console.log(Object.getPrototypeOf(charger) === Object.getPrototypeOf(charger));

console.log('charger.fabricante', charger.fabricante);

Object.setPrototypeOf(charger, dodge);
console.log('charger.fabricante ->', charger.fabricante);
console.log('ram.fabricante ->', ram.fabricante);

console.log('toString do Charger:', charger);