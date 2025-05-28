/**
 * Operadores de comparação
 * > maior que
 * >= maior que ou igual a 
 * < menor que
 * <= menor que ou igual a 
 * == igualdade estrita (valor e tipo)
 * != diferente (valor)
 * !== diferente estrito (valor e tipo)
 */

// > maior que
console.log(10 > 20); // false — 10 não é maior que 20

// >= maior que ou igual a 
console.log(10 >= 10); // true — 10 é igual a 10

// < menor que
console.log(20 < 10); // false — 20 não é menor que 10

// <= menor que ou igual a 
console.log(20 <= 10); // false — 20 não é menor nem igual a 10

// == igualdade (apenas valor, converte tipo se necessário)
console.log(20 == 10); // false — valores diferentes

// != diferente (apenas valor, converte tipo se necessário)
console.log(10 != "20"); // true — valores diferentes após conversão

// !== diferente estrito (valor e tipo)
console.log(30 !== "paulo"); // true — número é diferente de string
