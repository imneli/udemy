const fizzBuzz = (num) => {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;

}

const num = 3;
console.log(fizzBuzz(num))

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}

