//Arquivo onde faz a divisão de rotas

const express = require('express')
const excludeRouter = require('./excludes')
const listRouter = require('./list_tor')
const defaultRouter = require('./list')

const router = express.Router()


// São duas divisões "/list" onde traz a lista geral e "/excludes" onde traz a lista filtrada com todas tratativas e contem a rota para add os IP na lista de exclusão
router.use('/excludes', excludeRouter)
router.use('/list', listRouter)
router.use('/default_list', defaultRouter)

module.exports = router
