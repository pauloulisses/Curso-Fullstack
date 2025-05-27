const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
console.log(array);



// const  nome01 = 'Paulo';
// const sobreNome01 = 'Ulisses'
// const idade01 = 32;

// const  nome02= 'Chayenne';
// const sobreNome02 = 'Cruz'
// const idade02 = 25;

// objeto= {}, array = []
const pessoa1 = {
    nome: 'Paulo',
    sobreNome: 'Ulisses',
    idade: 25,
};

console.log(pessoa1)

// criando com função
function criaPessoa(nome, sobreNome, idade) {
    return { nome, sobreNome, idade };
}

const pessoa2 = criaPessoa('Paulo', 'Eberson Ulisses', 32);
const pessoa3 = criaPessoa('Chayenne', 'Cruz', 25);
const pessoa4 = criaPessoa('Mirian', 'Renesme', 11);
const pessoa5 = criaPessoa('Apolo', 'Ulisses', 5);
const pessoa6 = criaPessoa('Lecy', 'Cruz', 8);

// Exibir os dados corretamente formatados no console
console.log(`Seu nome é ${pessoa2.nome} ${pessoa2.sobreNome} e sua idade é ${pessoa2.idade}`);
console.log(`Seu nome é ${pessoa3.nome} ${pessoa3.sobreNome} e sua idade é ${pessoa3.idade}`);
console.log(`Seu nome é ${pessoa4.nome} ${pessoa4.sobreNome} e sua idade é ${pessoa4.idade}`);
console.log(`Seu nome é ${pessoa5.nome} ${pessoa5.sobreNome} e sua idade é ${pessoa5.idade}`);
console.log(`Seu nome é ${pessoa6.nome} ${pessoa6.sobreNome} e sua idade é ${pessoa6.idade}`);

// usando this
const pessoa = {
  nome: 'Maria',
  falarNome() {
    console.log(this.nome); // aqui o this se refere ao objeto "pessoa"
  }
};

pessoa.falarNome(); // Saída: Maria
