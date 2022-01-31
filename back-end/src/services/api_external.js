//Onde realizamos as requisições nos links disponibilizados
const axios = require('axios');
const ListService = require('../services/list')
const { list } = require('../models')

const listService = new ListService(list)

class ApiExternalService {
    constructor () {
    }
    async get () {
        let result2 = [];
        let ipv6 = "";
        const response = await axios.get('https://onionoo.torproject.org/summary?limit=5000')
        response.data.relays.forEach(element => {
            element.a.forEach(ip => {
                var result = ip.replace("[", "")
                result = result.replace("]", "")
                ipv6 = result.indexOf(":")
                if (ipv6 != -1){
                    listService.adicionar({ip: result, tipo: 'IPV6'})  
                }else{
                    listService.adicionar({ip: result, tipo: 'IPV4'})
                }
                
            });
        });
        const response2 = await axios.get('https://www.dan.me.uk/torlist/')
        result2 = response2.data.split("\n")
        result2.forEach(element => {
            ipv6 = element.indexOf(":")
            if (ipv6 != -1){
                listService.adicionar({ip: element, tipo: 'IPV6'})  
            }else{
                listService.adicionar({ip: element, tipo: 'IPV4'})
            }
        });
    }
}
  
  module.exports = ApiExternalService
  