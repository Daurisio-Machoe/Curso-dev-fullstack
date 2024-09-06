
let contador = document.querySelector('.contador')
let count = 0

let intervalo = setInterval(function(){
    count++
    contador.innerText = count
},10)

let pausar = document.querySelector('.pausar')

pausar.addEventListener('click', function(){
    clearInterval(intervalo)
})
