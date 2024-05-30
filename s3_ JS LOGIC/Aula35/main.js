const elements = [
    {tag: 'p', text: 'texto 123123123123'},
    {tag: 'div', text: 'frase 2'},
    {tag: 'footer', text: 'frase 3'},
    {tag: 'section', text: 'frase 4'}
];

const container  = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    const { tag, texto } = elements[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.innerHTML = texto;

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada);
}

container.appendChild(div);


// console.log(elements[0])