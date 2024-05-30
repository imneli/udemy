// const numeros = [1,23,4,3,21,123,312,34,5,2,1,2,3,5,1,4,6,8,4,798,41]
// const numEmDobro = numeros.map(valor => valor * 2);

// console.log(numEmDobro)

const pessoas = [
    { nome: 'Matheus', idade: 18 },
    { nome: 'Eduardo', idade: 20 },
    { nome: 'Paulo', idade: 19 },
    { nome: 'Kauan', idade: 17 },
    { nome: 'Rosana', idade: 24 },
    { nome: 'Leticia', idade: 27 },
    { nome: 'Wallace', idade: 48 },
    { nome: 'Miguel', idade: 80 }
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }) );

const withIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj = indice;
    return newObj;
});

console.log(withIds)
console.log(nomes, idades)