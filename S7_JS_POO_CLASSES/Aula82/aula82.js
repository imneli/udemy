// getters e setters


const _velocidade = Symbol(); // symbol gera um id aleatorio



class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
        console.log('SETTER');
    }

    get velocidade() {
        return this[_velocidade]
        console.log('GETTER');
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--; 
    }
}

const c1 = new Carro('Fusca', 10);

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 50; // setter

// c1.velocidade = 1500; (muda velocidade max)

console.log(c1.velocidade);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Matheus', 'Rivera');
p1.nomeCompleto = 'Luiz Arroz Ferreira'
console.log(p1.nomeCompleto);