//🟢 Nível Básico – Fundamentos do Assincronismo~

function cronometro(arams) {
  let contador = 0;
  const inicio = setInterval(() => {
    console.log(contador++);

    if (contador >= 10) {
      clearInterval(inicio);
    }
  }, 1000);
}

cronometro();

//2. Mensagem atrasada

function mensagemAtrasada() {
  console.log("Carregando");

  setTimeout(() => {
    console.log("Pronto!!");
  }, 3000);
}

mensagemAtrasada();

//3. Ordem de execução

function Ordem() {
  console.log("Início");

  setTimeout(() => {
    console.log("Assíncrono");
  }, 0);

  console.log("Fim");
}

Ordem();

//🟡 Nível Intermediário – Promises e Async/Await

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

esperar(2000).then(() => console.log("Passaram 2 segundos"));

//5. Encadeando Promises

function tarefa1() {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log(" retorna uma Promise que resolve após 1s");
      }, 1000)
    );
  });
}

function tarefa2() {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log(" retorna uma Promise que resolve após 2s");
      }, 2000)
    );
  });
}

function tarefa3() {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log(" retorna uma Promise que resolve após 1s");
      }, 1000)
    );
  });
}

tarefa1().then(tarefa2).then(tarefa3);

//6. Async/Await
async function executandoTarefas() {
  await tarefa1();

  await tarefa2();

  await tarefa3();
}

executandoTarefas();

//🔵 Nível Avançado – Fetch, Concorrência e Erros

fetch("https://api.github.com/users/octocat")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Erro:", err));

//8. Async/Await + Fetch
async function getUser() {
  try {
    const response = await fetch("https://api.github.com/users/octocat");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUser();

//9. Execução paralela
const user1 = fetch("https://api.github.com/users/octocat").then((r) =>
  r.json()
);

const user2 = fetch("https://api.github.com/users/octocat").then((r) =>
  r.json()
);

Promise.all([user1, user2]).then(console.log);

//10. Simular erro
function sorteio() {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    if (num > 0.5) {
      resolve("Deu certo");
    } else {
      reject("Deu errado");
    }
  });
}


sorteio()