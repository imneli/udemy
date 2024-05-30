function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Matheus', 'Rivera');
const p2 = {
    nome: 'matheus',
    sobrenome: 'montovaneli'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá')
const resto = fala('mundo');
console.log(resto)

function duplica(n) {
    return n * 2
}

function triplica(n) {
    return n * 3
}

function quadriplica(n) {
    return n * 4
}

console.log(duplica(2), triplica(3), quadriplica(4))


function criaMultiplicador(multiplicador) {
    function multiplicacao(n) {
        return n * multiplicador;
    }

    return multiplicacao
}