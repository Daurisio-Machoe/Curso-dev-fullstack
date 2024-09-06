

let clientes = [
    {
        nome: 'Daurisio',
        idade: 20,
        linguagens: ['HTML', 'CSS', 'JS',]
    },
    {
        nome: 'Fulano',
        idade: 25,
        linguagens: ['PHP', 'C#', 'node JS',]
    },
    {
        nome: 'Beltrano',
        idade: 27,
        linguagens: ['Phyton', 'C++', 'C+',]
    }
]

let HtmlClientes = ''

for(let cliente of clientes) {

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens){
        listaLinguagens += `
            <li>${linguagem}</li>

        `
    }

    HtmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
        </li>
         <li>
            <b>Idade:</b> ${cliente.idade} <br>
        </li>
         <ul>
            ${listaLinguagens}
        </ul>
    `
}

document.querySelector('#listaClientes').innerHTML = HtmlClientes