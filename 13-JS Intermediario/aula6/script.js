let quadrado = document.querySelector('.quadrado')


function minhaFunctin(evento){
  
    console.log(evento.key)
}

//quadrado.onclick = minhaFunctin
//quadrado.onmouseenter = minhaFunctin
//quadrado.onmouseout = minhaFunctin
//quadrado.onmousemove = minhaFunctin


window.addEventListener('keypress', minhaFunctin)