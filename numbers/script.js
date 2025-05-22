// number

let num1  = 15.0089545845858552;
let num2 = 2.5;

// topString - trasforma o número em string. a saída será 12.5 pois concatena
// num1 = num1.toString() - trasformando numero em string
console.log(num1.toString() + num2);

// trasfromando em string e um número binário
console.log(num1.toString(2));

// arrendodnando e dizendo quantas casas decimais quero colocar no úmero
console.log(num1.toFixed(4));

let numero1  = 10.25;
let numero2 = 2.5;

let temp = num1 * 'Olá';
// perguntando se esse número é uma conta inválida. É um not a number
console.log(Number.isNaN(temp));

