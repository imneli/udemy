function Pessoa(name, subname) {
    this.name = name;
    this.subname = subname;
    this.completeName = () => 'ORIGINAL' + this.name + ' ' + this.subname;
}

//instancia

Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.completeName = function() {
return this.name + ' ' + this.subname;
};

const p1 = new Pessoa('Matheus', 'O')
const p2 = new Pessoa('Matheus', 'A')

console.dir(p1)
console.dir(p2)