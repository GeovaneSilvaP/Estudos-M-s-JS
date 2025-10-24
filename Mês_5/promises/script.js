function loagingEx1() {
  const loading = document.getElementById("loading");

  loading.textContent = "Carregando...";

  setTimeout(() => {
    loading.textContent = "Pronto!!";
  }, 2000);
}

document.getElementById("btn").addEventListener("click", () => {
  loagingEx1();
});

const btn2 = document.getElementById("btn2");
const status2 = document.getElementById("status");
const resultado2 = document.getElementById("resultado2");

btn2.addEventListener("click", () => {
  status2.textContent = "Carregando dados...";
  resultado2.textContent = "";
  btn2.disabled = true;

  setTimeout(() => {
    const fakeDados = {
      nome: "Geovane",
      idade: 23,
      cidade: "Cajari",
    };

    status2.textContent = "✅ Dados carregados!";
    resultado2.textContent = JSON.stringify(fakeDados, null, 2);
    btn2.disabled = false;
  }, 2000);
});

const btn3 = document.getElementById("btn3");
const status3 = document.getElementById("status3");
const resultado3 = document.getElementById("resultado3");

btn3.addEventListener("click", async () => {
  status3.textContent = "⏳ Carregando usuário...";
  resultado3.textContent = "";
  btn3.disabled = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar usuário");
    }

    const data = await response.json();

    status3.textContent = "✅ Usuário carregado com sucesso!";
    resultado3.innerHTML = `
        <strong>Nome:</strong> ${data.name} <br>
        <strong>Email:</strong> ${data.email} <br>
        <strong>Cidade:</strong> ${data.address.city}
        `;
  } catch (error) {
    status3.textContent = "❌ Erro ao carregar os dados.";
    resultado3.textContent = error.message;
  } finally {
    btn3.disabled = false;
  }
});

const btn4 = document.getElementById("btn4");
const status4 = document.getElementById("status4");
const resultado4 = document.getElementById("resultado4");
const loader = document.getElementById("loader");

btn4.addEventListener("click", async () => {
  const input = document.getElementById("inputId").value.trim();

  status4.textContent = "Carregando...";
  resultado4.textContent = "";
  btn4.disabled = true;
  loader.style.display = "block";

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${input}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar usuário", response.status);
    }

    const data = await response.json();
    status4.textContent = "✅ Usuário carregado com sucesso!";
    resultado4.innerHTML = `
        <strong>Nome:</strong> ${data.name} <br>
        <strong>Email:</strong> ${data.email} <br>
        <strong>Cidade:</strong> ${data.address.city}
        `;
  } catch (error) {
    status4.textContent = "❌ Erro ao carregar os dados.";
    resultado4.textContent = error.message;
  } finally {
    btn4.disabled = false;
    loader.style.display = "none";
  }
});

const buttons = document.querySelectorAll(".load-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".user-card");
    const status = card.querySelector(".status");
    const resultado5 = card.querySelector(".resultado");

    const spinner = document.createElement("span");
    spinner.classList.add("loader");

    status.innerHTML = "";
    resultado5.textContent = "";
    btn.disabled = true;

    status.appendChild(spinner);
    status.insertAdjacentHTML("beforeend", "Carregando...");

    setTimeout(() => {
      const fakeUser = {
        nome: ["Geovane", "Aurora", "Iury", "Rafaella"][
          Math.floor(Math.random() * 3)
        ],
        idade: Math.floor(Math.random() * 20) + 20,
        cidade: ["Cajari", "Rio de Janeiro", "São Luis", "Natal"][
          Math.floor(Math.random() * 3)
        ],
      };

      status.textContent = "Usuário carregado ✅";
      resultado5.innerHTML = `
      <strong>Nome:</strong> ${fakeUser.nome} <br>
      <strong>Idade:</strong> ${fakeUser.idade} <br>
      <strong>Cidade:</strong> ${fakeUser.cidade}
      `;

      btn.disabled = false;
    }, 2000);
  });
});

const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const mensagem6 = document.getElementById('mensagem6');

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  overlay.classList.add('active');
  mensagem6.textContent = "";

  setTimeout(()=>{
    overlay.classList.remove('active');
    mensagem6.textContent = "✅ Formulário enviado com sucesso!";
    form.reset();
  },3000)
})

const progress = document.getElementById('progress');
const btn11 = document.getElementById('btn11');

btn11.addEventListener('click', ()=>{
  let width = 0;
  btn11.disabled = true;

  const interval = setInterval(()=>{
    if (width >= 100) {
      clearInterval(interval);
      btn11.disabled = false;
    }else{
      width++
      progress.style.width = width + "%";
    }
  },50)
})


const user = {
  nome: "Geovane",
  idade: 23,
  cidade: "Cajari"
}
 
const {nome, ...rest} = user

console.log(rest);
