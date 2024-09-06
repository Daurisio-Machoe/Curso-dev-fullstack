// Calculo da media
let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

// string to number
let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)
let media = (nota1 + nota2) / 2
mediaMinima = 7

// condições
if (media >= mediaMinima) {
    document.write('Ok, Você passou de ano.')
} else if(media < mediaMinima) {
    document.write('Ops, Voçê não passou de ano!')
}

document.write('<br>')

if(media >= mediaMinima && media ===10) {
    document.write('NOSSA! Você foi muito bom, continue assim')
} else if(media >= mediaMinima && media ===9) {
    document.write('Você mandou bem!, vamos tentar chegar no 10')
}

