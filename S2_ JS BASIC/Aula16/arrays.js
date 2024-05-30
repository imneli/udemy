students = ['Aluno1', // 0
            'Aluno2', // 1
            'Aluno3', // 2
            'Aluno4'] // 3


const question = prompt('Digite o indice que deseja remover da lista: ')

const lista = document.getElementById('arrays')

lista.innerHTML += `<p>Sua Array é ${students.splice(question)}</p> `




