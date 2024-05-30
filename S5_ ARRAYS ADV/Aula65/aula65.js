// filter, map, reduce

// const numeros = [1,2,3,4,5,6,7,78,8,2,1,23,4,45,5,1,2];

// const numerosFiltrados = numeros.filter(valor => valor > 50);
// console.log(numerosFiltrados)


// function callbackFilter(valor) {
//     return  valor > 10;

// }

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

const pessoasComNomeGrande = pessoas.filter(function(obj) {
    return obj.nome.length >= 7;
    // console.log(obj.nome, obj.idade);
});

console.log(pessoasComNomeGrande)


const pessoas2 = [
    { nome: 'Matheus', idade: 18 },
    { nome: 'Eduardo', idade: 20 },
    { nome: 'Paulo', idade: 19 },
    { nome: 'Kauan', idade: 17 },
    { nome: 'Rosana', idade: 24 },
    { nome: 'Leticia', idade: 27 },
    { nome: 'Wallace', idade: 48 },
    { nome: 'Miguel', idade: 80 }
];

const pessoasVelhas = pessoas2.filter(function(obj) {
    return obj.idade >= 50;
    // console.log(obj.nome, obj.idade);
});

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));


console.log(nomeTerminaComA)

console.log(pessoasVelhas)

