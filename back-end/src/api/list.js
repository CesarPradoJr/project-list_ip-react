//Em geral nesse arquivo definimos as rotas onde irão ser feita as requisições

//imports necessário para rodar o arquivo corretamente
const express = require('express')
const router = express.Router()
const ListService = require('../services/list')
const { list } = require('../models')

const listServices = new ListService(list)


router.get('/', async (req, res) => {
  let lista_padrao = await listServices.get()
  res.status(200).json(lista_padrao)
})

module.exports = router
