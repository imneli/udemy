// let a = 'A'; // b
// let b = 'B'; // c
// let c = 'C'; // a


// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c);
//               0, 1, 2, 3, 4, 5, 6, 7, 8

// ...rest, ...spread
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, tres, cinco] = numeros;
console.log(um, tres, cinco)
// console.log(resto)

const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//                  0        1        2
//                0 1 2    0 1 2    0 1 2
const array2 = [ [1,2,3], [4,5,6], [7,8,9] ];

const [,[ ,, seis]] = array2; // printa 6 no console

console.log(seis)


console.log([array2[1][2]]);



