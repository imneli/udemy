function alt(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function waitPlss(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return
        } 
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei pela promise');
        }, time);
    });
}

const promises = [
    'first value',
    waitPlss('Promise 1', 3000),
    waitPlss('Promise 2', 500),
    waitPlss('Promise 3', 1000),
    'other value'
];

Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((e) => {
        console.log('ERRO:', e)
    });