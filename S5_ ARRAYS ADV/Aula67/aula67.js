const numeros = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60]
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador += valor
    return acumulador;
});

console.log(total)












const pessoas = [
    { nome: 'Matheus', idade: 18 },
    { nome: 'Eduardo', idade: 20 },
    { nome: 'Paulo', idade: 19 },
    { nome: 'Kauan', idade: 17 },
    { nome: 'Rosana', idade: 24 },
    { nome: 'Leticia', idade: 27 },
    { nome: 'Wallace', idade: 48 },
    { nome: 'Miguel', idade: 80 },
];


const moreAge = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(moreAge);