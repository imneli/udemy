let x = 10
x = 0b1010
const y = 10
let a = 100 as const
// a = 120

export default 1;

const person = {
    name: 'matheus' as const, // nao deixa alterar
    lastname: 'neli',
    age: 18
}

function setColor(color: 'red' | 'yellow' | 'blue'): string {
    return color
}

console.log(setColor('red'))
