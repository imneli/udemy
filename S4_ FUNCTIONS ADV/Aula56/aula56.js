// factory function (função fabrica)

// Constructor function (função construtora)

function createPerson(name, subname, hei, wei) {
    return {
        name, 
        subname,
        get completeName() {
            return `${this.name} ${this.subname}`
        },

        //setter

        set completeName(valor) {
            valor = valor.split(' ');
            this.name = valor.shift(' ');
            this.subname = valor.join(' ');
            console.log(valor);
        },

        say: function(subject) {
            return `${this.name} is ${subject}`;
        },
        height: hei,
        weight: wei,
        get imc() {
            const indice = this.weight / (this.height ** 2);
            return indice.toFixed(2); // 2 casas decimais
        }
        
    };
}

// getter === get para obter apenas o valor e n chamar como função

const p1 =  createPerson('matheus', 'montovaneli', 1.8, 80);
const p2 =  createPerson('junior', 'cria dms zee', 1.9, 100);
const p3 =  createPerson('joao', 'safado', 1.6, 60);
p1.completeName = 'manu do caps'
console.log(p1.completeName);
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);










// console.log(p2.say('talking about js')); // o this vai ser quem chamar o obj

// o this vai se referir a pessoa que chamou ao executar, então ele sempre irá retornar
// o this vai se referir ao p1 caso chamado no p1, e se chamado no p2 seria referido ao p2