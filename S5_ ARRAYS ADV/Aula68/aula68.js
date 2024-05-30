const num = [1,2,3,4,5,6,7,8,9,10,12,14,16];
const numPar = num.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2
}).reduce(function(ac, valor) {
    return ac + valor;
});

console.log(numPar)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);