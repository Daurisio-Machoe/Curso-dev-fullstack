/*

ARROW FUNCTION

ES6

As funções de seta nos permitem escrever uma sintaxe de função mais curta
*/


// Return implicito

/*const soma = (param1, param2) => {
    return param1 +  param2
}*/

const soma = (param1, param2) => param1 + param2

const resultado = soma(2, 4)

console.log(resultado)

//não é obrigatorio o uso de parenteses caso a AF tenha apenas um parametro?//

const teste = param1 => param1

console.log(teste('DAURISIO'))