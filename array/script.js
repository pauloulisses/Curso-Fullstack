//               0         1          2
let alunos = ['Paulo', 'Eberson', 'Ulisses'];

// Imprimindo o array completo
console.log('Lista de alunos:', alunos); 
// Saída: ['Paulo', 'Eberson', 'Ulisses']

// Acessando um item específico por índice
console.log('Aluno na posição 2:', alunos[2]); 
// Saída: 'Ulisses'

// Editando um item específico do array (trocando 'Eberson' por 'Mirian')
alunos[1] = 'Mirian';

// Adicionando um novo item na posição 3 (diretamente)
alunos[3] = 'Apolo';

// Imprimindo novamente para ver a alteração
console.log('Lista atualizada de alunos:', alunos); 
// Saída: ['Paulo', 'Mirian', 'Ulisses', 'Apolo']

// Corrigindo erro de digitação em "ataulizada"
console.log('Lista atualizada de alunos com índice 3:', alunos); 
// Saída: ['Paulo', 'Mirian', 'Ulisses', 'Apolo']

// Vendo o tamanho do array
console.log('Tamanho do array:', alunos.length); 
// Saída: 4

// Colocando elemento no final do array com push
alunos.push('Otávio');

// Exibindo o array atualizado com o novo aluno
console.log('Array após push:', alunos); 
// Saída: ['Paulo', 'Mirian', 'Ulisses', 'Apolo', 'Otávio'

// colocando elemento no começo
alunos.unshift('Lecy');

// Exibindo o array ataulizado com o novo aluno
console.log('Array após unshift', alunos);

