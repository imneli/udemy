// const objA = {
//     chaveA: 'A',
// };

// const objB = {
//     chaveB: 'B',
// };

// const objC = {
//     chaveB: 'C',
// };

// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objB.chaveA)
// console.log(objC.chaveB)

// Object.getPrototypeOf(objA)


function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.descount = function(percentual) {
    this.price = this.price - (this.price * (percentual / 100))
};

Product.prototype.aumento = function(percentual) {
    this.price = this.price + (this.price * (percentual / 100))
};

const p1 = new Product('t-shirt', 50);

const p2 = {
    name: 'Mug',
    price: 20
}

Object.setPrototypeOf(p2, Product.prototype)

p2.aumento(10) // aplicar aumento de valor

const p3 = Object.create(Product.prototype, {
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40,
    },
    size: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43,
    }
});


p3.aumento(10)
console.log(p3)

p1.descount(10) // aplicar desconto
console.log(p1)
console.log(p2)