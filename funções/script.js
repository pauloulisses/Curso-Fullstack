// Funções

function saudacao(nome,idade) {
    return (`Bom dia ${nome}! sua idade é ${idade}`);
    

}

const saudacaoNomeIdade = saudacao('Paulo', 32);
console.log(saudacaoNomeIdade)


// Fuction recebendo dois valores

function soma(x, y) {
    const resultado = x + y;
    return resultado; // return serve para encerrar a função
}
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));


// função anônima
// aqui está indicando que a variável raiz recebe a function
const raiz = function(n) {
  return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// arrow function
const nome = () => {
    return 'Paulo';
};

console.log(nome()); // Saída: Paulo

const click =() => {
    alert('você clicou');
}
click()