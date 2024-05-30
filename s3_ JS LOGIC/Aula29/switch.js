function getDayWeekText (dayWeek) {
    let dayWeekText;


    switch (dayWeek) {
        case 0:
            dayWeekText = 'Domingo';
            return dayWeekText;
        case 1:
            dayWeekText = 'segunda';
            return dayWeekText;
        case 2:
            dayWeekText = 'Terça';
            return dayWeekText;
        case 3:
            dayWeekText = 'Quarta';
            return dayWeekText;
        case 4:
            dayWeekText = 'Quinta';
            return dayWeekText;
        case 5:
            dayWeekText = 'Sexta';
            return dayWeekText;
        case 6:
            dayWeekText = 'Sábado';
            return dayWeekText;
        default:
            dayWeekText = 'Dia invalido'
    }

    return dayWeekText;
}

const data = new Date();
const dayWeek = data.getDay();
const dayWeekText = getDayWeekText(dayWeek);

console.log(dayWeek, dayWeekText)




// if (dayWeek === 0) {
//     dayWeekText = 'Domingo';
// } else if (dayWeek === 1) {
//     dayWeekText = 'Segunda';
// } else if (dayWeek === 2) {
//     dayWeekText = 'Terça';
// } else if (dayWeek === 3) {
//     dayWeekText = 'Quarta';
// } else if (dayWeek === 4) {
//     dayWeekText = 'Quinta';
// } else if (dayWeek === 5) {
//     dayWeekText = 'Sexta';
// } else if (dayWeek === 6) {
//     dayWeekText = 'Sabado';
// } else {
//     dayWeekText = '' 
// }

