const { Kafka } = require('kafkajs')
const config = require('./config')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: config.kafka.brokers
})

module.exports = kafka

