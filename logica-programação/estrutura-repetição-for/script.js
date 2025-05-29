// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// let i(index) incia em 0 
// i(index) é maior ou igual a 5
// i(index) ++ que dizer que ele irá incrementar 1
for (let i = 0; i <= 5; i++ ) {
    console.log(`Linha ${i}`);


}


// For in - object

const pessoas = {
    nome: 'Paulo',
    sobreNome: 'Ulisses',
    idade: 32
};

// Percorre todas as chaves (propriedades) do objeto 'pessoas'
for (let chaves in pessoas) {
    // 'chaves' será 'nome', 'sobreNome' e 'idade', um de cada vez
    // Acessamos o valor com pessoas[chaves]
    console.log(chaves, pessoas[chaves]);
}


// For of -  não deve ser usado diretamente em objetos, pois eles não são iteráveis por padrão.
//  A forma correta e recomendada é usá-lo com métodos como Object.entries(), Object.keys() ou Object.values() 
// — que transformam o objeto em uma estrutura iterável (como um array).


const produto = {
    nome: 'Notebook',
    preco: 3500,
    marca: 'Dell'
};

// Forma correta e recomendada com for...of
for (let [chave, valor] of Object.entries(produto)) {
    console.log(`${chave}: ${valor}`);
}


// while
let contador = 1; // Começamos com o valor 1

// Enquanto o contador for menor ou igual a 5, o loop continua rodando
while (contador <= 5) {
    console.log('Contador está em:', contador); // Mostra o valor atual do contador
    contador++; // Incrementa o contador (soma 1)
}

console.log('Fim do loop');
