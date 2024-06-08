const nome = 'matheus';
const sobrenome = 'rivera';
const idade = 18;

function soma(x, y) {
    return x + y;
}

export { nome, sobrenome, idade, soma };
export { nome as default }

// da pra declarar o export antes do const (export const nome = 'matheus';)