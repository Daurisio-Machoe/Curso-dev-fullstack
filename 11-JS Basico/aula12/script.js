
document.write('<br>') 
document.write('<br>')
for(let contador=0; contador<=5; contador++) {
    document.write('Hello Daurisio')
    document.write('<br>')
}

document.write('<br>')
document.write('<br>')

for(let numero = 2; numero <= 27; numero ++ ) {
    document.write(numero+=2)
    document.write('<br>')
}

document.write('<br>')
document.write('<br>')
let opcoes

for(dataNascimento = 1900; dataNascimento <= 2021; dataNascimento++) {
    opcoes += `<option>${dataNascimento}</option>`
}

document.querySelector('#ano').innerHTML=opcoes


let lista = ''
let clientes = ['Ana', 'Daurisio', 'Delio', 'Joana', 'Maria']



for(contador = 0; contador <= clientes.length - 1; contador++ ) {
    lista += `<li>${clientes[contador]} ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista