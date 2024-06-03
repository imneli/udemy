function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo Insuficiente: ${this.saldo.toFixed(2)}`)
        return;
    } 

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag./c ${this.agencia} / ${this.conta}` +  
              ` | Saldo: R$ ${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.construsctor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: ${this.saldo.toFixed(2)}`)
        return;
    } 

    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.construsctor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(90);

const cp = new ContaPoupanca(12, 22, 0)
cp.depositar(100)
cp.sacar(100)
const c1 = new Conta(11123, 22, 10)


