const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flas: 'w' })
};

