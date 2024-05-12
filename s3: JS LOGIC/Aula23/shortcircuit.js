/*
&& -> false && true -> false (o valor)
|| -> false || true -> true ()

FALSY
false
0
'' "" ``
null / undefined
NaN
*/
const corUsuario = null; // vermelho / console = vermelho ! preto
const corPadrao = corUsuario || 'Preto';

// console.log('Luiz otavio' && true && NaN);
// console.log('Luiz' && 'Maria');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = true;
if (vaiExecutar === true) {
    console.log(vaiExecutar && falaOi());
} else {
    console.log('ERRO! FALSE');
}

