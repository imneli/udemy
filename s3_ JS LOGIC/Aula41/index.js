function maiorNum (num1, num2) {
    if (num1 > num2) { return num1; } 
    return num2;
}

const maior = maiorNum(1, 2);


console.log(maior);

function maiorNum (num1, num2) {
   return num1 > num2 ? num1 : num2;
}

console.log(maior)

const max2 = (x, y) => {
    return x > y ? x : y;
}

console.log(max2(10, 20))