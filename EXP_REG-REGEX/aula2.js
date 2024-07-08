// string match e replace

// g = uma ou mais ocorrencias (global)

const { texto } = require('./base')

const regExp = /João|Maria/gi

console.log(texto)
console.log(texto.match(regExp))
console.log(texto.replace(/João/g, '"$1"'))

console.log(texto.replace(/João/gi, function(input) {
    return input.toUpperCase() + ' other thing'
}))
