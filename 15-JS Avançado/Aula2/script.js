/*

Hosting (IÇAR, ERGUER)

Hosting é o comportamento padrão de JS de mover as declarações para o top de um escopo

*/

function teste() {

    function outraFunction() {
        console.log('Sou a outa função')
    }

    outraFunction()
}

teste()

