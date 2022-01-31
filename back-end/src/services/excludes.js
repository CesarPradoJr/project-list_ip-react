//Aqui registramos os ips na lista de exclusão
class ExcludeService {
    constructor (ExcludeModel) {
      this.exclude = ExcludeModel
    }
  
    async get () {
      const excludes = await this.exclude.findAll()
      return excludes
    }
  
    async adicionar (excludeDTO) {
      console.log('excludeDTO', excludeDTO)
      const exclude = await this.exclude.findOne({
        where: {
          ip: excludeDTO.ip
        }
      })
      if (exclude != null) {
        throw new Error('Já existe esse IP cadastrado!')
      }
      try {
        await this.exclude.create(excludeDTO)
      } catch (erro) {
        console.error(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = ExcludeService
  