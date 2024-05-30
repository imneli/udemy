// atribuição via desestruturação obj

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Montovaneli',
    idade: 18,
    endereco: {
        rua: 'Av. Paulista',
        num: 320
    }
};

// const name = pessoa.nome


//atrib via desestruturação
const { nome: teste, sobrenome, idade: joao } = pessoa;
const { nome, ... rest} = pessoa;
const { endereco: { rua: r, num} } = pessoa 
console.log(teste, sobrenome, joao);
console.log(r, num);
console.log(rest) // ... rest