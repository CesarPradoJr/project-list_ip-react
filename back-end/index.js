//Arquivo Principal do Backend, onde importamos tudo que iremos utilizar
require('dotenv/config');

const nodemon = require ('nodemon')
const express = require('express')
const cors = require('cors')
const routers = require('./src/api')
const { sequelize } = require('./src/models')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', routers)

//Mensagem onde mostra que nosso banco está up.
sequelize.sync().then(() => {
  console.log('Conectado com o banco de dados.')
})

//Mensagem onde mostra que nosso Backend está up na seguinte porta
app.listen(3333, () => {
  console.log('App online!')
})
