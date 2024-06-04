const pessoas = [
    { id: 3, nome: 'Otavio'},
    { id: 2, nome: 'Helena'},
    { id: 1, nome: 'Brenda'},
];

const newPersons = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    newPersons.set(id, { ...pessoa });
}

for (const pessoa of newPersons) {
    console.log(pessoa)
}

console.log(newPersons.get(2)); // busca o id

newPersons.delete(2)
console.log(newPersons)