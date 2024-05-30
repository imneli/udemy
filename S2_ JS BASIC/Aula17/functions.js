function saudacao(nome) {
    console.log(`Bom Dia! ${nome}`);
}

// saudacao('Matheus'); // args
// saudacao('Maria');


function soma(x, y) {

    const resultado = x + y;
    return resultado;

}

const resultado = soma('Matheus', ' Rivera')
console.log(resultado) // soma as strings definidas
console.log(soma(2, 3)); // soma 2 e 3

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// or 

const arrowFunc = (n) => {
    return n ** 0.5;
};

console.log(arrowFunc(9));

