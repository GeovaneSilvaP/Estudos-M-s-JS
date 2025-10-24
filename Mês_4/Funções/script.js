//FUNÇÕES
function calcularMedia(numeros){
    if (numeros.length === 0) return 0;

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    const media = soma / numeros.length;
    return media;
}

console.log(calcularMedia([10, 20, 30]));
console.log(calcularMedia([90, 100, 300]));
console.log(calcularMedia([7, 50, 340]));

//FUNÇÕES
function primeriraFunçao(){
    console.log("Olá, mundo!");
}

primeriraFunçao()

//FUNÇÕES
function saudacao(nome) {
    console.log("Bem-vindo, " + nome + "!");
}

saudacao("Geovane")

//FUNÇÕES RETURN
function maiorNumero(a, b) {
    if (a > b) {
        return a;
    }else{
        return b;
    }
}

console.log(maiorNumero(5, 8));
console.log(maiorNumero(100, 80));

//FUNÇÕES ARROW
const arrow = (a, b) =>{
    return a * b;
}

console.log(arrow(5, 5));

//FUNÇÕES ARROW
const filPares = (numeros) =>{
   return numeros.filter((num)=>{
   return num %2 ===0;
    });
}

const lista = [1, 2, 3, 4, 5, 6];
console.log(filPares(lista));

//FUNÇÕES ARROW
const nome = (user) =>{
    if (user > 18) {
      return console.log("Maior de idade");
    }else{
        return console.log("Menor de idade");
    }
}

nome(23);
nome(17);