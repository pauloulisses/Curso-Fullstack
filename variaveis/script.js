/** CONSTANTES
 * 
 * 1. Não podemos criar variáveis com palavras reservadas
 * let if = 10; // ❌ Inválido
 * 
 * 2. Variáveis precisam ter nomes significativos
 * let x = 10; // ❌ Pouco significativo
 * let idadeUsuario = 25; // ✅ Significativo
 * 
 * 3. Não pode começar o nome de uma variável com um número
 * let 1nome = "Maria"; // ❌ Inválido
 * let nome1 = "Maria"; // ✅ Válido
 * 
 * 4. Não podem conter espaços ou traços
 * let nome-usuario = "João"; // ❌ Inválido
 * let nomeUsuario = "João"; // ✅ Válido
 * 
 * 5. Utilizamos camelCase
 * let nomeusuario = "Carlos"; // ❌ Não recomendado
 * let nomeUsuario = "Carlos"; // ✅ Recomendado (camelCase)
 * 
 * 6. Case-sensitive
 * let nomeUsuario = "Ana";
 * let nomeusuario = "Maria";
 * console.log(nomeUsuario); // ✅ Exibe "Ana"
 * console.log(nomeusuario); // ✅ Exibe "Maria"
 * 
 * 7. Não podemos redeclarar variáveis com let
 * let idade = 30;
 * let idade = 25; // ❌ Erro: Identifier 'idade' has already been declared
 * 
 * 8. Não utilize var, utilize let
 * var idade = 20; // ❌ Não recomendado
 * let idade = 20; // ✅ Recomendado
 */






let nome = "João"; // string

console.log(nome, "nasceu em 1984");
console.log('Em 2000',nome, 'conheceu Maria');
console.log(nome, " casou-se com Maria em 2012");
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

let nome2; // Declara a variável
nome2 = 'João'; // Inicializando a variável
console.log(nome2);
nome2 = 'Otávio';
console.log(nome2);

/*
    PALAVRAS RESERVADAS

1. Não podemos craiar variáveis com palavras reservadas
let let, let console, let if, 

*/


// Variaveis precisam ter nomes significativos

let meu_nome = "Paulo";
console.log(meu_nome)


/*
 1. Não pode começar o nome de uma variável com um número

 2. Não pode conter espaços ou traços
 
 3. UTILIZAMOS camelCase

 4. Case-sensitive
 
 5. Não podemos redeclarar variáveis com let

 obs: podemos modificar a variável sem utilizar a palavra let 

*/

// camelCase

let nomeCompletoDoCliente = "Paulo Eberson Ulisses";
console.log(nomeCompletoDoCliente)


// camelCase
let nomeCliente = "Paulo"

//Case-sensitive
let nomecliente = "Eberson"

console.log(nomeCliente, nomecliente)