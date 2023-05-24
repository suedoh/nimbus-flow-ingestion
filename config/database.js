/**
 * @file database.js
 * @description Database configuration and connection setup
 * @current-functionality Establishes a connection with the database
 * @TODO Enhances database configuration and handles additional database operations
 */

const { Sequelize } = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    port: config.database.port,
    dialect: 'postgres',
  }
)

module.exports = sequelize

