type HaveName = { name: string }
type HaveLastName = { lastname: string }
type HaveAge = { age: number }
type Pessoa = HaveName | HaveLastName | HaveAge

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Intersecao = AB & AC & AD

// const person: Pessoa {
//     name: 'matheus',
//     age: 18

// }

// console.log(person)