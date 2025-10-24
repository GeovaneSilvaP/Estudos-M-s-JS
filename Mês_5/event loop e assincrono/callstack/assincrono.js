const loginUserPromise = (email, senha) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error("error no login")); 
        }

        console.log("usuario logado!");
        resolve({email});
        
    })
}

loginUserPromise("Geovane@gmail.com", "123456")
.then((resposta)=>{
    console.log(resposta);
})
.catch((error)=>{
    console.log(error);
})

//Exercício 1: Básico - Buscar Dados de uma API
async function buscarDados(id) {
    
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        const dados = await response.json();

        console.log(dados.title);
    }catch(error){
        console.error("Erro ao buscar post:", error)
        
    }
    
}

buscarDados(2);

//Exercício 2: Tratamento de Erros com Try/Catch
async function buscarDados2(id) {
    
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!response.ok) {
            throw new Error("Post não encontrado!", response.status)

        }

        const dados = await response.json();

        console.log(dados.title);
    }catch(error){
        console.error("Erro ao buscar post:", error)
        
    }
    
}

buscarDados2(999);

//Exercício 3: Sequência de Chamadas Assíncronas
async function buscarPosts(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userResponse.json();

        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await postResponse.json();

        return {nome: user.name, postCount: posts.length};

    } catch (error) {
        console.error("Erro ao buscar post:", error)
    }
}

buscarPosts(1).then((result)=>{
    console.log(result);
})

//Exercício 4: Paralelismo com Promise.all
async function fetchMultipleUsers() {
    try {
        const userPromise = [1, 2, 3].map(id =>{
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((rest)=> rest.json());
        });

        const users = await Promise.all(userPromise);
        const totalIds = users.reduce((sum, user)=> sum + user.id, 0);

        return totalIds;

    } catch (error) {
        console.error('Erro:', error);
        return 0;
    }
}

fetchMultipleUsers().then(total => console.log('Soma dos IDS:', total))