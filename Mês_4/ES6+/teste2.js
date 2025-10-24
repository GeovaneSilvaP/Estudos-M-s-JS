// Método array.fill
const arr = new Array(50);

arr.fill("LOL", 3 , 6);

console.log(arr);

const newArray = [1, 2, 3, 4, 5, 6];

newArray.fill("lol", 1, 3);

console.log(newArray);

//Introdução ao destructuring
const usuario = {
    nome: "Geovane",
    sobreNome: "Silva",
    idade: 23,
    cidade: "Cajari",
    social: {
        facabook: "LINKINGHGHJ@GHHJGGHJG",
        instgram: "HHGGGHIYHH@HLKHLHHH"
    }
}

const {nome, idade} = usuario;

console.log(nome, idade);

const {facabook, instgram} = usuario.social;

console.log(facabook, instgram);

const {profissao = "Programador"} = usuario;

console.log(profissao);

console.log(usuario);

//Fazendo destructuring num array
const arrayDestruc = ["Maça", "Banana","Uva","Pera"];

const [fruta1, fruta2, fruta3, fruta4] = arrayDestruc;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(fruta4);

//Fazendo swap de variáveis com destructuring
let x = 11;
let y =23;

console.log("x:",x);
console.log("y:",y);

[x, y] = [y, x];

console.log("x:",x);
console.log("y:",y);

let string = "Eu";
let string2 = "Curso de javascript";

[string, string2] = [string2, string];

console.log(string);
console.log(string2);

//Introdução ao spread operator
const front = ["React", "Vue", "Angular"];

const back = ["Python", "Ruby", "NodeJs"];

console.log(...front);
console.log([back]);

console.log(...front, "Java", ...back);

// Usando o spread nos argumentos da função
function saudacao(nome, idade, cidade){
    console.log(`Ola ${nome}, Você tem ${idade} e mora em ${cidade}`);
}

const user3 = ["Geovane", 23, "Cajari"];

saudacao(...user3);

// Introdução ao Rest Params 
function multiplicacao(mult, ...rest){
    return rest.map(nums => nums * mult);
}

console.log(multiplicacao(5, 1,2,3,4,5,));

// Introdução as Promises
let defer = new Promise((resolve, reject) => {
    setTimeout(()=>{
    if (true) {
        resolve("Carregando formulario...")
    }else{
        reject("Error");
    }
    },2000)
})

defer
.then((data)=>{
    console.log(data);
    return "Enviando...";
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Enviado com sucesso!!");
});

//Exemplo usando múltiplas Promises
const currency = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({currency: "Euro", value: 3.50})
    },2000)
})

const countries = new Promise((resolve, reject) => {
    resolve(["Brasil", "Italia", "Japão"])
})

Promise.all([currency, countries])
.then((resposta)=>{
    console.log(resposta);
})
.catch((error)=>{
    console.log(error);
})

