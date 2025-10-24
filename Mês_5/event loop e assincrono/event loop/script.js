//🧩 Exercício 1 – Promise simples com sucesso e erro
function validarNumero(num) {
   const minhaPromise = new Promise((resolve, reject) => {

    if (num > 10) {
        resolve("Número maior que 10")
    }else{
        reject("Número menor que 10")
    }
   })

   return minhaPromise;
}

validarNumero(17)
.then((respota)=>{
    console.log(respota);
})
.catch((error)=>{
    console.log(error);
})

//🕒 Exercício 2 – Simular carregamento com setTimeout
function carrgarDados(){
    return new Promise((resolve) => {
        setInterval(()=>{
            resolve({status: "ok", dados: [1, 2, 3]})
        },2000)
    })
}

carrgarDados()
.then((resposta)=>{
    console.log(resposta);
})
.catch((error)=>{
    console.log(error);
})

//🔄 Exercício 3 – Encadeando Promises
function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(()=>{
        resolve({id: 1, nome: "Geovane"})
        },1000)
    })
}

function buscarPostUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(["Post 1", "Post 2"])
        },1000)
    })
}

buscarUsuario()
.then((resposta)=>{
    return buscarPostUsuario(resposta.id)
    .then((post)=>{
        console.log(`Usuario ${resposta.nome} tem ${post.length} post`);
    })
})

//🌐 Exercício 4 – Promise com fetch
const teste = document.getElementById('teste')

async function buscarCep(cep) {
    const respose = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if (!respose.ok) {
        console.log("Error na requisao", respose.status);
    }

    const meuCep = await respose.json();

    const p = document.createElement("p")
    p.textContent = `
    minha cidade ${meuCep.localidade}`

    teste.appendChild(p)
    
}

buscarCep("65210-000")

//🧠 Exercício 5 – Promise.all
const promise1 = new Promise((resolve) => { setTimeout(()=>{resolve("A")},1000)})

const promise2 = new Promise((resolve) => { setTimeout(()=>{resolve("B")},2000)})

const promise3 = new Promise((resolve) => { setTimeout(()=>{resolve("C")},3000)})

Promise.all([promise1, promise2, promise3])
.then((resposta)=>{
    console.log("Resultado:", resposta);
})
.catch((error)=>{
    console.log(error);
})

//