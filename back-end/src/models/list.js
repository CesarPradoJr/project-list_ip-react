const list = (sequelize, DataTypes) => {
    const List = sequelize.define('List', {
      ip: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'list'
    })
  
    return List
  }
  
  module.exports = list
  