var temFoto = true;
// Se tem foto, irá buscar o perfil.jpg.
// Se não tem foto, irá buscar o mock-perfil.jpg.
// <img src="pathFoto">
/*
var pathFoto = '';
if (temFoto) {
	pathFoto = 'maria-perfil.jpg';
} else {
	pathFoto = 'mock-perfil.jpg';
}

console.log('path da foto', pathFoto);
*/

//Operador ternário

var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg'; 

console.log('path da foto', pathFoto);
