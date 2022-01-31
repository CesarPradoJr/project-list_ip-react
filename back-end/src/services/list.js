
class ListService {
    constructor (ListModel) {
      this.list = ListModel
    }
  
    async get () {
      const lists = await this.list.findAll()
      return lists
    }
  
    async adicionar (listDTO) {
      console.log('listDTO', listDTO)
      try {
        await this.list.create(listDTO)
      } catch (erro) {
        console.error(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = ListService
  