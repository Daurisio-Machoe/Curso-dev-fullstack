//... Escopo...//

/*

Global
Local


- O Escopo determina a visibilidade de uma variavel

- As Funçõs no JS criam o seu próprio escopo
    - As variaveis de uma função não são acessiveis fora dela


*/



function teste() {
    
    a = 123 
}

teste()

console.log(a)


