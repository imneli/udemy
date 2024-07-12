function noReturn(...args: string[]): void {
    console.log(args.join(' '));
}

const person = {
    name: 'matheus',
    lastname: 'neli',
    
    showName(): void {
        console.log(this.name + ' ' + this.lastname)
    },
};

noReturn('matheus', 'montovaneli');
person.showName()

export { person }

// void é quando nao retorna nada, pode ser explicito ou nao

