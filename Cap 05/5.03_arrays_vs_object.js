var golfArray = ['Golf', 'Preto', 'VW'];
console.log(typeof golfArray);
console.log(golfArray[0]);
console.log(golfArray[1]);

var golfObj = {modelo: 'Golf', cor: 'Preto', fabricante: 'VW'};
console.log(typeof golfObj);
console.log('Modelo:', golfObj.modelo);
console.log('Cor:', golfObj.cor);
console.log('Fabricante:', golfObj.fabricante);

//DIFERENÇA ENTRE ARRAY E OBJECT
console.log(golfArray);
console.log(golfObj);

// O ARRAY é acessado pelos índices(posições)... posição 1, 3 etc.
// O OBJECT é acessado pelo nomes que você deu aos atributos...   