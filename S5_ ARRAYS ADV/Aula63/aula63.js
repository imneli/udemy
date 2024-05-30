//                -5      -4        -3        -2         -1

const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];


const removidos = nomes.splice(-4 , Number.MAX_VALUE); // (indice, quantos deletar, elem1, elem2...)
console.log(nomes, removidos);

const removidos2 = nomes.splice(0, 1)

console.log(Number.MAX_VALUE)
console.log(removidos2)