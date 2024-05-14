const verdadeira = true;

let nome = 'Matheus'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'otavio'; // criando outra variavel com outro nome, porem no bloco
    var nome2 = 'rogerio'  // redeclarando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'other'
        var nome2 = 'outra coisa 2'
        console.log('OK', nome, nome2)
    }
}

console.log(nome, nome2)


function printOi() {
    var sobrenome = 'rivera'
    console.log(nome);
}

console.log(sobrenome) // n identifica
printOi();

// let = escopo de bloco { ... bloco }

// var = escopo de função