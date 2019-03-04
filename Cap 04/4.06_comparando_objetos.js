// O THIS define o escopo: Ele expressa que o EMAIL deve estar dentro
// do escopo onde ele está, nesse caso, o email de João.  

var joao = {
	nome: 'João',
	idade: 25,
	email:'teste@email.com',
	igualA: function(obj){
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: 27,
	email:'teste2@email.com'
}

console.log(joao === maria);

console.log('João e Maria têm os mesmo emails?', joao.igualA(maria));

