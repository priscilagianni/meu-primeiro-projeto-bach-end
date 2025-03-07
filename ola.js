//repetir a estrutura do server


const express = require("express") //Router esta vindo dentro do express
const router = express.Router()
const app = express()
const porta = 3333

function mostraOla(request, response) { // que faça requisção e envie uma resposta quando for chamada
response.send("Olá, mundo!")//nao quer mostrar no console, quero que mostre no navegador exemplo. localhost:3333/ola, quero que apareça lá a função send envia/manda
}


function mostraPorta(){
console.log("Servidor criado e rodando na porta ",  porta)
}
//criar o endereço barra ola e dizer que quando acessar o endereço execute a função mostra ola
app.use(router.get('/ola', mostraOla))//get metodo que paga informações, o get espera duas informação la dentro, 1 ele espera qual o endereço? /ola e depois separa com virgula mostraOla

app.listen(porta, mostraPorta)