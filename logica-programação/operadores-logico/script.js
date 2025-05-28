
/**
 * Operadores Lógicos
 * && - E: todas as condições devem ser verdadeiras
 * || - OU: pelo menos uma condição deve ser verdadeira
 * !  - NÃO: inverte o valor lógico
 */

// Exemplo 1: Operador AND (&&)
let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir."); // true && true → true
} else {
  console.log("Não pode dirigir.");
}

// Exemplo 2: Operador OR (||)
let temPassaporte = false;
let vistoValido = true;

if (temPassaporte || vistoValido) {
  console.log("Pode viajar."); // false || true → true
} else {
  console.log("Não pode viajar.");
}

// Exemplo 3: Operador NOT (!)
let estaChovendo = false;

if (!estaChovendo) {
  console.log("Pode sair sem guarda-chuva."); // !false → true
} else {
  console.log("Leve um guarda-chuva.");
}
