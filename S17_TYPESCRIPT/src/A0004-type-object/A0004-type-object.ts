const objectA: {
    keyA: string // readonly (nao pode alterar valor)
    keyB: string
    keyC?: string
    [key: string]: unknown
    
} = {
    keyA: 'Valor A',
    keyB: 'Valor B'
}

objectA.keyA = 'other valor'
objectA.keyC = 'seloco dog'
objectA.keyD = 'caraio dog'

console.log(objectA)
