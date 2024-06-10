// const nome = 'matheus'
// const sobrenome = 'montovaneli'

// const sayName = () => {
//     console.log(nome, sobrenome)
// }

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;

// exports.NAME = nome // variavel nao precisa ter nome da chave
// exports.sobrenome = sobrenome
// exports.sayName = sayName

// this.qualquercoisa = 'oq eu quero exportar'

// console.log(exports)

class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

exports.Pessoa = Pessoa;

module.exports = {
    name, sobrenome, Pessoa
}