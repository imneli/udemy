// function hoisting

falaOi();



function falaOi() {
    console.log('oie');
    
}

// first class obj (objetos de primeira classe)
// function expression

const souDado = function () {
    console.log('sou um dado.');
}

souDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souDado)

// arrow func

const arrowFunc = (hello) => {
    console.log(hello)
};

arrowFunc('sou uma arrow function')

setInterval(function () {

}, 1000);

const obj = {
    falar: function() {
        console.log('Estou falando')
    }
}

obj.falar();