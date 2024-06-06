function alt(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function waitPlss(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

waitPlss('word 1', alt(1, 3))
    .then(response => { 
        console.log(response) // resolve === resolve code
        return waitPlss('word 2', alt(1, 3)) 
    })
    .then(response => { 
        console.log(response)
        return waitPlss('word 3', alt(1, 3))
    })
    .then(response => {
        console.log(response)
    })
    .then(() => {
        console.log('the last');
    })
    .then()
    .catch( e => {
        console.log('Error:', e)
    }); // reject === error


console.log('executed before any promise');


