
const express = require("express") 
const router = express.Router()
const app = express()
const porta = 3333


function mostraMulher(request, response){
    response.json({ 
      nome: 'Priscila Gianni',
      imagem: 'Imagem do WhatsApp de 2025-01-23 à(s) 16.24.34_f880ee70.jpg',
      minibio:'estudante e aprendiz'
    }) 
}

function mostraPorta(){
console.log("Servidor criado e rodando na porta ",  porta)
}


app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)