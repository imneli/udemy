exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario)
    req.flash('info', 'olá mundo!');
    req.flash('error', req.flash('success'), req.flash('info'));
    req.flash('success', 'blaaaaaaaa');
    req.session.usuario = { nome: 'matheus', logado: true }
    res.render(`index`);
    return
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
    return;
}