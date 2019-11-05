// exercicio 1
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}
function printaEndereco(end){
    return `O usuário mora em ${end["cidade"]} / ${end["uf"]}, no bairro ${end["bairro"]}, na rua "${end["rua"]}" com
    nº ${end["numero"]}.`
}
console.log(printaEndereco(endereco))

// exercicio 2

function pares(x, y){
    for (i = x ; i <= y ; i+=2){
        if (i%2 ==0){
            console.log(i)
        }
    }
            
}
pares(10, 31)
console.log(10%2 ==0)

//exercicio 3

var skills = [
    "ReactJS",
    "React Native",
    "Javascript"
]

function temHabilidade(sk){
    for(i=0; i<=2; i++){
        if(sk[i]=="Javascript"){
            return true 
        }
    }
}
console.log(temHabilidade(skills))

//exercicio 4

