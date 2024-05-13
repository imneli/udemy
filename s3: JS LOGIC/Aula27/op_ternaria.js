const pontuacoUsusario = 999;

// if (pontuacoUsusario >= 1000) {
//     console.log('Usuario VIP');
// } else {
//     console.log('usuario normal.');
// }


const nivelUsuario = pontuacoUsusario >= 1000 ? 'Usuario Vip' : 'Usuario Normal'
// a operacao ternaria faz a verificação do 'else e if' porem usando operadores ternarios
// no caso sendo o ? e o :

// sendo uma opção mais curta de chegar no mesmo objetivo 

// se for verdadeira o ? vai verificar e se for else o : nega e mostra o outro print com o valor de falso


const corUsuario = null; // caso tenha uma cor setada ele vai printar no console a cor escolhida
const corPadrao = corUsuario || 'black'

console.log(nivelUsuario, corPadrao)