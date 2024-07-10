// typescript eh um superset para js com tipagem estatica, novos recursos e que compila p js puro

// o que é um super set? 

function multiplyNumbers(x: number, y: number) {
    return x * y
}

const result = multiplyNumbers(10, 2);
console.log(result)

interface haveName {
    name: string,
}

interface haveLastname {
    lastname: string,
}

class Student implements haveName, haveLastname {
    constructor(
        public readonly name: string,
        public readonly lastname: string,
        private readonly age: number, // só pode ser acessado dentro da class

    ) {} // readonly só podem ser criados no constructor e nao podem ser alterados
}

const student = new Student('matheus', 'montovaneli', 18)
console.log(student)
