// const threeHours = 60 * 60 * 3 * 1000;
// const oneDay = 60 * 60 * 24 * 1000;
// const data = new Date(0 + threeHours + oneDay); // 01/01/1970 timestamp unix
// console.log(data.toString());

// const data = new Date(2019, 3, 20, 15, 14, 27); //0 - 11

// const data = new Date('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth() + 1); // mes começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString());

function leftZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const day = leftZero(data.getDate());
    const month = leftZero(data.getMonth() + 1);
    const year = leftZero(data.getFullYear());
    const hour = leftZero(data.getHours());
    const min = leftZero(data.getMinutes());
    const sec = leftZero(data.getSeconds());

    return `${day}/${month}/${year} ${hour}:${min}:${sec}`
}

const data = new Date();
const dataBrazil = formataData(data);
console.log(dataBrazil)