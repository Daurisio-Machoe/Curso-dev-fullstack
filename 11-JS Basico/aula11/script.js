
let diaSemana = new Date().getDay()
let nomeDiaSemana

switch(diaSemana){
    case 0:
        nomeDiaSemana = 'Domingo'
        break;
    case 1:
        nomeDiaSemana = 'Segunda-feira'
        break;
    case 2:
        nomeDiaSemana = 'Terça-feira'
        break;
    case 3:
        nomeDiaSemana = 'Quarta-feira'
        break;
    case 4:
        nomeDiaSemana = 'Quinta-feira'
        break;
    case 5:
        nomeDiaSemana = 'Sexta-feira'
        break;
    case 6:
        nomeDiaSemana = 'Sabado'
        break;
}

document.write(`Olá! hoje é ${nomeDiaSemana}`)