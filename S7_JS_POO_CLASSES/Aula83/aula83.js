class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) { console.log(this.nome + ' já ligado'); return; }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) { console.log(this.nome + ' já desligado'); return; }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // chamar constructor da class pai
        this.cor = cor;
        this.modelo = modelo;

    }
};

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, modelo, temWifi) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.temWifi = temWifi;
    }
}

const s1 = new Smartphone('samsung', 'black', 's23')
const t1 = new Tablet('samsung', 'white', 'tab 9', true )
s1.ligar();
console.log(s1)
console.log(t1)