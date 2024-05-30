function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // mostra a chave
        value: stock, // valor
        writable: true, // pode alterar
        configurable: false // configuravel
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true, // mostra a chave
            value: name, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
        price: {
            enumerable: true, // mostra a chave
            value: price, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
    });

}



const p1 = new Product('T-shirt', 20, 3);

p1.stock = 10
console.log(p1)
console.log(Object.keys(p1))

for (let chave in p1) {
    console.log(chave)
}