const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Montovaneli'
};

const pessoa1 = new Object();

pessoa1.nome = 'Matheus';
pessoa1.sobrenome = 'Neli';
pessoa1.idade = 18;

pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome..`);
}

pessoa1.getDataNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
    
}

console.log(pessoa1.getDataNascimento());

pessoa1.falarNome();

// delete pessoa1.nome;
console.log(pessoa1)

const pessoa2 = {
    nome: 'maria',
    sobrenome: 'joana'
}

console.log(pessoa2)

console.log(`O ${pessoa1.nome} nasceu em ${pessoa1.getDataNascimento()}`);

const chave = 'nome'; // chama o nome da pessoa

console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

// factory function

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Matheus', 'Rivera');
console.log(p1.nomeCompleto)

// constructor function

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Matheus', 'Nelizada');
Object.freeze(p1) // fazer com q o obj nao mude
p2.nome = 'Outros bglh dog';
console.log(p2)


const p3 = {};
p3.name = 'Luiz';
p3.subname = 'omaga';
console.log(p3)
