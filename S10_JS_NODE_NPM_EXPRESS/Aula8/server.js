const express = require('express');
const app = express();

// /profiles/12345?campanha=googleads&nome_campanha=sla
// /profiles/12345?
// campanha=googleads & 
// nome_campanha=sla
//                query strings

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="name">
        </form>
        `);

});

app.use(express.urlencoded( { extended: true } ));

app.get('/testes/:idUsers?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookProfile);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Obrigado pelo formulário! O que você me enviou foi ${req.body.name}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta: 3000')
}) 