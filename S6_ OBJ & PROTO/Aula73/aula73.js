// const product = { name: 'mug', price: 18};
// const otherThing = { ...product, material: 'porcelain' };


// const mug = Object.assign({}, otherThing)

// otherThing.name = 'matheus';
// otherThing.price = 20;
// Object.defineProperty('name', {
//     writable: false,
//     configurable: false,
//     value: 'other thing...'
// });
// console.log(Object.getOwnPropertyDescriptors(product, 'name'))

const product2 = { name: 'mug', price: 18, material: 'porcelain'};

for (let valor of Object.entries(product2)) {
    console.log(valor[0], valor[1])
}
