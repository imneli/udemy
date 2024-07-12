/* eslint-disable */
let nome: string = 'matheus';
let idade: number = 18 // 10, 1.5, -5, 0xf00d
let adulto: boolean = true // true or false
let simbolo: symbol = Symbol('qualquer-symbol')
let big: bigint = 10n //bigint

// arrays

let numberArrays: Array<number> = [1, 2, 3]
let numberArrays2: number[] = [1, 2, 3]
let stringArrays: Array<string> = ['a', 'b', 'c']
let stringArrays2: string[] = ['a', 'b', 'c']

// objects

let person: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'matheus',
    idade: 18,
    adulto: true
}

console.log(person)

// function

function sum(x: number, y: number): number {
    return x + y
}

const result = sum(2,1)
const sum2: (x: number, y: number) => number = (x, y) => x + y
console.log(result)