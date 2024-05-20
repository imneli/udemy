// function funcao() {
//     let total = 0
//     for (let argument of arguments) {
//         total += argument
//     }

//     console.log(total)
//     console.log(arguments)
// }

// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9) // arguments


// function funct(a,b,c,d,e,f) {
//     console.log(a,b,c,d,e,f);
// }

// funct(1,2,3)

// function abc(a,b) {
//     console.log(a + b);
// }

// abc(2);

// function assumir(a,b = 2, c = 4) {
//     console.log(a + b + c);

// }

// assumir(2, undefined, 20)

// function dados({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// dados({nome: 'Matheus', sobrenome: 'Montovaneli', idade: '18'});


function conta(operador, acumulador, ...nums) {
    for (let numero of nums) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 0, 1,2,3,11,23)

const numeros = (...args) => {
    console.log(args)
};

conta('+', 1,2,3,3,4)

