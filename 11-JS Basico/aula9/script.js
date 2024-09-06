// ...Variaveis...//
let nome = prompt('Digite o seu nome ?')


//...Condição...//

if(nome === 'Daurisio' || nome === 'daurisio') {
    let idade = prompt('Quantos anos tens ?')
    document.write(`Bem vindo ${nome}`)
} else {
    document.write(`Desculpe senhor ${nome} o seu acesso não é permitido!`)
}

if(idade < 18) {
    document.write(`Alguma coi`)
}

