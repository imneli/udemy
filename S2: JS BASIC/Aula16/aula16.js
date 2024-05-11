function array1() {
    const alunos = ['Luiz', 'Maria', 'João'];
    // console.log(alunos[0]) == printa Luiz.

    alunos[alunos.length] = 'Fabio' // add no fim da lista

    // alunos.push('Luiza');
    // alunos.push('Fabiana');


    console.log(alunos);
    // alunos[0] = 'Eduardo';
    // alunos[3] = 'Matheus'; // se o indice nao existe ele cria um.

    // alunos.unshift('Luiza'); // add no começo da lista

    const removido = alunos.pop(); //remove elemento //shift remove o primeiro
    console.log(removido);
    console.log(alunos);

    delete alunos[1];
    console.log(alunos)

}

const question = prompt('Digite o indice que deseja remover da lista: ')

students = ['Aluno1', // 0
            'Aluno2', // 1
            'Aluno3', // 2
            'Aluno4'] // 3

students.pop(prompt);





