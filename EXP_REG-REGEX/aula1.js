// g - global (encontra todas as ocorrencias)
// i - insensitive

const { texto } = require('./base')
const { texto2 } = require('./base')

const regExp = /João/gi;

const regExp2 = /(Maria|André)(, hoje sua esposa)/i; // | é basicamente o || porem pra string
const found = regExp2.exec(texto2)

if (found) {
    console.log(found[0], `<-- essa eh o ind[0]`) // grupos
    console.log(found[1], `<-- essa eh o ind[1]`) // grupos
    console.log(found[2], `<-- essa eh o ind[2]`) // grupos
}

console.log(regExp.exec(texto))
// console.log(regExp.exec(texto).index)