let num1 = 9.54578;

// Arredonda para baixo (sempre remove a parte decimal)
let num2 = Math.floor(num1);  // Resultado: 9

// Arredonda para cima (sempre sobe para o próximo inteiro)
let num3 = Math.ceil(num1);   // Resultado: 10

// Arredonda para o inteiro mais próximo
let num4 = Math.round(num1);  // Resultado: 10 (porque 0.54578 >= 0.5)

// Achando qual o maior número
let num5 = Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6);

// Achando o menor número
let num6 =  Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6);

// Gerando número aleátorio entre 0 e 1
let num7 = Math.random();

console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);

// pegando número aleatório entre 10 e 5

const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio)

// elevação - aqui esta pegando 2 e elevando a 4
const numeroElevado = Math.pow(2, 4);
console.log(numeroElevado);

// melhor forma de usar 
console.log(2 ** 10);