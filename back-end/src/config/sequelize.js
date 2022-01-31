//Importação do sequelize o ORM responsável por criar tabelas dentro do banco.

const Sequelize = require('sequelize')
const configDatabase = require('./database')

//Puxa todas as configurações que esta no nosso Database.
const sequelize = new Sequelize(configDatabase)

module.exports = sequelize
