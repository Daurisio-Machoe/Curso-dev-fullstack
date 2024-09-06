//SELECTOR BY ID
document.querySelector('#titulo').innerHTML = 'Exemplo' 

//SELECTOR BY TAG
document.querySelector('a').innerHTML = 'Testando ancora'

// innerHTML e innerText

document.querySelector('.box').innerHTML = '<b>Testando</b>'

//Percorendo mais de uma tag

let ancora = document.querySelectorAll('a')

ancora.forEach(function(elemento){
    elemento.innerHTML = 'teste' 
})

//Selecionando mais de uma class

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(caixa, index = 1){
    index++

    caixa.innerHTML = 'caixa' + ' ' +index
})