let botao = document.querySelector('.botao')


/* .........................
botao.onclick = function() {
    console.log ('Mensagem (1)')
}

botao.onclick = function() {
    console.log ('Mensagem (2)')
}
............................*/

/* addEventListener

botao.addEventListener('click', function(){
    console.log('Mensagem (3)')
})

botao.addEventListener('click', function(){
    console.log('Mensagem (4)')
})
*/
let gata = true

function clicado() {

    if(gata === false) {
        gata = true
        botao.innerText = 'me clique novamente'
    } else if(gata === true) {
        gata = false
        botao.innerText = 'Ok! ja chega'

        botao.remove.addEventListener('click', clicado)
    }
   
}

botao.addEventListener('click', clicado)