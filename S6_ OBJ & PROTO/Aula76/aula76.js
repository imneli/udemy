// t-shirt, mug

// herança
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

function Product(name, price) {
   this.name = name;
   this.price = price; 
}

const p1 = new Product('t-shirt', 50)

Product.prototype.aumento = function(valor) {
    this.price += valor;
}

Product.prototype.desconto = function(valor) {
    this.price -= valor;
}

function Camiseta(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}

Camiseta.prototype = Object.create(Product.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.price = this.price + (this.price * (percentual / 100))
}

function Mug(name, price, material, stock) {
    Product.call(this, name, price)
    this.material = material;
    this.stock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            stock = valor;
        }
    });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;



const produto = new Product('gen', 113)
const camiseta = new Camiseta('Regata', 30, 'black');
const mug = new Mug('Mug', 30, 'porcelain', 10);
mug.stock = 10


camiseta.aumento(5);

console.log(mug)
console.log(mug.stock)
console.log(produto);
console.log(camiseta);