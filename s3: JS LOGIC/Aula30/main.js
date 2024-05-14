// const elementH1 = document.querySelector('h1');
// const elementH2 = document.querySelector('h2');

// const data = new Date();

// const year = data.getFullYear();
// const day = data.getDate();
// const month = data.getMonth();
// const min = data.getMinutes();
// const hour = data.getHours();


// const printData = `Dia ${day} do mês ${month} de ${year}`
// const horario = `${hour}:${min}`

// elementH2.textContent = horario
// elementH1.textContent = printData;

const h1 = document.querySelector('h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-br', { dateStyle: 'full', timeStyle: 'short'});
