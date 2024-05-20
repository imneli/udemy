const timerCont = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let secondsTime = 0;
let timer;

function getTimeForSeconds(secs) {
    let data = new Date(secs * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'

    });
};

function startTimer() {
    timer = setInterval(function() {
        secondsTime++;
        timerCont.innerHTML = getTimeForSeconds(secondsTime);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const element = e.target;
    console.log(element)

    if (element.classList.contains('zerar')) {
        console.log('Você clicou em zerar!')
    }
});

iniciar.addEventListener('click', function(event) {
    timerCont.classList.remove('pause');
    clearInterval(timer);
    startTimer()
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    timerCont.classList.add('pause');
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    secondsTime = 0;
    timerCont.innerHTML = '00:00:00'
});






