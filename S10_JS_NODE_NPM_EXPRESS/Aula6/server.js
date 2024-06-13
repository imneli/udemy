const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a pagina
// http://meusite.com/contato <- GET -> Entregue a pagina contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="name">
        </form>
        `);

});

app.post('/', (req, res) => {
    res.send(`Obrigado pelo formulário!`);
})

app.get('/contato', (req, res) => {
    res.send('pagina contato');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta: 3000')
}) // porta