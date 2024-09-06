
let formulario = document.querySelector('#formCadastro')



formulario.onsubmit = function(evento){
    evento.preventDefault()
    let temErro = false

    let inputNome = document.forms['formCadastro']['nome']

    if (!inputNome.value) {
        temErro = true
        inputNome.classList.add('inputErro')
        
        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente' 
    } else {
        inputNome.classList.remove('inputErro')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['formCadastro']['email']

    if (!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('inputErro')
        
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o e-mail corretamente' 
    } else {
        inputEmail.classList.remove('inputErro')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let selectCidade = document.forms['formCadastro']['cidade']

    if (!selectCidade.value) {
        temErro = true
        selectCidade.classList.add('inputErro')
        
        let span = selectCidade.nextSibling.nextSibling
        span.innerText = ' Selecione uma Cidade' 

    } else {
        selectCidade.classList.remove('inputErro')
        let span = selectCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }
    
}