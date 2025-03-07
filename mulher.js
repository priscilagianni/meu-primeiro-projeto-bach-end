//primeiro configura a rota e depois a gente cria a função que reproduz a resposta

const express = require("express") 
const router = express.Router()// criando
const app = express()
const porta = 3333

//criaando a função mostra a mulher
function mostraMulher(request, response){//usa request e response pq a função se refere a um verdo
    response.json({ // envia para internet varias informação json
      nome: 'Priscila Gianni',
      imagem: 'Imagem do WhatsApp de 2025-01-23 à(s) 16.24.34_f880ee70.jpg',
      minibio:'estudante e aprendiz'
    }) 
}

function mostraPorta(){
console.log("Servidor criado e rodando na porta ",  porta)
}

//segunda parte da rota,criar a parte do nosso endereço
app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)