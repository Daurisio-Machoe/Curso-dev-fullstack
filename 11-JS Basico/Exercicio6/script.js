
let listaAtores = [
    {
        nome: 'Keano Reevers',
        personagem: 'Neo',
        filme: 'The Matrix'
    },
    {
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars Episodio IV-VI'
    },
    {
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - O Inicio '
    }
]

let listas = ''

for(let ator of listaAtores) {

    
    listas += `
        <div>
            <h1>${ator.nome} </h1> <br>
            <span>Interpreta um personagem ${ator.personagem} no filme ${ator.filme} </span>
             <br>
        </div>       
    `

}

document.querySelector('#principal').innerHTML = listas