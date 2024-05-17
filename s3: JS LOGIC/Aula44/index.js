function erros() {
    try {
        console.log(naoExisto);
    } catch(err) {
        console.log('naoExisto nao existe.')
        console.log(err);
    }
}



//tratando erros

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('X e Y precisam ser números!');

    }

    return x + y;
}


try {
    console.log(soma(1,2));
    console.log(soma(1,'a'));
} catch(error) {
    console.log('algo amigavel <3')
}
