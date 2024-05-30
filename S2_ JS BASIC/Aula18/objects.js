// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome, // or nome: nome, ...
//         sobrenome,
//         idade,
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Matheus', 'Neli', 18);
// const pessoa3 = criaPessoa('Mauricio', 'Rivera', 23);
// const pessoa4 = criaPessoa('Murilo', 'Moreira', 27);
// const pessoa5 = criaPessoa('Joao', 'Miranda', 29);


// console.log(pessoa1.nome, pessoa2.nome);


const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Rivera',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi!`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
