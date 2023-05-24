const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const DataModel = sequelize.define('Data', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
})

module.exports = DataModel

