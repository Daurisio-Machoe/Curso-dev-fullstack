

function soma(num1, num2) {
    return num1 + num2
}

let result = soma(10, 5)
console.log(result)

// Conversor de milhas para Km

function milhasKm(milhas) {
    let km = milhas * 1.6
    return km
}

let milhas = 150

let resultado = milhasKm(milhas)
document.write(`A tua velocidade é de ${milhas} Milhas que corresponde a ${resultado} Km`)