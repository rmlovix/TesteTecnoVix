 
 function monochamp(champ){
// M, A
// Mono, All
    if(champ === 'M'){
        return 'Mono';
    } else if(champ === 'A'){
        return 'All'
    }
    else{
        return 'Open'
    }
}
var resultado = monochamp('M')
console.log(resultado) 


function monochamp(champ){
    switch(champ){
        case 'M':
            return 'Mono';
            case 'A':
                return 'All';
                default:
                    return 'Open'
    }
}
var resultado = monochamp('A')
var resultado2 = monochamp('Yasuo')
console.log(resultado)
console.log(resultado2)
