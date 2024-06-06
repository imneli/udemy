fetch('pagina3.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('agora fudeuuu');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.warn(e));
        