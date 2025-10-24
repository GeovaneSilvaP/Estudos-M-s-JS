//Exercício 1 — Dados do usuário

const user = {
  id: 912,
  nome: "Ana Paula",
  idade: 25,
  cidade: "Brasília",
  premium: true,
};

const { nome, idade } = user;

console.log(nome, idade);

//Exercício 2 — Renomeando propriedades

const user2 = {
  nome: "Carlos",
  idade: 32,
  cidade: "Recife",
};

const { cidade: local } = user2;

console.log(local);

//Exercício 3 — Valores padrão

const settings = {
  theme: "dark",
};

const { theme, plano = "Free" } = settings;

console.log(plano);

//Exercício 4 — Pegando apenas os primeiros itens

const produtos = ["Mouse", "Teclado", "Monitor", "SSD"];

const [item1, item2] = produtos;

console.log(item1, item2);

//Exercício 5 — Pular item no destructuring

const coords = [12.3, 55.2, 89.1];

const [, coord2] = coords;

console.log(coord2);

//Exercício 6 — Parâmetros de função

function mostrarUsuario({ nome, premium }) {
  console.log(`Seu nome é: ${nome} e seu usuario é premium: ${premium}`);
}

mostrarUsuario({
  nome: "Marina",
  idade: 19,
  premium: false,
});

//Exercício 7 — API Fake

const response = {
  data: {
    id: 1,
    title: "Hello API",
    likes: 300,
  },
};

const {
  data: { title, likes },
} = response;

console.log(title, likes);

//✅ 4. DESAFIO FINAL (Vida real mesmo)

const produto1 = {
  id: 9,
  nomeP: "Notebook Gamer",
  preco: 5599,
  estoque: {
    lojas: 5,
    online: 12,
  },

  categorias: ["Eletrônicos", "Informática", "Promoções"],
};

const {
  nomeP,
  preco,
  estoque: { lojas },
} = produto1;

console.log(nomeP, preco, lojas);

const {
  categorias: [categoria1],
} = produto1;

console.log(categoria1);

//Teste
function teste() {
  const paragrafo = document.getElementById("paragrafo");

  const data = {
    nomeA: "Aurora",
    idadeA: 12,
    cidade: "Natal",
    social: {
      gmail: "aurora@gmail.com",
      celular: "9898367 - 1829",
    },

    pais: ["Geovane", "Cryst"],
  };

  const {
    nomeA,
    idadeA,
    social: { gmail },
    pais: [pai, mae],
  } = data;

  console.log(nomeA, idadeA, gmail, pai, mae);

  paragrafo.textContent = `
Seu nome é ${nomeA} e tem ${idadeA} anos, o nome do seu pai é ${pai} e da sua mãe ${mae}. Seu Gmail: ${gmail}
`;
}

teste();
