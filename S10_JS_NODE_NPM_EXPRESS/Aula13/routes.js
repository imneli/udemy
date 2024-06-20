const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

function myMiddleware(req, res, next) {
    req.session = { nome: 'matheus', sobrenome: 'neli' }
    console.log();
    console.log('passei no middleware');
    console.log();
    next();
}

route.get('/', myMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost)

route.get('/contato', contatoController.paginaInicial)

module.exports = route;