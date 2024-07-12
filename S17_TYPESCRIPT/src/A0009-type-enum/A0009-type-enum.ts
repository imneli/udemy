enum Colors {
    RED,
    BLUE,
    YELLOW
}

// console.log(Colors[2])

function escolhaCor(cor: Colors): void {
    console.log(Colors[cor])
}

escolhaCor(0) // red