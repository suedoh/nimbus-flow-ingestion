/**
 * @file dataModel.js
 * @description Data model definition for the database
 * @current-functionality Defines the schema for data storage
 * @TODO Enhances the data model and adds additional functionality as needed
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Data = sequelize.define('Data', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // Define your data model fields here
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
  },
  value: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null values for the field
  },
}, {
  tableName: 'data', // Adjust the table name as needed
  // timestamps: false, // Remove if you want timestamps in your table
})

module.exports = Data

