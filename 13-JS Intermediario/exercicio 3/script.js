

// --Variable--//
let Maputo = ['Matola', 'Boane', 'Maracuene','Manhiça', 'Bobole']
let Gaza = ['Bilene-Macia', 'Xai-xai', 'Chokwe', 'Massingir', 'Mabalane']
let opcoes = document.querySelector('.opcoes')
let provincia = document.forms['nomeFormulario']['provincia']
let x = ''
let distrito = document.querySelector('.distrito')



//--Function--//

provincia.addEventListener('change', function(){
    
    if(provincia.value === 'Maputo' ) {
        x = Maputo
    } else if(provincia.value === 'Gaza') {
        x = Gaza
    }
    
    let contador = 0
    while(contador <= 4) {
        opcoes.innerHTML += `
            <option>${x[contador]}</option>
            <br>
            `
        contador++
    }
    console.log(opcoes)
})
if(!provincia) {
    `.distrito {
        display; block:
    }`
}



