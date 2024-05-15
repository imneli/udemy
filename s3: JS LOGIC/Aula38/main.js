const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
console.log(backgroundColorBody)

for (let i of ps) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = '#f8f8f8';
}