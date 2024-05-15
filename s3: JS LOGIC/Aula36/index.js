const fruits = ['banana', 'pera', 'uva'];

// for in -> le os indices ou chaves do obj
//

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Neli',
    idade: '18',
    endereco: {
        rua: 'Av. Brasil',
        num: 100
    }
};


for (let i in pessoa) {
    console.log(pessoa[i])
}

console.log(pessoa['sobrenome'])