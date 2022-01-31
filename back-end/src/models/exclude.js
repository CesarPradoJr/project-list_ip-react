//Model onde cria a tabela "exclude" com o campo "ip" e "obs". Tabela exclusão.

const exclude = (sequelize, DataTypes) => {
    const Exclude = sequelize.define('Exclude', {
      ip: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      obs: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'exclude'
    })
  
    return Exclude
  }
  
  module.exports = exclude
  