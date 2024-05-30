/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/ 


const expressao = true && false && true && true;
console.log(expressao);

const expressaoOr = true || false || false || false;
console.log(expressaoOr);

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === `${senha}`;
console.log(vaiLogar);

console.log(!true);
console.log(!!true);

