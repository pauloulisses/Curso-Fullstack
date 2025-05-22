// Tipos Primitivos

const nome = 'Paulo'; // string
const nome1 = "Paulo"; // string
const nome2 = `Paulo`; // string - tamplate

const num1 = 10; // number
const num2 = 10.52 // number

let nomeAluno; // undefined = não aponta para local na memória
let sobreNomeAluno = null; // nulo -> não aponta para local na memória

const tiposPrimitivos = [
  { tipo: "String", exemplo: '"Olá, mundo!"' },
  { tipo: "Number", exemplo: "42, 3.14, NaN" },
  { tipo: "Boolean", exemplo: "true ou false" },
  { tipo: "Undefined", exemplo: "let x; // x está undefined" },
  { tipo: "Null", exemplo: "let x = null;" },
  { tipo: "BigInt", exemplo: "123456789012345678901234567890n" },
  { tipo: "Symbol", exemplo: "Symbol('id')" }
];

const lista = document.getElementById("lista-tipos");

tiposPrimitivos.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.tipo}: exemplo → ${item.exemplo}`;
  lista.appendChild(li);
});
