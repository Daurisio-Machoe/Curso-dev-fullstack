
/*

JSON (Java Script Object Notation)

*/

const objecto = {
    name: 'Daurisio',
    idade:20
}


//... De Objecto simples para JSON...//

const json = JSON.stringify(objecto)

console.log(json)

//...De JSON simples para bjecto//

const jsonParceado = JSON.parse(json) 

console.log(jsonParceado.name)