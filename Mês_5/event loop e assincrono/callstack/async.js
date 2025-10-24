//🟢 Nível 1 – Básico
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function executar() {
    console.log("Iniciando...");
    console.log("Esperando 2 segundos...");
    await esperar(2000);
    console.log("Finalizado!");
}

executar();

//2. Retornando um valor de uma função async
function buscarNumero() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const num = 42;
            resolve(num)
        },1000)
    })
}

async function main() {
    const numero = await buscarNumero();
    console.log(numero);
}

main();

//🟡 Nível 2 – Intermediário

//3. Várias Promises com await

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function pegarUsuario() {
  console.log("Buscando usuário...");
  await esperar(1000);
  return { id: 1, nome: "Maria" };
}

async function pegarPosts(idUsuario) {
  console.log("Buscando posts do usuário...");
  await esperar(1500);
  return [
    { id: 101, titulo: "Meu primeiro post" },
    { id: 102, titulo: "Aprendendo JS" }
  ];
}

async function pegarComentarios(idPost) {
  console.log("Buscando comentários do primeiro post...");
  await esperar(1000);
  return ["Muito bom!", "Adorei o conteúdo!"];
}

async function carregarDados() {
  const usuario = await pegarUsuario();
  console.log("Usuário:", usuario);

  const posts = await pegarPosts(usuario.id);
  console.log("Posts:", posts);

  const comentarios = await pegarComentarios(posts[0].id);
  console.log("Comentários:", comentarios);
}

carregarDados();
