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
            return;
        }, time);
    });
}


async function execute() {
    try {
        const fase1 = await waitPlss('fase 1', alt());
        console.log(fase1)
        const fase2 = await waitPlss('fase 2', alt());
        console.log(fase2)
        const fase3 = await waitPlss('fase 3', alt());
        console.log(fase3)
        console.log('terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
}

execute()

const teste = waitPlss('thing', 5000);
console.log(teste);


// <pending> === await miss
// async permite o uso do await