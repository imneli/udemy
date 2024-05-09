//nao utilize var, utilize const

const nome = 'joao';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultado * 3;
console.log(resultado);
console.log(resultadoDuplicado);


function arroz123() {
    const nome = 'Luiz Otávio';
    const sobrenome = 'Miranda';
    const idade = 30;
    const peso = 84;
    const alturaEmM = 1.80;
    let imc = peso / (alturaEmM * alturaEmM)
    console.log(`${nome, sobrenome, idade, peso, alturaEmM, imc}`)
}

/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

function asd() {

    const name = 'Luiz Otávio';
    const sobrenome = 'Miranda';
    const idade = 30;
    const peso = 84;
    const alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)
    let indiceMassaCorporal; // peso / (altura * altura)
    let anoNascimento;
    
    indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
    anoNascimento = 2019 - idade;
    
    // template strings
    
    console.log(`${name} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
    console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
    console.log(`${name} nasceu em ${anoNascimento}.`);

}
