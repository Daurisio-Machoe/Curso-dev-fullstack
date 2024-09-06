
// programa que dita a faixa etaria

function clicar() {
    let nome = prompt('Digite o seu nome')
let idadeString = prompt('Digite a sua idade')
let idade = parseInt(idadeString)

let menor = `Olá ${nome}, Voçê é menor de idade`
let maior = `Olá ${nome}, Voçê é maior de idade`
let principalDado
let secundarioDado

if((nome === 'Daurisio Machoe' || nome === 'daurisio machoe') && idade >=18) {
    principalDado = `<h1>${maior}!</h1>`
    secundarioDado = `<h2> Você é estudante de Engenharia Hidraulica no ISPG.</h2>`
    document.write(principalDado + secundarioDado)  
} else if((nome === 'Daurisio Machoe' || nome === 'daurisio machoe') && idade < 18) {
    principalDado = `<h1>${menor}!</h1>`
    secundarioDado = `<h2> Você é estudante de Engenharia Hidraulica no ISPG.</h2>`
    document.write(principalDado + secundarioDado)
} else if((nome !== 'Daurisio Machoe' || nome !== 'daurisio machoe') && idade >=18) {
    principalDado = `<h1>${maior}!</h1>`
    document.write(principalDado)
}else if((nome !== 'Daurisio Machoe' || nome !== 'daurisio machoe') && idade < 18) {
    principalDado = `<h1>${menor}!</h1>`
    document.write(principalDado)
} 

}



 


