class Pessoa {
    constructor(nome, subname) {
        this.nome = nome;
        this.subname = subname;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
};

const p1 = new Pessoa('Matheus', 'Rivera');
const p2 = new Pessoa('Joao', 'Miranda');
const p3 = new Pessoa('Andre', 'Marquez');
const p4 = new Pessoa('Luana', 'Silva');

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}

p1.falar();