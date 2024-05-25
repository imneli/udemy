const nomes = ['eduardo', 'maria', 'joao', 'rosana', 'wallace'];
nomes[2] = 'joao';
// delete nomes[2]; // remover elemento do array mas nao mudar indices

// const removido = novo.pop() // ultimo elemento do array
// const removido2 = novo.shift()
const novo = nomes.slice(1,3)
nomes.push('andre') //add elementos no array
console.log(nomes)
console.log(novo)

const nomeCompleto = 'Matheus Rivera Montovaneli'
const nomesSplit= nomeCompleto.split(' ')
console.log(nomesSplit)

const arrayChave = ['matheus', 'rivera', 'montovaneli'];
const unirArray = arrayChave.join(' ');
console.log(unirArray);