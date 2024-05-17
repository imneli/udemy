const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of arrayNum) { // for (let i = 0; arrayNum.length; i++) {
    
    if (i === 2 || i === 5) {
        console.log(`pulei ${i}`);
        continue; // pula para prox interação do laço
    }

    if (i === 7) {
        console.log(`encontrei o ${i}, saindo`);
        break;
    }

    console.log(i);
}