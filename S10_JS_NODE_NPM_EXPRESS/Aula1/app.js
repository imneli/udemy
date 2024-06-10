// const { nome, sobrenome, sayName } = require('./mod1')
// console.log(nome, sobrenome);
// console.log(sayName());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))


console.log(Pessoa)

const p1 = new Pessoa('sophia');
console.log(p1)


