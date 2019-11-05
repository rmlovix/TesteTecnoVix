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

var anosDeEstudo = age => {
    switch (true) {
      case age >= 0 && age <= 1:
        console.log(`Você tem ${age} anos de experiência, seu nível é: Iniciante`);
        break;
      case age >= 1 && age <= 3:
        console.log(`Você tem ${age} anos de experiência, seu nível é: Intermediário`);
        break;
      case age >= 3 && age <= 6:
        console.log(`Você tem ${age} anos de experiência, seu nível é: Avançado`);
        break;
      default:
        console.log(`Você tem ${age} anos de experiência, seu nível é: Jedi Master `);
        break;
    }
  };
  anosDeEstudo(5);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master


//exercicio 5

var usuário = {
  Diego: "Javascript, ReactJS, Redux",
  Gabriel: "VueJS, Ruby on Rails, Elixir"
}
function habilidades(hab){
  return `O Diego possui as habilidades: ${hab["Diego"]}
O Gabriel possui as habilidades: ${hab["Gabriel"]}`
}
console.log(habilidades(usuário))