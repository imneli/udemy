exports.paginaInicial = (req, res) => {
        res.render(`index`);
        console.log(`'page inicial' olha oq tem na req.session.nome ${req.session.nome}`)
}

exports.trataPost = (req, res, next) => {
    res.send('ei sou sua nova rota de post!')
}