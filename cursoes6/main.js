
import axios from 'axios';

 import ClasseUsuario,{idade as IdadeUsuario} from './functions';

 ClasseUsuario.info();
 
 const h4Element = document.querySelector('h4#idade');
 const h4Text = document.createTextNode("A idade é "+IdadeUsuario);
 console.log(h4Element, h4Text)

 const delay = () => new Promise(resolve => setTimeout(resolve('ok'), 1000));

 async function umPorSegundo() {
  try {
    console.log(await delay());
    console.log(await delay());
    console.log(await delay());
   
 } catch (error) {
    console.log(error);
  }
}

 umPorSegundo();

 async function getUserFromGithub(user) {
   try {
     const response = await axios.get(`https://api.github.com/users/${user}`);
     console.log(response.data);
   } catch (error) {
     console.log('Usuário não existe');
   }
  }
  getUserFromGithub('rmlovix');
  getUserFromGithub('rmlovix123');
 
 class Github {
   static async getRepositories(repo) {
    try {
 const response = await axios.get(`https://api.github.com/repos/${repo}`);
console.log(response.data);
} catch (error) {
 console.log('Repositório não existe');
}
}
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async usuario => console.log(await axios.get(`https://api.github.com/users/${usuario}`));
 buscaUsuario('rmlovix');


//EXERCICIO 1


class Usuario {
    isAdmin(){
        return false
    }
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }
    

}
class Admin extends Usuario {
    isAdmin(){
        return true
    }
    constructor(email, senha){
        super(email, senha)
    }
    
}
const User = new Usuario('email@teste.com', 'teste123')
const Adm = new Admin('email@teste.com', 'teste123')


// EXERCICIO 2

//2.1

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
const idades = usuarios.map((item)=>{
    return item.nome
})
console.log(idades)



//2.2

const trabs = usuarios.filter((item)=>{
    if(item.idade >= 18 && item.empresa == 'Rocketseat'){
        return true
    } else {
       return false
    }
})
console.log(trabs)


//2.3

const trabson = usuarios.find((item) =>{
   return item.empresa == "Facebook"
})

console.log(trabson)


//2.4

const brs = usuarios.map((item) =>{
    item.idade = item.idade *2
    return item
}).filter((item)=>{
    if(item.idade <= 50){
        return true
    } else {
       return false
    }
})
console.log(brs)



// EXERCICIO 3

// 3.1

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map((item) => {
   return item + 10
})

console.log(arr2)

// 3.2
// Dica: Utilize uma constante pra function

const usuario2 = ['Romulo', 27]

const mostraIdade = usuario2.map((item) => {
    return item;
})
console.log(mostraIdade)

// 3.3
// Dica: Utilize uma constante pra function

const nome2 = (()=> 'Romulo')()
const idade = (()=> 27)();
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
console.log(mostraUsuario(nome2, idade));
console.log(mostraUsuario(nome2));



// 3.4
const promise = ()=> {
    return new Promise((resolve, reject)=> {
        return resolve();
    })
}
   


//EXERCICIO 4

// 4.1

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome); 
console.log(cidade); 
console.log(estado);

//4.2

var usuario3 = {
    nome: 'Diego',
    idade: 23
}

function mostraInfo(user) {
    return `${user['nome']} tem ${user['idade']} anos.`;
}
console.log(mostraInfo(usuario3))

// EXERCICIO 5

// 5.1

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x, y)

// 5.2

var usuario = {
    name: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario5_2 = { ...usuario, name: 'Gabriel'}
console.log(usuario5_2)

   // EXERCICIO 6

const usuario6_2 = 'Diego';
const idade6_2 = 23;
console.log(`O usuário   ${usuario6_2}  possui  ${idade6_2} anos`);


// EXERCICIO 7

const nome7_2 = 'Diego';
const idade7_2 = 23;
const usuario7_2 = {
 nome7_2,
 idade7_2,
 cidade: 'Rio do Sul',
};
console.log(usuario7_2)

