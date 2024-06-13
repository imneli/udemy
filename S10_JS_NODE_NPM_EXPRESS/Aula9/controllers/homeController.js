exports.paginaInicial = (req, res) => {
        res.send(`
            <form action="/" method="POST">
            Nome do cliente: <input type="text" name="name">
            </form>
            `);
}

exports.trataPost = (req, res) => {
    res.send('ei sou sua nova rota de post!')
}