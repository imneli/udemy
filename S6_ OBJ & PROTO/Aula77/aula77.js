// 904.661.780-77


/* 


11 - (237 % 11) = 5 (primeiro digito)
Se o numero foir maior q 9, considerado 0.
*/

let cpf = '966.327.810-20';
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo);

cpfArray = Array.from(cpfLimpo);

console.log();