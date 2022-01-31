//Aqui listamos todos IPs das URLs concatenadas

const express = require('express')
const router = express.Router()
const ApiExternalService = require('../services/api_external')

//Realizamos a busca no ApiExternalService para realizar chamada nas duas APIs externas e retorna para a rota principal
const apiExternalService = new ApiExternalService()

router.get('/', async (req, res) => {  
  try {
    let lista = await apiExternalService.get()
    res.status(200).json(lista)      
  } catch (error) {
      console.log(error);
  }
})


module.exports = router

