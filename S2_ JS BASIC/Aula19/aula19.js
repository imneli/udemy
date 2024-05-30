// Primitivos - String, Number, Boolean, Undefined,
// null (bigint, symbol) - Valores copiados


// Referencia (mutavel) - Array, Object, Function
// Valores passados por referencia


/*

let a = 'A';
let b = a; // copy
console.log(a,b);

a = 'outra coisa'

console.log(a,b)

*/


let a = [1,2,3];
let b = a; // [...a] - mantem valor inicial de (A)
let c = b;
console.log(a,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b, a);

a.push('Matheus');
console.log(c);

const x = {
    nome: 'Matheus',
    sobrenome: 'Neli'
};
const y = {...x};

x.nome = 'João';
console.log(x)
console.log(y)

