// let i = 0;

// const nome = 'Matheus';

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

// console.log('segue a vida ai tiozao..')

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);

}

const min = 1;
const max = 50;
let rand = random(1, 50);


while (rand !== 10) {
    rand = random(min, max); // chamando funcao
    console.log(rand);
}

console.log('##############################')

do {
    rand = random(min, max); // chamando funcao
    console.log(rand);
} while (rand !== 10);
