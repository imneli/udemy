export function multiplicateArgs(...args: Array<number>) {
    return args.reduce((ac, valor) => ac * valor, 1)
}

export function concatenaStrings(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor)
}

export function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase());
}

const resultado = multiplicateArgs(1, 2, 3)
const concatenacao = concatenaStrings('matheus', 'cjave')
const upper = toUpperCase('a', 'b', 'c')

console.log(resultado)
console.log(concatenacao)
console.log(upper)