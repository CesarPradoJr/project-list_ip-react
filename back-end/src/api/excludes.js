//Em geral nesse arquivo definimos as rotas onde irão ser feita as requisições

//imports necessário para rodar o arquivo corretamente
const express = require('express')
const router = express.Router()
const { exclude } = require('../models')
const { list } = require('../models')
const ExcludeService = require('../services/excludes')
const { validationResult } = require('express-validator')
const ApiExternalService = require('../services/api_external')
const ListService = require('../services/list')

const excludeServices = new ExcludeService(exclude)
const apiExternalService = new ApiExternalService()
const listServices = new ListService(list)

//"/lista_filtrada" rota para trazer a lista sem os ips que forem passados na lista de exclusão.
router.get('/lista_filtrada', async (req, res) => {
  let lista2 = []
  let lista = await listServices.get()
  const exclude = await excludeServices.get()
  exclude.forEach(element => {
    const removeIndex = lista.findIndex( item => item.ip == element.ip );
    lista.splice( removeIndex, 1 );  
  })
  res.status(200).json(lista)
})

//"/add_exclude" rota que adiciona IP na lista de exclusão.
router.post('/add_exclude', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  
  const ip = req.body
  console.log(ip)
  try {
    await excludeServices.adicionar(ip)
    res.status(201).json({ message: 'Ip adicionado a lista de exclusão!' })
  } catch (erro) {
      console.log('erro.message', erro.message)
      res.status(400).send({ message: erro.message })
  }
})

router.get('/exclude_list', async (req, res) => {
  let lista_exclusão = await excludeServices.get()
  res.status(200).json(lista_exclusão)
})

module.exports = router
