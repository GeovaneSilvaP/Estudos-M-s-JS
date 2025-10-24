//Microtasks e Macrotasks
console.log("Codigo princaipal");

setTimeout(()=>{
    console.log("Segundo codigo");
})

Promise.resolve().then(()=>{
    console.log("Terceiro codigo");
})

//🧩 Exercício 2 – Microtask com queueMicrotask
console.log("A");

queueMicrotask(()=>{console.log("B (Microstaks)");
})

setTimeout(()=>{
    console.log("C (Macrostaks)");
})

//🧩 Exercício 3 – Misturando Promises e Timeouts
const minhaPromise = new Promise((resolve) => {
    console.log("Geovane");
    setTimeout(()=>{
        resolve("Aurora")
    },1000)
})

minhaPromise.then((rest)=>{
    console.log(rest);
})

//
const meuUsuario = new Promise((resolve, reject) => {
    console.log("Carregando...");
    setTimeout(()=>{
        resolve({nome: "Maria", idade: 23})
    },2000)
})

meuUsuario.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})