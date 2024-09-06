
// programa que dita a faixa etaria

let nome = prompt('Digite o seu nome')
let idadeString = prompt('Digite a sua idade')
let idade = parseInt(idadeString)

let menor = `Olá ${nome}, Voçê é menor de idade`
let maior = `Olá ${nome}, Voçê é maior de idade`

if((nome === 'Daurisio Machoe' || nome === 'daurisio machoe') && idade >=18) {
    document.write(`${maior}, Você é estudante de Engenharia Hidraulica no ISPG.  `)
} else if((nome === 'Daurisio Machoe' || nome === 'daurisio machoe') && idade < 18) {
    document.write(`${menor}, Você é estudante de Engenharia Hidraulica no ISPG.  `)
} else if((nome !== 'Daurisio Machoe' || nome !== 'daurisio machoe') && idade >=18) {
    document.write(maior)
} else if((nome !== 'Daurisio Machoe' || nome !== 'daurisio machoe') && idade < 18) {
    document.write(menor)
}

 


