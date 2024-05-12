function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')

        // verificar se o peso é um número
        if (!isNaN(peso.value) && !isNaN(altura.value)) {
            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });

            resultado.innerHTML += `<p>${nome.value} | ${sobrenome.value} | ${peso.value} | ${altura.value} <br></p>`;
        } else {
            resultado.innerHTML = `<p>Digite um número para o peso/altura!</p>`;
            setTimeout(() => {
                resultado.innerHTML = ``;
              }, "2000");

        }

        console.log(pessoas);
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
