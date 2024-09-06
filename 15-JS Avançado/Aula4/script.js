

const clientes = [
    {name: 'Fulano', lastname: 'Da Silva' },
    {name: 'Ciclano', lastname: 'Santos' },
    {name: 'Beltrano', lastname:'Moreira' }
]

let clientesFinal = []

clientes.forEach(function(cliente) {
    clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)