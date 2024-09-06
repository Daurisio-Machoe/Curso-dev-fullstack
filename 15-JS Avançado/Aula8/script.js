

/*

Local Storage => Armazenamento Local)

*/

//..Metodo para armazenar..//

const tarefas = [
    {tarefa: 'estudar JS'},
    {tarefa: 'estudar node.JS'},
    {tarefa: 'estudar react.JS'},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefa', tarefasJson)

const valor = localStorage.getItem('tarefa')

console.log(valor)