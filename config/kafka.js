/**
 * @file kafka.js
 * @description Kafka configuration and messaging setup
 * @current-functionality Establishes a connection with Kafka and handles messaging
 * @TODO Enhances Kafka configuration and implements additional messaging functionality as required
 */

const { Kafka } = require('kafkajs')
const config = require('./config')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: config.kafka.brokers
})

module.exports = kafka

