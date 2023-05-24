/**
 * @file config.js
 * @description Configuration file for the microservice
 * @current-functionality Holds configuration options for the microservice
 * @TODO Expands the configuration options and handles additional settings as needed
 */

require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'database_name'
  },
  kafka: {
    brokers: process.env.KAFKA_BROKERS || 'localhost:9092',
    topic: process.env.KAFKA_TOPIC || 'data_topic'
  },
  // Add more configuration options as needed
}

