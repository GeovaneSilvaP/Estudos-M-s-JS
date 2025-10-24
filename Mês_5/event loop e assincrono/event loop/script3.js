//setTimeout
console.log("1 - Antes do setTimeout");

setTimeout(()=>{
    console.log("2 - Durante o setTimeout");
},1000)

console.log("3 - Antes do setTimeout");

//setInterval
const testeInterval = setInterval(()=>{
    console.log("1 - Durante o setTimeout");
    clearInterval(testeInterval)
 },1000)

 

//clearTimeout
let x = 0;

const myTime = setTimeout(()=>{
    console.log("O x é 0");
},1500)

x = 5;

if (x > 0) {
    clearTimeout(myTime);
    console.log("O x passou de 0;");
    
}

//clearInterval

// const myInterval = setInterval(()=>{
//     console.log("Imprimindo intervalos");
// },500)

// setInterval(()=>{
//     console.log("Não precisamos mais repitir");
//     clearInterval(myInterval)
// },1500)

//🟢 Básico — Conceito e uso

//1 -Mensagem com atraso
setTimeout(()=>{
    console.log("Ola mundo");
},3000)

//2- Contagem regressiva simples
let contagem = 3;

const regressiva = setInterval(()=>{
    if (contagem > 0) {
        console.log(`${contagem}`);
        contagem--;
    }else{
        console.log("Vai");
        clearInterval(regressiva)
    }
},1000)

console.log(regressiva);

//3- Mudança de cor automática
const cores = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f1c40f"];
let indice = 0;

function mudarCor() {
    document.body.style.backgroundColor = cores[indice];
    indice = (indice + 1) % cores.length;
}

setInterval(mudarCor, 2000)

//4- Parar o intervalo
