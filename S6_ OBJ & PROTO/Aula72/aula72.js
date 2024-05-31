// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value!');
                return
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 10
console.log(p1.estoque)


function createProduct(name) {
    return {
        get name() {
            return name;
        },

        set name(value) {
            value = value.replace('thing', '') // replace strings
            name = value;
        }
    }
}

const p2 = createProduct('t-shirt');
p2.name = 'other thing'
console.log(p2.name)