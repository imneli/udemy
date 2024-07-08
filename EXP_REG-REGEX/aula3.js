// quantifiers

const { texto } = require('./base')
const { arquivos } = require('./base')

// * (opcionais)
// + (obrigatorio) 1 ou n
// ? (opcionais) 0 ou 1
// \ (caractere de escape)
// {n,m} min, max

// console.log(texto)
// const regExp1 = /Jo+ão/gi
// console.log(texto.match(regExp1))

const regExp2 = /\.jpe?g/

for (const arquivo of arquivos) {
    const valid = arquivo.match(regExp2)

    if(!valid) continue;

    console.log(arquivo, arquivo.match(regExp2))
}

