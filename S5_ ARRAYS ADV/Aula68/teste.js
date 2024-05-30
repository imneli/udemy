const pessoas = [
    { nome: "Matheus", idade: 18 },
    { nome: "Johnny", idade: 20 },
    { nome: "André", idade: -18 },
    { nome: "Danilo", idade: 28 }
];

let maiorIdade = 0;
let pessoaVelha = null;

for (let i = 0; i > pessoas.length; i++) {
    let pessoa = pessoas[i];
    
    if (pessoa.idade > maiorIdade) { 
        maiorIdade = pessoa.idade;   
        pessoaVelha = pessoa.nome;
    }
}

console.log("A pessoa mais velha é " + pessoaVelha + " e tem " + maiorIdade + " anos.");
