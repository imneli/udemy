const texto = `
João é um rapaz muito talentoso. Desde criança, João sempre demonstrou interesse por música e arte. Todos os dias, João praticava seu violão com dedicação. Seus amigos sempre diziam: "João, você tem um talento incrível!" Não é surpresa que João tenha se tornado um músico reconhecido na cidade. Jooooão
`

const texto2 = `
Maria, hoje sua esposa nao sei oq la que seila oq regex eh legal
`

const arquivos = [
    'atencao.jpg',
    'foto.jpeg',
    'meu gatinho.jpg',
    'meu gatinho.JPEG',
    'marido.png',
    'lista de compras.txt'
]

// <.+>.+    <\/.+>
const html = '<p>ola mundo</p> <p>ola dnv</p> <div>sou uma div</div>'

module.exports = {
    texto,
    texto2,
    arquivos,
    html
}