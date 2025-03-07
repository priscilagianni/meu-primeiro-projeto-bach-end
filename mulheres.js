const express = require("express") 
const router = express.Router()//configuramos a rota

const app = express()
const porta = 3333


const mulheres = [ // criamos nossa lista de melheres
{
    nome:'Priscila Gianni',
    imagem:'Imagem do WhatsApp de 2025-01-23 à(s) 21.14.37_0017ddfb.jpg',
    minibio:'estudante'
},
{
    nome:'Maria Lucia',
    imagem:'Imagem do WhatsApp de 2025-01-23 à(s) 21.14.37_0017ddfb.jpg',
    minibio:'Mainha'
},
{
    nome: 'Livia Celi',
    imagem:'Imagem do WhatsApp de 2025-01-23 à(s) 21.14.37_0017ddfb.jpg',
    minibio:'irmã'
}
]//aqui eu tenho uma lista de mulheres que é um array de objetos
    
function mostraMulheres(request, response){ //criamos a função mulheres
response.json(mulheres)//resposta nossa lista de mulheres
}

function mostraPorta(){
console.log("Servidor criado e rodando na porta ",  porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)