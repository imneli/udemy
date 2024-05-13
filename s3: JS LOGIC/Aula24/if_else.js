const hour = 25;
if (hour >= 0 && hour <= 11) {
    console.log('Good Day!');
} else if (hour >= 12 && hour <= 17) {
    console.log('Good Morning');
} else if (hour >= 18 && hour <= 23) {
    console.log('Good Night!');
} else {
    console.log('enter a valid response...')
}

