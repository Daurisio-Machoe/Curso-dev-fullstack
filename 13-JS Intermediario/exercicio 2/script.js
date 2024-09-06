
//... Variables ...//

let principal = document.querySelector('.principal')
let contador = document.querySelector('.contador')
let valorInicial = 0
let subitracao = document.querySelector('.subitracao')
let adicao = document.querySelector('.adicao')
contador.innerText = 0
let intervaloNegativo = ''
let intervaloPosetivo = ''



//... Functions ...//
function subitrair() {
    valorInicial--
    subitracao.classList.add('red')
    adicao.classList.remove('red')
    contador.innerText = valorInicial
    
}


subitracao.onclick = function() {
    intervaloNegativo = setInterval(subitrair, 1000)
    clearInterval(intervaloPosetivo)
    
} 



function adicionar(){
    valorInicial++
    adicao.classList.add('red')
    subitracao.classList.remove('red')
    contador.innerText = valorInicial
    
}

adicao.onclick = function(){
    intervaloPosetivo = setInterval(adicionar, 100)
    clearInterval(intervaloNegativo)
}  
