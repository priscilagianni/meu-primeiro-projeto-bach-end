const mongoose = require('mongoose')
require('dotenv').config()

console.log('MONGO_URL:', process.env.MONGO_URL);


async function conectaBancoDeDados() {
try{
    console.log('conexão com o banco de dados iniciou')

    await mongoose.connect(process.env.MONGO_URL)

    console.log('conexão com o banco de dados foi feite com sucesso!')
}catch(erro){
    console.log(erro)
}
}

module.exports = conectaBancoDeDados
