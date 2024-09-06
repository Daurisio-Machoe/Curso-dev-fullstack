// Variable//
let contador = document.querySelector('#contador')
let subtrair = document.querySelector('#subtrair')
let somar = document.querySelector('#adicionar')




// Events//

subtrair.addEventListener ('click', function() {  
    contador.innerText--   
})

somar.addEventListener('click', function(){
    contador.innerText++
})



