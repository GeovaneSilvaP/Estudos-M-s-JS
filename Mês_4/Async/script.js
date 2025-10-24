async function viaCep(cep) {
    const result = document.getElementById('result');

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok) {
        throw new Error("Error " + response.status);
    }
    
    const cidade = await response.json();
    console.log(cidade);

    result.innerHTML = `
    <p>Cep: ${cidade.cep}<p>
    <p>Cidade: ${cidade.localidade}</p>
    <p>DDD: ${cidade.ddd}</p>
    `

    return cidade;
}

 const fetchBtn = document.getElementById('fetchBtn');

 fetchBtn.addEventListener('click', () =>{
    viaCep("65210000")
    .then(data => console.log("Received data:", data))
    .catch(error => console.error("Error fetching CEP:", error));
 })

 //PROMISES
 function verificarNumero(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (num %2 === 0) {
                resolve("É um numero par")
            }else if (num %2 !== 0) {
                resolve("É um numero impar")
            } else {
                reject("Numero invalido")
            }
        },2000)
    })
 }

 verificarNumero(10)
 .then((result)=>{
    console.log(result);
 })
 .catch((error)=>{
    console.log(error);
 })

//PROMISES
const myPromise = new Promise((resolve, reject) => {
    const nome = "Geovane";

    if (nome === "Geovane") {
        resolve("Usuário Geovane encontrado!")
    }else{
        reject("O usuário Geovane não foi encontrado!")
    }
})

myPromise
.then((data)=>{
    return data.toUpperCase()
})
.then((dataLog)=>{
    console.log(dataLog);
})

//RETORNO DO CATCH
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "João";

    if (nome === "Geovane") {
        resolve("Usuário Geovane encontrado!")
    }else{
        reject("O usuário Geovane não foi encontrado!")
    }
})

myPromise2
.then((data)=>{
    return data.toUpperCase()
})
.then((dataLog)=>{
    console.log(dataLog);
})
.catch((error)=>{
    console.log(error);
})  
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("P1 ok");
    },2000)
})

const p2 = new Promise((resolve, reject) => {
    console.log("P2 ok");
})

const p3 = new Promise((resolve, reject) => {
    console.log("P3 ok");
})

Promise.all([p1, p2, p3])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

//ASYNC E AWAIT + FETCH
async function buscarUsuario(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error("Error na requisiçao") + response.status;
        }

        const users = await response.json();

        console.log(users);
        
    } catch (error) {
        console.log(error);
    }
}

buscarUsuario(1)

//ASYNC E AWAIT

function getUser (id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Usuário não encontrado (status: ${response.status})`);
      }
      return response.json();
    })
    .catch(error => {
      console.log("Erro na requisição:", error.message);
      return null;
    });
}
async function showUserName(id) {
  const user = await getUser (id);
  if (user && user.data) {
    console.log(`O nome do usuário é: ${user.data.first_name}`);
  } else {
    console.log("Usuário não encontrado ou erro na requisição.");
  }
}
showUserName(1);