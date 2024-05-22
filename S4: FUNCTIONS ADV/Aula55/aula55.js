// IIFE -> Immediately invoked function expression

function anyThing() {
    console.log(123124);
}

anyThing();

(function(age, weight, height) {
    const sobrenome = 'Montovaneli';
    function createName(name) {
        return name + ' ' + sobrenome;
    }

    function sayName() {
        console.log(createName('Matheus'));
    }

    sayName()
    console.log(age, weight, height)
})(18, 80, 1.70);

const nome = 'any thing';
console.log(nome)