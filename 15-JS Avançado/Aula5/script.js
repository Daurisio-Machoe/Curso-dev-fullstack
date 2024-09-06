

const clientes = [
    {name: 'Fulano', lastname: 'Da Silva', age: 14 },
    {name: 'Ciclano', lastname: 'Santos', age: 18 },
    {name: 'Beltrano', lastname:'Moreira', age: 20 }
]


const clientesMaiores = clientes.filter(cliente => {
    let retorno = false

    if(cliente.age >= 18) {
        retorno = true
    }

    return retorno
}
)

console.log(clientesMaiores)