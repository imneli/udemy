// try {
//     // é executada qnd n há erros
//     console.log('abri um arquivo');
//     console.log('manipulei o arquivo e gerei erro');
//     console.log('fechei o arquivo!');

//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro!');
//     }
// } catch (e) {
//     // é executada quando há erros
//     console.log('Tratando erro!');
// } finally {
//     // sempre
//     console.log('FINALLY: SEMPRE SOU EXECUTADO');
// }

function returnHour (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour1: false
    });
}

try {
    const hora = returnHour(12);
    console.log(hora)
} catch (e) {
    //tratar erro
    // console.log(e)
} finally {
    console.log('have a good day')
}



