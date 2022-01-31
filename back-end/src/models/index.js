//Arquivo onde concentra as models e instância o sequelize para inicializar quanco iniciar o Backend.
//Realiza a criação da tabela que esta na model criando a conexão via sequelize
const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Exclude = require('./exclude')
const List = require('./list')

const exclude = Exclude(sequelize, Sequelize.DataTypes)
const list = List(sequelize, Sequelize.DataTypes)

const db = {
  exclude,
  list,
  sequelize
}

module.exports = db
