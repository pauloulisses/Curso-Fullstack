/** CONSTANTES
 * 
 * 1. Não podemos criar constantes com palavras reservadas
 * const if = 10; // ❌ Inválido
 * 
 * 2. Constantes precisam ter nomes significativos
 * const x = 10; // ❌ Pouco significativo
 * const PI = 3.14; // ✅ Significativo (valor matemático constante)
 * 
 * 3. Não pode começar o nome de uma constante com um número
 * const 1numero = 5; // ❌ Inválido
 * const numero1 = 5; // ✅ Válido
 * 
 * 4. Não podem conter espaços ou traços
 * const valor-total = 100; // ❌ Inválido
 * const valorTotal = 100; // ✅ Válido
 * 
 * 5. Utilizamos camelCase ou SNAKE_CASE para constantes
 * const pi = 3.14; // ❌ Não recomendado para constantes fixas
 * const PI = 3.14; // ✅ Recomendado (SNAKE_CASE para constantes fixas)
 * 
 * 6. Case-sensitive
 * const valor = 50;
 * const VALOR = 100;
 * console.log(valor); // ✅ Exibe 50
 * console.log(VALOR); // ✅ Exibe 100
 * 
 * 7. Não podemos redeclarar ou reatribuir constantes
 * const idade = 30;
 * idade = 25; // ❌ Erro: Assignment to constant variable
 * 
 * 8. Não utilize var, utilize const para valores constantes
 * var idade = 20; // ❌ Não recomendado
 * const idade = 20; // ✅ Recomendado para valores imutáveis
 */

// Constante - não pode fazer uma reatribuição
const nome = "Paulo";
console.log(nome)

// Utilizando constat

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero);

// Tipo typeof

let numero = 234;
console.log(typeof(numero));

// concatenação
let numero1 = 23;
let numero2 = 20;
let resultado2 = String(numero1) + String(numero2);
console.log(resultado2); 

