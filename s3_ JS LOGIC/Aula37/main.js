
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }


const nome = ['matheus', 'joao', 'china'];

for (let i in nome) {
    console.log(nome[i]);
}

console.log('####');

for (let valor of nome) {
    console.log(valor)
}

console.log('####');

// nomes.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array)
// });

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Neli'
};

for ( let i in pessoa) {
    console.log(i, pessoa[i])
}

// for classico - geralmente usado com (array ou strings)
// for in - retorna indice (string, array ou obj)
// for of - retorna o valor em si (iteraveis arrays ou strings)