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

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 


  963.987.321-00

  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const ips = `

Os Ips são:
   0.0.0.0

   192.168.0.25

        10.10.5.12

        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)

   255.255.255.255

`;

module.exports = {
    texto,
    texto2,
    arquivos,
    html,
    alfabeto,
    cpfs,
    ips,
    cpfs2
}

